import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTable from './components/todoTable';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TodoBox from './components/todoList';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto' 
  },
  table: {
    minWidth: 1080
  },
  tablehead: {
    background: 'darkgray'
  }
})

const todos = [
  {
    num: 1,
    todo: "영어 쉐도잉",
    dueday: "이번주 일요일",
    ratio: "20%"
  },
  {
    num: 2,
    todo: "지사트 한 회분",
    dueday: "이번주 일요일",
    ratio: "0%"
  },
  {
    num: 3,
    todo: "리액트 연습 및 강의듣기",
    dueday: "이번주 일요일",
    ratio: "40%"
  }
]

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>할일</TableCell>
              <TableCell>기한</TableCell>
              <TableCell>진행도</TableCell>
              <TableCell>체크</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map(c => {
              return (
                <TodoTable 
                key={c.num}
                num={c.num}
                check=''
                todo={c.todo}
                dueday={c.dueday}
                ratio={c.ratio}
                />
              )
            })}
          </TableBody>
        </Table>
        <TodoBox />
      </Paper>
    );
  }
}

export default withStyles(styles)(App);