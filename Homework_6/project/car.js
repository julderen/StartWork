import React from "react";
class Car extends React.Component {
    constructor(props){
        super(props);

        this.state = { elapsed: 0 };
        this.tick = this.tick.bind(this);
        this.step = Math.random()*40;
        this.width = this.props.width;
        this.top =  this.props.top;
    }

    componentDidMount(){
        setInterval(this.tick, this.step);
    }

    tick(){
        const shift = this.state.elapsed + 20 - Math.floor((this.state.elapsed + 270)/this.width) * this.width;
        this.setState({ elapsed: shift});
    }

    render() {

        return (
                <div className="car" style={{left: this.state.elapsed, top:this.top}}></div>
        );
    }
}

export default Car;