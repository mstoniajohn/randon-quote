// we are trying to find something which is the h1
const quoteTag = document.querySelector("h1")
const randomTag = document.querySelector("footer img")
const bodyTag = document.querySelector("body")
const authorTag = document.querySelector("p")
console.log(process.env.NAME)

// let data = []

// ///let's load in the real data
// fetch("https://api.superhi.com/api/test/quotes/")
// //got rid of the curly brackets because i'm doing one thing.
//   .then(response => response.json()) //because i have 1 arg, i can remove () from response
// //can't get rid of curly brackets because i'm doing more than one thing
//   .then(jsonData => {
//  		data = jsonData
//   	getQuote()
// //   console.log(jsonData)
// })
// we use const because we don't want this to change
const getQuote = () => {
//   if (data.length > 0){
//       //get a random quote
//     const randomNumber = Math.floor(Math.random() * data.length)
//     const randomQuote = data[randomNumber]
//     //get a random quote and post it on site
//     //get object and just the key "quote or author"
//     quoteTag.innerHTML = randomQuote.quote
//     authorTag.innerHTML = randomQuote.author
//   }

  fetch("https://api.superhi.com/api/test/quotes/random")
  	.then(response => response.json())
  	.then(jsonData => {
    	quoteTag.innerHTML = "&ldquo;" + jsonData.quote + "&rdquo;"
    	authorTag.innerHTML = "&mdash;" + jsonData.author

    if (jsonData.quote.length > 80){
      quoteTag.classList.add("long")
    } else{
      quoteTag.classList.remove("long")
    }

    bodyTag.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 90%)`
  })

}
//run the function getQuote on page load
getQuote();
//run getQuote on click of random.svg image in the footer
randomTag.addEventListener("click", function(){
  //getQuote and run it
  getQuote()
}) //()needs what we r listening for and what we're gonna do
