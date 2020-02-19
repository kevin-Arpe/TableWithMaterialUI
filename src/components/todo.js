import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class CheckBox extends React.Component {
    render() {
        return (
            <input type="checkbox" ></input>
        )
    }
}

class TodoTable extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.num}</TableCell>
        <TableCell>{this.props.todo}</TableCell>
        <TableCell>{this.props.dueday}</TableCell>
        <TableCell>{this.props.ratio}</TableCell>
        <TableCell><CheckBox /></TableCell>
      </TableRow>
    )
  }
}

export default TodoTable;
