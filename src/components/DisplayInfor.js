import React from "react";

class Displayinfor extends React.Component {
    render() {
        // destructuring array/object
        const { age, name } = this.props;
        // props => viet tat cua properties
        console.log(this.props);
        return (
            <div>
                <div>My Name is {name}</div>
                <div>My age {age}</div>
            </div>
        )
    }
}

export default Displayinfor;