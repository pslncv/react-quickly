const Timer = props => {
    if (props.timeLeft == 0) {
        document.getElementById('audio').play()
    }
    if (props.timeLeft == null || props.timeLeft == 0) {
        return <div></div>
    }
    return <h3>Time left: {props.timeLeft}</h3>
}

const Button = (props) => {
    const startTimer = () => {
        return props.startTimer(props.time)       
    }
    return <button
            onClick={startTimer}
            className="timer-button">{props.time} seconds
    </button>
}

class TimerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: null,
            timer: null
        }
        this.startTimer = this.startTimer.bind(this)
    }
    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft === 0) clearInterval(timer)  
            this.setState({
                timeLeft: timeLeft
            })
        }, 1000);
        return (
            this.setState({
                timeLeft: timeLeft,
                timer: timer
            })
        )
    }
    render() {
        return (
            <div className="timer__header">
                <h1 className="timer__title">Timer</h1>
                <div>
                    <Button time='5' startTimer={this.startTimer} />
                    <Button time='10' startTimer={this.startTimer} />
                    <Button time='15' startTimer={this.startTimer} />
                </div>
                <Timer timeLeft={this.state.timeLeft}/>
                <audio id='audio' src="flute_c_long_01.wav" preload="auto"></audio>
            </div>
        )
    }
}

ReactDOM.render(
    <TimerWrapper />,
    document.getElementById('main')
)