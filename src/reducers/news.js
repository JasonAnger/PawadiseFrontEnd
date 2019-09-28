import * as Types from "../constants/ActionTypes";

const inititalState = [];

const news = (state = inititalState, action) => {
  const { id, news, new1, comments, newC, newL, likesQuantity } = action;

  let index = -1;
  switch (action.type) {
    case Types.GET_NEWS:
      state = news;
      return [...state];
    case Types.ADD_NEWS:
      state.unshift(new1);
      return [...state];
    case Types.DELETE_NEWS:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_COMMENTS:
      index = findIndex(state, newC);
      if (index !== -1) {
        state[index].comments = comments;
      }
      return [...state];
    case Types.LIKE_NEWS:
      index = findIndex(state, newL);
      if (index !== -1) {
        state[index].likesQuantity = likesQuantity;
      }
      return [...state];
    default:
      return [...state];
  }
};

const findIndex = (news, newU) => {
  let index = -1;
  for (let i = 0; i < news.length; i++) {
    if (news[i]._id === newU._id) {
      index = i;
      break;
    }
  }
  return index;
};

export default news;
