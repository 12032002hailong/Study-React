// class components
import React from "react";
import Displayinfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component {

    // JSX
    render() {
        return (
            < div >
                <UserInfor></UserInfor>
                <br /> <br />
                <Displayinfor name="Hai Long" age="21"></Displayinfor>
            </div>
        );
    }
}

export default MyComponent;