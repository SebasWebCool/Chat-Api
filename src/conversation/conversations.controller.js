const Conversation = require('../models/conversation.models')

const uuid = require('uuid')

const getAllConversation = async() => {
    const data = await Conversation.findAll({
        // where:{
            
        // }
    })
    return data
}
const getConversationById = async (id) => {
    const data = await Conversation.findOne({
        where: {
            id: id,
        }
    })
    return data
}
const updateConversation = async (id, data) => {
    const result = await Conversation.update(data, {
        where: {
            id
        }
    })
    return result
}

const createConversation = async (data) => {
    const response = await Conversation.create({
        id: uuid.v4(),
        created_by: data.created_by,
        title: data.title,
        image_url: data.image_url, 
        created_at: data.created_at,
        updated_at:data.updated_at
    })
    return response
}
const deleteConversation = async (id) => {
    const data = await Conversation.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllConversation,
    getConversationById,
    updateConversation,
    createConversation,
    deleteConversation
}

