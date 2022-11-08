import React from "react";

class Displayinfor extends React.Component {
    render() {
        console.log();
        // destructuring array/object
        const { listUsers } = this.props;
        console.log(listUsers);
        // props => viet tat cua properties
        console.log(this.props);
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My Name is {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
                {/* <div>My Name is {name}</div>
                <div>My age {age}</div>
                <hr />
                <div>My Name is {name}</div>
                <div>My age {age}</div>
                <hr />
                <div>My Name is {name}</div>
                <div>My age {age}</div> */}
            </div>
        )
    }
}

export default Displayinfor;