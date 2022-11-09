import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'

const Displayinfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    // this.state = {
    //     isShowHideListUser: false;
    // }
    const handleShowHideListUser = () => {
        // alert('click me')
        setShowHideListUser(!isShowHideListUser);
    }

    console.log(">>call me render");
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You delete all the users')
            }
            console.log(">>call me useEffect");
        }, [listUsers])

    return (
        <div className="display-infor-container">
            <span onClick={() => handleShowHideListUser()}>
                {isShowHideListUser === true ? "Show ListUser " : "Hide ListUser"}
            </span>
            {isShowHideListUser &&
                <div>
                    {listUsers.map((user) => {

                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My Name is {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                            </div>
                        )
                    })
                    }

                </div >
            }
        </div>
    )
}


export default Displayinfor;