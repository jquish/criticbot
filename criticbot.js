setInterval(run, 10000);

function run() {
    const mlf = require("./madlib_functions.js");
    const OBJECTIVITY = " Objectively speaking."

    /* 

    placeholders key:

    NOUN    noun
    ADJ     adjective
    VERB    verb (ergative)
    ADVB    adverb
    CELEB   celebrity
    INTJ    interjection         
    GEN     genre
    MOOD    mood
    OBJ     object
    OCC     occupation 
    MOV     popular movie
    SOD     state of drunkenness

    */

    let templates = [
        "Director CELEB's fresh take on the GEN genre in 'MOV' manages to ADVB VERB anyone SOD enough to sit through it.",
        "Actor/Writer/Director CELEB's decision to cast themselves as a MOOD OCC in 'MOV' makes for an ADJ and ADJ film.",
        "For a film full of OBJs and OBJs, 'MOV' is remarkably ADJ.",
        "Despite numerous MOOD OBJs, 'MOV' maintains a MOOD tone straight through to an end that'll make you say 'INTJ!'",
        "Everyone should see 'MOV' at least once, if only to experience CELEB's ADJ performance as the MOOD OCC with a weakness for a good  OBJ.",
        "'MOV' is the Hollywood's best take on GEN so far. If you're not feeling MOOD by the end, watch it again.",
        "Director CELEB's 'MOV' will VERB you ADVB, and ensure you never see OBJs the same way again.",
        "CELEB's performance as the MOOD OCC in 'MOV' could've carried the film, if it weren't for the ADJ writing and ADJ directing.",
        "Not many films have the power to VERB their audiences quite as ADVB as 'MOV'.",
        "'MOV' will VERB your mind. As CELEB put it in the OBJ scene, 'INTJ'.",
        "'MOV' is Director CELEB's most ADJ work yet, at least since their OBJ scandal in 2006."
    ]

    // chooses a random review template
    let str = templates[Math.floor(Math.random() * templates.length)];

    //str = "";

    if (str.includes('NOUN')) { str = mlf.replace('NOUN', str); }
    if (str.includes('ADJ')) { str = mlf.replace_adjs('ADJ', str); }
    if (str.includes('VERB')) { str = mlf.replace_verbs('VERB', str); }
    if (str.includes('ADVB')) { str = mlf.replace_advbs('ADVB', str); }
    if (str.includes('CELEB')) { str = mlf.replace_celebs('CELEB', str); }
    if (str.includes('INTJ')) { str = mlf.replace_intjs('INTJ', str); }
    if (str.includes('GEN')) { str = mlf.replace_gens('GEN', str); }
    if (str.includes('MOOD')) { str = mlf.replace_moods('MOOD', str); }
    if (str.includes('OBJ')) { str = mlf.replace_objs('OBJ', str); }
    if (str.includes('OCC')) { str = mlf.replace_occs('OCC', str); }
    if (str.includes('MOV')) { str = mlf.replace_movs('MOV', str); }
    if (str.includes('SOD')) { str = mlf.replace_sods('SOD', str); }

    console.log(str + OBJECTIVITY);
}