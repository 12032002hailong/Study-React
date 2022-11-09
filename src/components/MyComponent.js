// class components
import React, { useState } from "react";
import Displayinfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Hai", age: "16" },
//             { id: 2, name: "Long", age: "22" },
//             { id: 3, name: "Hai Long", age: "69" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         console.log(">> check data", userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     // JSX
//     render() {

//         const test = { name: 'hai long', age: 21 }
//         return (
//             <>
//                 {JSON.stringify(test)}
//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser} />
//                     <br /> <br />
//                     <Displayinfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>

//                 <div className="b">

//                 </div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setlistUsers] = useState([
        { id: 1, name: "Hai", age: "16" },
        { id: 2, name: "Long", age: "22" },
        { id: 3, name: "Hai Long", age: "69" },
    ])
    const handleAddNewUser = (userObj) => {
        setlistUsers([userObj, ...listUsers])
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setlistUsers(listUsersClone);
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }

    return (
        <>

            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser} />
                <br /> <br />
                <Displayinfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>

            <div className="b">

            </div>
        </>
    )
}

export default MyComponent;