const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const Conversation = db.define("conversation", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "sender_id",
    references:{
        key:'id',
        model:Users
    }
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE ,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE ,
    allowNull: false
  },

});

module.exports = Conversation