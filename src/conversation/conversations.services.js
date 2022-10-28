const conversationControllers = require("./conversations.controller");

const getAllConversations = (req, res) => {
  conversationControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getConversationById = (req, res) => {
  const id = req.params.id;
  conversationControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const createConversation = (req, res) => {
  const {
    created_by,
    title,
    image_url,
    created_at,
    updated_at
  } = req.body;

  if (created_by && title && image_url && created_at && updated_at) {
    //? Ejecutamos el controller
    conversationControllers
      .createUser({
        created_by,
        title,
        image_url,
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
        created_by: "uuid",
        title: "string",
        message: "string",
        created_at: "date",
        updated_at: "date",
      },
    });
  }
};
const patchConversation = (req, res) => {
    const id = req.params.id;
    const { title, message } = req.body;
  
    conversationControllers
      .updateUser(id, { title, message })
      .then((data) => {
        if (data[0]) {
          res
            .status(200)
            .json({ message: `User with ID: ${id}, edited succesfully!` });
        } else {
          res.status(404).json({ message: "Invalid ID" });
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  };
  
// const patchMyUser = (req, res) => {
//     const id = req.user.id;
//     const { firstName, lastName, phone, birthday, gender, country } = req.body;
  
//     usersControllers
//       .updateUser(id, { firstName, lastName, phone, birthday, gender, country })
//       .then(() => {
//         res.status(200).json({ message: `Your user was edited succesfully!` });
//       })
//       .catch((err) => {
//         res.status(400).json({ message: err.message });
//       });
//   };

const deleteConversation = (req, res) => {
  const id = req.params.id;
  conversationControllers
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
  getAllConversations,
  getConversationById,
  patchConversation,
  deleteConversation,
  createConversation
};
