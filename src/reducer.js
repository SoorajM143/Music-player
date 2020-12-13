export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //token:
  // 'BQA58GzGCiyPopHT2uvTjt8Jcrusw1oXe9oKOSgFcJMSymtcbcLMBVgwHESxGR5GghWLvV66p_g20TlrcJr9i2Snf3tIbB3vvCfZmJc2xgcBkAAXEqwauEdkJpn_Q4oY-fbrTLg7DJdtt6wcDUGyCaBzPDJcsZQFCQAqm7ZI8HnpI3gxan4v',
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
