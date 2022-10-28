const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Conversation = require("./conversation.models");

const Messages = db.define("messages", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "sender_id",
    references:{
        key:'id',
        model:Users
    }
  },
  conversation_id: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "sender_id",
    references:{
      key:'id',
      model:Conversation
    }
  },
  message: {
    type: DataTypes.STRING(255),
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

module.exports = Messages