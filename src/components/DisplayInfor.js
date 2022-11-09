import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg'

class Displayinfor extends React.Component {
    constructor(props) {
        console.log(" contructor 0");
        super(props);

        this.state = {
            isSHowListUser: true
        }
    }
    componentDidMount() {
        console.log('>> call me component didmount 1');
        setTimeout(() => {
            document.title = 'Hai Long 1203'
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me component did update', this.props, prevProps);
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert(`'you got 5 user's`);
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            // dau ! tuong chung cho toggle
            isSHowListUser: !this.state.isSHowListUser
        })
    }
    render() {
        console.log("call me render");
        // destructuring array/object
        const { listUsers } = this.props;
        // console.log(listUsers);
        // props => viet tat cua properties
        // console.log(this.props);
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
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
                                    <div>
                                        <div>My Name is {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>

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