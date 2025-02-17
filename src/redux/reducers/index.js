const initialState = { favourites: { content: [] } };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      console.log(action.payload + " aggiunto ai preferiti");
      return { ...state, favourites: { ...state.favourites, content: [...state.favourites.content, action.payload] } };
    default:
      return state;
  }
};

export default mainReducer;
