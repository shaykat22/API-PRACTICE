const loadQuots = () => {
    fetch('https://api.kanye.rest/')
        .then(reply => reply.json())
        .then(data => dynamicQuote(data))

}

const dynamicQuote = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;

}