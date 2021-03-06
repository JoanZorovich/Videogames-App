const initialState = {
  videogames: [],
  dbvideogames: [],
  infogame: {},
  genres: [],
  platforms: []
};

export default function stateManager (state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEOGAMES': 
      return {
        ...state,
        videogames: action.payload,
      }    
    case 'GET_DBGAMES': 
      return {
        ...state,
        dbvideogames: action.payload
      }
    case 'GET_VIDEOGAME_INFO': 
      return {
        ...state, 
        infogame: action.payload
      }
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
      }
    case 'GET_PLATFORMS':
      return {
        ...state,
        platforms: action.payload
      }
    case 'FILTER_BY_GENRE': 
      return {
        ...state,

      }
    default: return state
  }
}