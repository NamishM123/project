import User from "../models/user.js";

export function getUsers(name, job) {
  if (name === undefined && job === undefined) {
    return User.find();
  }
  if (name !== undefined && job === undefined) {
    return User.find({ name });
  }
  if (job !== undefined && name === undefined) {
    return User.find({ job });
  }
  return User.find({ name, job });
}

export function findUserById(id) {
  return User.findById(id);
}

export function addUser(user) {
  const userToAdd = new User(user);
  return userToAdd.save();
}

export function deleteUserById(id) {
  return User.findByIdAndDelete(id);
}
