const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  orders: [Object],
  reservations: [Object],
  address: [
    {
      line1: String,
      line2: String,
      landmark: String,
      pincode: Number,
      coordinates: String,
    },
  ],
});

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
