// Numbers API
const numbersButton = document.querySelector('.button1');
const numberDisplay = document.querySelector('.number-text p');

function generateNumber() {
    const input = document.querySelector('.number-input');
    let number = input.value;
    console.log(number);
    const numberEndpoint = `http://numbersapi.com/${number}/trivia`;
    
    fetch(numberEndpoint)
        .then(response => response.text())
        .then(data => number ? numberDisplay.innerHTML = data : numberDisplay.innerHTML = 'Enter a number')
    };

numbersButton.addEventListener('click', generateNumber);

// Chuck Norris API
const factsButton = document.querySelector('.button2');
const factDisplay = document.querySelector('.fact-text p');
function generateFact() {
    const factEndpoint = 'http://api.icndb.com/jokes/random/';
    
    fetch(factEndpoint)
        .then(response => response.json())
        .then(data => factDisplay.innerHTML = data.value.joke);
    };

factsButton.addEventListener('click', generateFact);

// Random quote API
const quotesButton = document.querySelector('.button3');
const quoteDisplay = document.querySelector('.quote-text p');
function generateQuote() {
    const quoteEndpoint = 'https://quota.glitch.me/random';
    
    fetch(quoteEndpoint)
        .then(response => response.json())
        .then(data => quoteDisplay.innerHTML = `"${data.quoteText}"` + ' -' + data.quoteAuthor);
    };

quotesButton.addEventListener('click', generateQuote);
// Toggle panels
const panels = document.querySelectorAll('.panel');
function addOpen() {
    panels.forEach(panel => panel.classList.remove('open'));
    this.classList.add('open');
    numberDisplay.innerHTML = '';
    factDisplay.innerHTML = '';
    quoteDisplay.innerHTML = '';
}

panels.forEach(panel => panel.addEventListener('click', addOpen));


