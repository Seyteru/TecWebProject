const User = require('../config/dbconnection');

const createUser = async(user) => {
    return await User.create(user);
};

const getUserById = async(id) => {
    return await User.findByPk(id);
};

const getAllUser = async() => {
    return await User.findAll();
};

const updateUserById = async(id, updatedParams) => {
    const user = await User.findByPk(id);
    if(user){
        return await user.update(updatedParams);
    } else{
        return null;
    }
};

const deleteUserById = async(id) => {
    const user = await User.findByPk(id);
    if(user){
        await user.destroy();
        return true;
    } else{
        return false;
    }
};

module.exports = { createUser, getUserById, getAllUser, updateUserById, deleteUserById }