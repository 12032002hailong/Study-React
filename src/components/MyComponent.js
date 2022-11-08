// class components
import React from "react";
import Displayinfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Hai", age: "21" },
            { id: 2, name: "Long", age: "22" },
            { id: 3, name: "Hai Long", age: "25" },
        ]
    }
    // JSX
    render() {
        return (
            < div >
                <UserInfor></UserInfor>
                <br /> <br />
                <Displayinfor
                    listUsers={this.state.listUsers}
                />
                <hr />
            </div>
        );
    }
}

export default MyComponent;