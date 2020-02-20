import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    onKeyPressHandler(e) {
        if(e.keycode === 13) {
            alert('enter!');
            const newTasks = this.state.tasks.concat(this.state.inputValue);
            this.setState({
                inputValue: '',
                tasks: newTasks
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Add something todo" value={this.state.inputValue} onChange={this.onChangeHandler} onKeyPress={this.onKeyPressHandler}></input>
                </div>
                <ul>
                    {this.state.tasks.map(item => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default AddTodo;