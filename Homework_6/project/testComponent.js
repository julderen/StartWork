import React from "react";

class Road extends  React.Component {
    constructor(){
        this.shift= 0;
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 50);
    }

    tick(){
        this.setState({elapsed: shift});
    }

    render() {
       var elapsed = Math.round(this.elapsed / 100);
       var seconds = (elapsed / 10).toFixed(1);

           return (
                <div className="car" style={
                    {
                     left: seconds
                    }
                }
                 ></div>
           );
    }
}

export default Road;
