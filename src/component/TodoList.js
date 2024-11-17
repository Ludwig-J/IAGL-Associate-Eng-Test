import React, {Component} from "react";
import Todo from "./Todo";
import {fetchTodos} from "../actions";
import {connect} from "react-redux";

class TodoList extends Component {
  state = {};

  async componentDidMount() {
    await this.props.fetchTodos();
  }

  render() {
    const {todos} = this.props.data;
    console.log("todos", todos);
    return (<ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
          return <Todo key={`todo-${index}`} todo={todo.task}/>;
        })
        : "Add a todo"}
    </ul>);
  }
}

const mapStateToProps = ({data = {}, isLoadingData = false}) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchTodos
  }
)(TodoList);