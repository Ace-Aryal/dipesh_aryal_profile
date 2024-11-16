const displayQuote = document.querySelector ("#quote")
const author = document.querySelector ("#author")
const copyrightFooter = document.querySelector ("#copyright")

window.addEventListener('load' , e=> {
fetch('https://dummyjson.com/quotes/random')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved quote
    displayQuote.innerText = data.quote
    author.innerText += data.author
    
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
})
copyrightFooter.innerHTML = `Copyright <span>&copy;</span> ${new Date().getFullYear()}  Dipesh Aryal  All Rights Reserved`
