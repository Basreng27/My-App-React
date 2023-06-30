import { createStore } from "redux";

const initialState = {
  sidebarShow: true,
};

const changeState = (state = initialState, { type, ...rest }) => {
  console.log("STORE");
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const store = createStore(changeState);
export default store;
