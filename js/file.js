const quotes = [
    {
        quote: "The only way to do great work is to love what you do." ,
        author: 'Steve Jobs'
    },
    {
        quote: "In three words, I can sum up everything I've learned about life: it goes on.",
        author: 'Robert Frost'
    }, 
    {
        quote: "The only thing necessary for the triumph of evil is for good men to do nothing." ,
        author: 'Edmund Burke'
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams." ,
        author:'Eleanor Roosevelt'
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: 'Ralph Waldo Emerson'
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: 'Winston Churchill'
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D.Roosevelt"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: 'Chinese Proverb'
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: 'Martin Luther King Jr.'
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon'
    },
    {
        quote: "A person who never made a mistake never tried anything new",
        author: 'Albert Einstein'
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: 'Nelson Mandela'
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: ' Oscar Wilde'
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: 'Sam Levenson'
    },
    {
        quote: "The only way to deal with the unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        author: ' Albert Camus'
    },
    {
        quote: "The journey of a thousand miles begins with a single step",
        author: 'Lao Tzu'
    },
    {
        quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
        author: ' John F. Kennedy'
    },
    {
        quote: "Success is stumbling from failure to failure with no loss of enthusiasm",
        author: 'Winston Churchill'
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        author: ' Confucius'
    },

    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: ' Confucius'
    },
    {
        quote: "The only person you are destined to become is the person you decide to be",
        author: 'Ralph Waldo Emerson'
    },
    {
        quote: "You miss 100% of the shots you don't take",
        author: ' Wayne Gretzky'
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: 'Aristotle Onassis'
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions",
        author: 'Dalai Lama'
    },
    {
        quote: "You can't connect the dots looking forward; you can only connect them looking backwards.",
        author: 'Steve Jobs'
    },
    {
        quote: "The best revenge is massive success",
        author: ' Frank Sinatra'
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: ' Mahatma Gandhi'
    }
];

function BringRandomQuotes(){
    const randomQuote = Math.floor(Math.random() *  quotes.length);
    return quotes[randomQuote];
}

function DisplayQuote(){
    const Quote = BringRandomQuotes();
    document.getElementById('Quote-text').textContent = Quote.quote;
    document.getElementById('quote-author').textContent = ` - ${Quote.author}`;    
}

function setRandomQuoteInterval() {
    DisplayQuote(); 

    const interval = 10000;
    setInterval(DisplayQuote, interval);
}


document.getElementById('quote-button').addEventListener('click', DisplayQuote);

setRandomQuoteInterval();







// function RandomQuote(){
//     const Random = Math.floor(Math.random() * quotes.length);
//     return quotes[Random];
// }

// function display(){
//     const Quote = RandomQuote();
//     document.getElementById('Quote-text').textContent = Quote.quote;
//     document.getElementById('quote-author').textContent = ` - ${Quote.author}`;
// }

// document.getElementById('quote-button').addEventListener('click', display);

// display();

// function GetRandomQuote(){
//     const Random = Math.floor(Math.random() * quotes.length);
//     return quotes[Random];
// }

// function DisplayQuote(){
//     const Quote = GetRandomQuote();
//     document.getElementById('Quote-text').textContent = Quote.quote;
//     document.getElementById('quote-author').textContent = `- ${Quote.author}`;
// }
// document.getElementById('quote-button').addEventListener('click', DisplayQuote);
// DisplayQuote();


// function GetRandomQuote(){
//     const random = Math.floor(Math.random () * quotes.length);
//     return quotes[random];
// }

// function DisplayQuote() {
//     const Quote = GetRandomQuote();
//     document.getElementById('Quote-text').textContent = Quote.quote;
//     document.getElementById('quote-author').textContent = `- ${Quote.author}`;
// }

// document.getElementById('quote-button').addEventListener('click', DisplayQuote);
// DisplayQuote();

    /* <button onclick="document.getElementById('demo').innerHtml=date()">The date is</button> */

   