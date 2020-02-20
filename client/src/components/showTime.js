import React from 'react';

class ShowTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <h2>현재 시각은 [{this.state.date.toLocaleTimeString()}]입니다.</h2>
        );
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

export default ShowTime;