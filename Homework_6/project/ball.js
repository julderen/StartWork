import React from "react";

class Ball extends React.Component  {
    constructor(props) {
        super(props);

        this.height = this.props.height;
        this.width = this.props.width;
        this.speed = 1;
        this.state = {bottom: 0, left: 0};
        this.changePosition = this.changePosition.bind(this);
        this.direction = true;
        this.altitude = Math.random() * this.height / 4;
        this.stepleft = Math.random() * 5;
    }

    componentDidMount() {
        setInterval(this.changePosition, this.speed)
    }

    changePosition() {
        var step = 0;
        var shiftBottom = this.width * 2 / 5;
        if ((this.direction === true) && (this.altitude >= this.state.bottom)) {
            step = 0.2 +  5 * ((this.altitude -this.state.bottom) / this.altitude);
            this.direction = true;
        } else {
            step =  - 5 * this.altitude / (this.altitude + this.state.bottom * 3);
            this.direction = false;
            if (this.state.bottom <=0) {
                this.altitude = Math.random() * this.height/2;
                this.direction = true;
                this.stepleft = Math.random() * 5;
            }
        }
        const shiftLeft =  this.state.left + this.stepleft - Math.floor((this.state.left + 85)/this.width) * this.width;
        if  (shiftLeft <= 0) {
            shiftBottom = this.width * 1 / 5;
            this.altitude = this.width * 1 / 5 + 1
        } else {
            shiftBottom = this.state.bottom + step;
        }
        this.setState({ left: shiftLeft, bottom: shiftBottom});
    }

    render() {
        return(
            <div className="ball" style={{left: this.state.left, bottom: this.state.bottom}}></div>
        );
    }
}

export default Ball;