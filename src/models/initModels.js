const Conversation = require('./conversation.models')
const Messages = require('./messages.model')
const Participants = require('./participants.models')
const Users = require('./users.models')

const initModels = () => {    
    
    Users.hasMany(Messages)
    Messages.belongsTo(Users)
    
    Conversation.hasMany(Messages)
    Messages.belongsTo(Conversation)
    
    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    Conversation.hasMany(Participants)
    Participants.belongsTo(Conversation)

}


module.exports = initModels