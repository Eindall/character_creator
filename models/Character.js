var mongoose = require('mongoose');

var CharacterSchema = new mongoose.Schema({
    game: String,
    name: String,
    race: String,
    class: String,
    lvl: Number,
    gender: String,
    alignement: String,
    attributes: Object,
    skills: Array,
    equipment: Array,
    spells: Array,
    description: { eyes: String, hair: String, weight: String, height: String, age: Number, ethnic_group: String, short_description: String }
});

module.exports = mongoose.model('Character', CharacterSchema);
