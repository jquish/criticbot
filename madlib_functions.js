const fs = require('fs');

function replace_nouns(str) {
     // reads nouns.json
    let words = JSON.parse(fs.readFileSync('json/nouns.json')).nouns;
    
    while(str.includes('NOUN')) {
        str = str.replace('NOUN', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_adjs(str) {
    // reads adjs.json
    let words = JSON.parse(fs.readFileSync('json/adjs.json')).adjs;
    
    while(str.includes('ADJ')) {
        str = str.replace('ADJ', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_verbs(str) {
    // reads ergative_verbs.json
    let words = JSON.parse(fs.readFileSync('json/ergative_verbs.json')).ergative_verbs;
    
    while(str.includes('VERB')) {
        str = str.replace('VERB', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_advbs(str) {
    // reads adverbs.json
    let words = JSON.parse(fs.readFileSync('json/adverbs.json')).adverbs;
    
    while(str.includes('ADVB')) {
        str = str.replace('ADVB', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_celebs(str) {
    // reads celebrities.json
    let words = JSON.parse(fs.readFileSync('json/celebrities.json')).celebrities;
    
    while(str.includes('CELEB')) {
        str = str.replace('CELEB', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_intjs(str) {
    // reads interjections.json
    let words = JSON.parse(fs.readFileSync('json/interjections.json')).interjections;
    
    while(str.includes('INTJ')) {
        str = str.replace('INTJ', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_gens(str) {
    // reads genres.json
    let words = JSON.parse(fs.readFileSync('json/genres.json')).categories;
    
    while(str.includes('GEN')) {
        str = str.replace('GEN', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_moods(str) {
    // reads moods.json
    let words = JSON.parse(fs.readFileSync('json/moods.json')).moods;
    
    while(str.includes('MOOD')) {
        str = str.replace('MOOD', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_objs(str) {
    // reads objects.json
    let words = JSON.parse(fs.readFileSync('json/objects.json')).objects;
    
    while(str.includes('OBJ')) {
        str = str.replace('OBJ', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_occs(str) {
    // reads occupations.json
    let words = JSON.parse(fs.readFileSync('json/occupations.json')).occupations;
    
    while(str.includes('OCC')) {
        str = str.replace('OCC', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_movs(str) {
    // reads popular_movies.json
    let words = JSON.parse(fs.readFileSync('json/popular_movies.json')).popular_movies;
    
    while(str.includes('MOV')) {
        str = str.replace('MOV', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

function replace_sods(str) {
    // reads states_of_drunkenness.json
    let words = JSON.parse(fs.readFileSync('json/states_of_drunkenness.json')).states_of_drunkenness;
    
    while(str.includes('SOD')) {
        str = str.replace('SOD', words[Math.floor(Math.random() * words.length)]);
    }
    
    return str;
}

exports.replace_nouns   = replace_nouns
exports.replace_adjs    = replace_adjs
exports.replace_verbs   = replace_verbs
exports.replace_advbs   = replace_advbs
exports.replace_celebs  = replace_celebs
exports.replace_intjs   = replace_intjs
exports.replace_gens    = replace_gens
exports.replace_moods   = replace_moods
exports.replace_objs    = replace_objs
exports.replace_occs    = replace_occs
exports.replace_movs    = replace_movs
exports.replace_sods    = replace_sods