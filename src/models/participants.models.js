const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const Users = require("./users.models");
const Conversation = require("./conversation.models");

const Participants = db.define("participants", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  conversation_id: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "sender_id",
    references:{
        key:'id',
        model:Conversation // Falta referemcia de conversation
    }
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    references:{
        key:'id',
        model:Users
    }
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

module.exports = Participants