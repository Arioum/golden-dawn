const Users = require("../models/user.model");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne(email, password);
    if (!user) throw err;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
