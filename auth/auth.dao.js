'use strict'

/**
 * @description:        Aqui es donde va la logica de negocios
 *                      de nuestra API REST de TRIBAGO.
 */

const mongoose = require('mongoose');
const authSchema = require('./auth.model');

authSchema.statics = {
    create: function(data, cb) {
        const user = new this(data);
        user.save(cb);
    },
    login: function(query, cb) {
        this.find(query, cb);
    }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;