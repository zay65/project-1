/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Created an array filled with quotes
// Named the array "quotes"
var quotes = [ 
  {quote: "If you judge people, you have no time to love them.", 
  source: "Mother Teresa"
}, 

{quote: "It always seems impossible until it’s done.", 
source: "Nelson Mandela"
}, 

{quote: "Injustice anywhere is a threat to justice everywhere.", 
source:  "Martin Luther King Jr.", 
year: 1963, 
citation: "Letter from a Birmingham Jail"
},

{quote: "The future belongs to those who prepare for it today.", 
source:  "Malcolm X"
}, 

{quote: "Education is the key to unlock the golden door of freedom.", 
source:  "George Carver Washington"
}
];

// logs the variable quotes into the console
console.log(quotes);

// Made a function called getRandomQuote to draw random quotes from the quote array

function getRandomQuote() {
var randomQuote = Math.floor( Math.random() * quotes.length);
for (var i = 0; i < quotes.length; i++)  
return quotes [randomQuote];

// getRandomQuote is printed on the console
console.log(getRandomQuote());
}; 

// Created a function called printQuote to print the random quote that is pulled, on the page
function printQuote() {
let message = getRandomQuote();
let result = '  ';

message += '<p class="quote">' + [random.quote] + '</p>';

message += '<p class="source">' + [random.source];

if(random.citation) {
message += '<span class="citation">' + [random.citation] + '</span>';
} 
if (random.year) {

message += '<span class="year">' + [random.year] + '</span>';
}
message += '</p>';
// logs the 'message' string into the console
console.log(message);

document.getElementById('quote-box').innerHTML = message;
} 

//created a variable named change
var change = setInterval;

// changes the quote and background
setInterval(printQuote, 7000);
setInterval(diffBackground, 7000 );










document.getElementById('loadQuote').addEventListener("click", printQuote, false);

