
// Add a “light blue” background color and some padding to the <div>.
let firstDiv = document.querySelector('div')
firstDiv.setAttribute('style', 'background-color: lightblue;padding: 4rem;');

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(firstDiv.style.backgroundColor == 'lightblue'){
	let message = `Hello ${document.querySelector('ul').firstElementChild.innerHTML} and ${document.querySelector('ul').lastElementChild.innerHTML}`
	alert(message)
}

// Do not display the <li> that contains the text node “John”.
let firstElt = document.querySelector('ul > li:first-child')
firstElt.setAttribute('style','display: none;')


// Add a border to the <li> that contains the text node “Pete”.
let lastElt = document.querySelector('ul >li:last-child')
lastElt.setAttribute('style','border: 1px solid  blue;')


// Change the font size of the whole body.
document.body.style.fontSize = "20px"

