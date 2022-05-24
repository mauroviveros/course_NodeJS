"use strict";

class Message{
    constructor(message, user){
        this.message = message;
        this.user = {
            _id : user._id,
            name: user.name
        };
    };
};

class Chat{
    constructor(){
        this.messages = [];
        this.users = {};
    };

    get lastMessages(){
        this.messages = this.messages.splice(0, 10);
        return this.messages;
    };

    get usersArr(){
        return Object.values(this.users);
    };

    addMessage(message, user){
        console.log(this.messages);
        this.messages.push(new Message(message, user));
        console.log(this.messages);
    };

    addUser(user){
        this.users[user._id] = user;
    };

    deleteUser(userID){
        delete this.users[userID];
    };
};

module.exports = Chat;