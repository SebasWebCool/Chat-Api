const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')
const conversationServices = require('./conversations.services')

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
        conversationServices.getAllConversations)
    .post(
        passport.authenticate('jwt', {session: false}),
        conversationServices.createConversation
    )
    
//? /api/v1/users/:id
router.route('/:conversataion_id')
    .get(conversationServices.getConversationById)
    .patch(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        conversationServices.patchConversation
    )    
    .delete(
        passport.authenticate('jwt', {session: false}),
        adminValidate,
        conversationServices.deleteConversation
    )





module.exports = router