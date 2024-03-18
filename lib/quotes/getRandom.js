const QUOTES = require("../../database/quotes")

const getRandom = ()=>{
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex]
}

module.exports = getRandom