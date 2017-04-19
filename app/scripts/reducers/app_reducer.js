export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      markdownPreview: ''
    };
  }

  switch (action.type) {
    case "UPDATE_PREVIEW":
      return Object.assign({}, state, { markdownPreview: action.markdownPreview });

    default:
      return state;
  }
}
