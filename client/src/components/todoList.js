import React from 'react';

const todos = [
    
]

class TodoList extends React.Component {
    render() {
        return (
            <ul>

            </ul>
        );
    }
}

class TodoBox extends React.Component {
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Add new todo" id="input"></input>
            <ul id="ul"><TodoList /></ul>
          </form>
        );
    }
}

export default TodoBox;