var quoteText=document.querySelector("blockquote");
var quoteAuthor=document.querySelector("span");
var GenBtn=document.querySelector("button");

function quotgen() {
    fetch("https://type.fit/api/quotes", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var keys = Object.keys(data);
      rndmkey = keys[Math.floor(Math.random() * keys.length)];
      data[rndmkey].text;
      data[rndmkey].author;
    //   console.log(data[rndmkey].text);

      quote = new Quotes(
      data[rndmkey].text, data[rndmkey].author
      );
      
     quoteText.textContent = quote.text;
     quoteAuthor.textContent = quote.author;


     
    }).catch((err) => {
        console.error(err);
      });
    
}

quotgen();

GenBtn.addEventListener("click",quotgen);
window.addEventListener("onload",quotgen);