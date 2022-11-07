// class components
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Nguyen Duc Hai Long',
        address: 'Ha Dong',
        age: 26
    }

    handleClick = (event) => {
        console.log(">> click me button");

        //merge State => react class;
        this.setState({
            name: "Hai Long",
            age: Math.floor((Math.random() * 100) + 1)
            // address: 'Ha Dong',
            // age: 26
        })
        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })

    }

    handleOnMoverOver(event) {
        console.log(event.pageX);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.precentDefault();
        console.log(this.state);
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} , I'm  {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;