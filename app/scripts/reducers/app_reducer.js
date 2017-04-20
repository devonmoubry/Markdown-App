import store from '../store.js'

export default function AppReducer(state, action) {
    if (state === undefined) {
        return {
            markdownPreview: '',
            markdownNotes: ''
        };
    }

    switch (action.type) {
        case "UPDATE_PREVIEW":
            return Object.assign({}, state, {
                markdownPreview: action.markdownPreview,
                markdownNotes: action.markdownNotes
            });

        case "SUBMIT_NOTES":
            let markdownNotes = action.markdownNotes;
            console.log('markdownNotes', markdownNotes);
            console.log('length', markdownNotes.length);
            if (markdownNotes.length > 50) {
                $.ajax({
                    type: 'POST',
                    url: 'https://api.backendless.com/v1/data/MarkdownNotes',
                    headers: {
                        "application-id": "24B65924-C870-5359-FF6E-4A5396B35700",
                        "secret-key": "BFBB0F72-782B-9CF9-FF71-D0C15271A900",
                        "application-type": "REST",
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                        "Notes": action.markdownNotes
                    }),
                    success: (data, status, xhr) => {
                        store.dispatch({ type: "CONFIRM_MARKDOWN_SUBMIT" });
                        store.dispatch({ type: "EMPTY_MARKDOWN_NOTES" });
                    }
                })
                return state;
            } else {
                return state;
            }

        case "CONFIRM_MARKDOWN_SUBMIT":
            alert('You have submitted your markdown notes to the server');
            return state;

        case "EMPTY_MARKDOWN_NOTES":
            var newState = {
                markdownNotes: '',
                markdownPreview: ''
            };
            return Object.assign({}, state, newState);

        default:
            return state;
    }
}
