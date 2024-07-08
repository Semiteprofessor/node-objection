const User = require("../models/User.model");

exports.createUser = async (req, res, next) => {
    const {name, email, password, role, isActive} = req.body
  try {
    const user = await User.query().insert({name, email, password, role, isActive});
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.query();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.query().findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editUser = async (req, res, next) => {
  try {
    await User.query().patchAndFetchById(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await User.query().deleteById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
