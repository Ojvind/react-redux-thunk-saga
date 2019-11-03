import { ADD_ARTICLE, DATA_LOADED} from "../constants/action-types";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    dispatch({ type: 'IS_LOADING' });
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        sleep(2000)
        .then(res => {
          dispatch({ type: DATA_LOADED, payload: json });
          dispatch({ type: 'IS_LOADING_DONE' });
        })
      });
  };
}

export function getDataWithSaga() {
  return { type: "DATA_REQUESTED" };
}