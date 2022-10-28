const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const messagesServices = require('./messages.services')

require('../middlewares/auth.middleware')(passport)


//? rutas raiz


//TODO el registerUser ira en la ruta /auth/register

//! router.route('/').get( userServices.getAllUsers)

//? rutas dinamicas por ID /users/:id

//! router.get('/:id')
//! router.patch('/:id')
//! router.put('/:id')
//! router.delete('/:id')

//? Ruta de informacion propia del usuario loggeado
router.route('/')
    .get(
        passport.authenticate('jwt', {session: false}),
        messagesServices.getAllMessages)
    .post(
        passport.authenticate('jwt', {session: false}),
        messagesServices.createMessages
    )
    
//? /api/v1/users/:id
router.route('/:message_id')
    .get(messagesServices.getMessagesById)
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        messagesServices.deleteMessage
    )





module.exports = router