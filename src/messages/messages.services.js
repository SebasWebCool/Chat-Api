const messagesControllers = require("./messages.controllers");

const getAllMessages = (req, res) => {
  messagesControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getMessagesById = (req, res) => {
  const id = req.params.id;
  messagesControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createMessages = (req, res) => {
  const {
    sender_id,
    message,
    created_at,
    updated_at,
  } = req.body;

  if (sender_id && message && created_at && updated_at) {
    //? Ejecutamos el controller
    messagesControllers
      .createUser({
        sender_id,
        message,
        created_at,
        updated_at
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    //? Error cuando no mandan todos los datos necesarios para crear un usuario
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        sender_id: "uuid",
        message: "string",
        created_at: "date",
        updated_at: "date",
      },
    });
  }
};

const deleteMessage = (req, res) => {
  const id = req.params.id;
  messagesControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};


module.exports = {
  getAllMessages,
  getMessagesById,
  deleteMessage,
  createMessages
};
