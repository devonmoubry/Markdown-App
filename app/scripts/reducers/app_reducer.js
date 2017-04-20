export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      markdownPreview: ''
    };
  }

  switch (action.type) {
    case "UPDATE_PREVIEW":
      return Object.assign({}, state, { markdownPreview: action.markdownPreview });

    case "SUBMIT_NOTES":
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
          console.log('something');
        }
      })
      return state;

    default:
      return state;
  }
}
