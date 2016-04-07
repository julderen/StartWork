import React from "react";

class Road extends React.Component {
    constructor(){
        this.shift= 0;

		this.state = { elapsed: 0 };

		this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 50);
    }

    tick(){
        this.setState({ elapsed: this.shift });
    }

    render() {
       var elapsed = Math.round(this.state.elapsed / 100);
       var seconds = (elapsed / 10).toFixed(1);

       return (
            <div className="car" style={{left: seconds}}></div>
       );
    }
}

export default Road;
