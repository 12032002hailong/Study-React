// class components
import React from "react";
import Displayinfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hai", age: "16" },
            { id: 2, name: "Long", age: "22" },
            { id: 3, name: "Hai Long", age: "69" },
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log(">> check data", userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    // JSX
    render() {

        const test = { name: 'hai long', age: 21 }
        return (
            <>
                {JSON.stringify(test)}
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser} />
                    <br /> <br />
                    <Displayinfor
                        listUsers={this.state.listUsers}
                    />
                </div>

                <div className="b">

                </div>
            </>
        );
    }
}

export default MyComponent;