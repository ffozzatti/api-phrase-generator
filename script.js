'use strict'
const span = document.getElementById('yourPhrase')

const setPhraseInHtml = (phrase) =>{
   span.innerHTML = phrase.slip.advice
}

const generatePhrase = async() => {
    const url = `https://api.adviceslip.com/advice`
    const data = await fetch(url)
    const phrase = await data.json()
    
    setPhraseInHtml(phrase)    
}



document.querySelector('button').addEventListener('click', generatePhrase)
