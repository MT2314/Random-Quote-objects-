//Quote Object

let quote = document.getElementById("quote");
let author = document.getElementById("author");

let Q;
let A;

let quoteObj = {
    
    Quotes:[
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", 
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", 
        "In three words I can sum up everything I've learned about life: it goes on", 
        "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend", 
        "If you tell the truth, you don't have to remember anything", 
        "We accept the love we think we deserve", 
    ],

    Authors:[
        "Bernard M. Baruch ",
        "Dr. Seuss",
        "Robert Frost",
        "Albert Camus",
        "Mark Twain",
        "Stephen Chbosky",
    ],

    RandomQuote : function(){
        let numR = Math.floor(Math.random() * this.Quotes.length )
        Q = this.Quotes[numR];
        A = this.Authors[numR];
        
    }
    
    
};

//Quote Random Button
let btn = document.getElementById("btn");

btn.addEventListener("click", function (){
    quoteObj.RandomQuote();
    quote.innerHTML = "\"" + Q +  "\"";
    author.innerHTML = A;
    btn.innerText = "Change Quote";
});

//Add New Quote
let btnN = document.getElementById("btnN");
let quoteNew
let authorNew
let added

btnN.addEventListener("click", function(){
    quoteNew = document.getElementById("quoteNew").value;
    authorNew = document.getElementById("authorNew").value;
    quoteObj.Quotes.push(quoteNew);
    quoteObj.Authors.push(authorNew);

    //Display Last Added Quote
    document.getElementById("quoteLast").innerHTML = quoteNew;
    document.getElementById("authorLast").innerHTML = authorNew;
});




