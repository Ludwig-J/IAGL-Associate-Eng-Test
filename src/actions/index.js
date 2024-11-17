import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types";

export function fetchTodos() {
  return async function (dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}

//Function added to post the newly typed todo to the server
export function addTodo(newTodo) {
  return async function (dispatch) {
    return axios
      .post("http://localhost:9091/api/todo", newTodo)
      .then(({ data }) => {
        dispatch(addNewTodo(data));
      });
  };
}


// Function added to add the newly typed todo to the state
function addNewTodo(data) {
  return {
    type: ADD_TODO,
    payload: data,
  };
}