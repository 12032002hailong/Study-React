// class components
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Nguyen Duc Hai Long',
        address: 'Ha Dong',
        age: 26
    }

    handleClick(event) {
        console.log(">> click me by button");

    }

    handleOnMoverOver(event) {
        console.log(event.pageX);;
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} , I'm from {this.state.address}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;