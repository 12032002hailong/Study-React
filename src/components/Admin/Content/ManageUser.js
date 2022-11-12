import ModalCreateUser from "./ModalCreateUser.js";
import './ManageUser.scss';


const ManageUser = () => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className='users-content'>
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    Table Users
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;