// class components
import React from "react";

class MyComponent extends React.Component {
    // JSX
    render() {
        return (
            <div>
                my first component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;