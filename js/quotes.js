const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: " Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough",
        author: "Mae West",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
    },
    {
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou",
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
    },
];

const quote = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
