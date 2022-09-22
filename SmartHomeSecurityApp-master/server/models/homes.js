const mongoose = require('mongoose');
const config=require('../env.config')
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


const homesSchema = new Schema({
    homeId: {
        type: String,
        required: true,
        unique: true
    }
});


homesSchema.plugin(uniqueValidator);

const Identity = mongoose.model(config.mongoDbHomesIndex, homesSchema);


exports.putIdentity = (id,identityData) => {
    return new Promise((resolve, reject) => {
        Identity.findByIdAndUpdate(id,identityData,function (err,user) {
            if (err) reject(err);
            resolve(user);
        });
    });
};

exports.findByHomeId = (homeId) => {
    return Identity.findOne({homeId: homeId});
};

exports.createIdentity = (userData) => {
    const user = new Identity(userData);
    return user.save();
};


exports.removeById = (homeId) => {
       return Identity.findOneAndRemove({ homeId : homeId})
};