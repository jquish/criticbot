const fs = require('fs');

// parses & returns given word type's corresponding json file
function get_word_list(type) {
    
    switch (type) {
        case 'NOUN': 
            return JSON.parse(fs.readFileSync('json/nouns.json')).nouns;
        case 'ADJ':
            return JSON.parse(fs.readFileSync('json/adjs.json')).adjs;
        case 'VERB':
            return JSON.parse(fs.readFileSync('json/ergative_verbs.json')).ergative_verbs;
        case 'ADVB':
            return JSON.parse(fs.readFileSync('json/adverbs.json')).adverbs;
        case 'CELEB':
            return JSON.parse(fs.readFileSync('json/celebrities.json')).celebrities;
        case 'INTJ':
            return JSON.parse(fs.readFileSync('json/interjections.json')).interjections;
        case 'GEN':
            return JSON.parse(fs.readFileSync('json/genres.json')).categories;
        case 'MOOD':
            return JSON.parse(fs.readFileSync('json/moods.json')).moods;
        case 'OBJ':
            return JSON.parse(fs.readFileSync('json/objects.json')).objects
        case 'OCC':
            return JSON.parse(fs.readFileSync('json/occupations.json')).occupations
        case 'MOV':
            return JSON.parse(fs.readFileSync('json/popular_movies.json')).popular_movies;
        case 'SOD':
            return JSON.parse(fs.readFileSync('json/states_of_drunkenness.json')).states_of_drunkenness;
    }

function replace_words(type, str) {
     // reads word type's corresponding json file
    let words = get_word_list(type);
    // replaces every instance of word type with a random word from list
    while(str.includes(type)) {
        str = str.replace(type, words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

exports.replace_words   = replace