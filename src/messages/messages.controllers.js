//? Dependencies
const uuid = require('uuid')

const Messsages = require('../models/messages.model')

const getAllMessages = async () => {
    const data = await Messsages.findAll({
        where: {
            status: 'active'
        }
    })
    return data
}

const getMesssagesById = async (id) => {
    const data = await Messsages.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const createMesssage = async (data) => {
    const newUser = await Messsages.create({
        id: uuid.v4(),
        sender_id: data.sender_id,
        conversation_id: data.conversation_id,
        message: data.message,
        created_at: data.created_at,
        updated_at: data.updated_at,
    })
    return newUser
}

const deleteMesssage = async (id) => {
    const data = await Messsages.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    createMesssage,
    getAllMessages,
    getMesssagesById,
    deleteMesssage
}