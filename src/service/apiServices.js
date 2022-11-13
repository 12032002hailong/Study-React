import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, usename, role, image) => {
    //submit dât
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('usename', usename);
    data.append('role', role);
    data.append('useImage', image);

    return axios.post('api/v1/participant', data);
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}

export { postCreateNewUser, getAllUsers };