import React from "react";
import './DisplayInfor.scss';

class Displayinfor extends React.Component {
    state = {
        isSHowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            // dau ! tuong chung cho toggle
            isSHowListUser: !this.state.isSHowListUser
        })
    }
    render() {
        // destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers);
        // props => viet tat cua properties
        // console.log(this.props);
        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isSHowListUser === true ? "Hide list user" : "Show list users"}
                    </span>
                </div>
                {this.state.isSHowListUser &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div style={{ color: 'blue', paddingTop: '50px' }}>My Name is {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )



                            //+user.age: chuyen kieu string sang kieu number
                            // if (+user.age > 18) {
                            //     return (
                            //         <div key={user.id} className="green">
                            //             <div>My Name is {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className="red">
                            //             <div>My Name is {user.name}</div>
                            //             <div>My age's {user.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // }


                        })
                        }
                        {/* <div>My Name is {name}</div>
                <div>My age {age}</div>
                <hr />
                <div>My Name is {name}</div>
                <div>My age {age}</div>
                <hr />
                <div>My Name is {name}</div>
                <div>My age {age}</div> */}
                    </div >
                }
            </div>
        )
    }
}

export default Displayinfor;