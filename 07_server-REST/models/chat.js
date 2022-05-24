"use strict";

class Message{
    constructor(_id, name, message){
        this._id = _id;
        this.name = name;
        this.message = message;
    };
};

class Chat{
    constructor(){
        this.messages = [];
        this.users = {};
    };

    get lastMessages(){
        return this.messages.splice(0, 10);
    };

    get usersArr(){
        return Object.values(this.users);
    };

    enviarMensaje(_id, name, message){
        this.messages.unshift(new Message(_id, name, message));
    };

    addUser(user){
        this.users[user._id] = user;
    };

    deleteUser(userID){
        delete this.users[userID];
    };
};

module.exports = Chat;