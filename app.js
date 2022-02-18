
let quotes = [
    {
        movie_quote: "Hasta la vista, baby",
        movie_name: "The Terminator",
    },
    {
        movie_quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get",
        movie_name: "Forrest Gump",
    },
    {
        movie_quote: "It wasn't just a puppy",
        movie_name: "John Wick",
    },
    {
        movie_quote: "It's all for nothing if you don't have freedom",
        movie_name: "Braveheart",
    },
    {
        movie_quote: "P. Sherman, 42 Wallaby Way, Sydney",
        movie_name: "Finding Nemo",
    },
    {
        movie_quote: "My little Amélie, you don't have bones of glass. You can take life's knocks. If you let this chance pass, eventually, your heart will become as dry and brittle as my skeleton. So, go get him, for Pete's sake!",
        movie_name: "The Fabulous Destiny of Amélie Poulain",
    },
    {
        movie_quote: "Adventure is out there!",
        movie_name: "Up",
    },
    {
        movie_quote: "A lady always knows when to leave",
        movie_name: "Fried green tomatoes",
    },
    {
        movie_quote: "What are we after all our dreams, after all our memories?",
        movie_name: "The Notebook",
    },
    {
        movie_quote: "Roads? Where we're going we don't need roads.",
        movie_name: "Back to the future",
    },
    {
        movie_quote: "To infinity and beyond!",
        movie_name: "Toy Story",
    },
    {
        movie_quote: "You had my curiosity. But now you have my attention",
        movie_name: "Django Unchained",
    },
    {
        movie_quote: "I wish I knew how to quit you",
        movie_name: "Brokeback Mountain",
    },
    {
        movie_quote: "There are places in the world that aren’t made out of stone. There’s something inside they can’t touch. Hope",
        movie_name: "The Shawshank Redemption",
    },
    {
        movie_quote: "Don't be ridiculous. You're not handicapped, you're — What do they call the — exceptional?",
        movie_name: "Edward Scissorhands",
    },
    {
        movie_quote: "Wax on, wax off",
        movie_name: "Karate Kid",
    },
    {
        movie_quote: "I admire that honesty, Natalie, that's a noble quality. Never lose that, because it often disappears with age, or entering politics",
        movie_name: "Mrs. Doubtfire",
    },
    {
        movie_quote: "It wasn't just a puppy",
        movie_name: "John Wick",
    }
]


let button = document.querySelector("button");
button.addEventListener("click", generateQuote);


function generateQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber].movie_quote;
    let randomMovie = quotes[randomNumber].movie_name;
    
    let quote = document.getElementById("quote").innerHTML = randomQuote;
    let movie = document.getElementById("movie").innerHTML = randomMovie;



}