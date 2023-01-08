//In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let navbar = document.getElementById("navBar")
navbar.setAttribute("id","socialNetworkNavigation")

//First, create a new <li> tag (use the createElement method)
const Newli = document.createElement("li")

//Create a new text node with “Logout” as its specified text
const newContent = document.createTextNode("Logout");

//Append the text node to the newly created list node (<li>).
Newli.appendChild(newContent);

//Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const currentli = navbar.firstElementChild
currentli.appendChild(Newli)

//Bonus
//Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). 
let firstli = currentli.firstElementChild
let lastli = currentli.lastElementChild
//Display the text of each link. (Hint: use the textContent property).

console.log(firstli.textContent)
console.log(lastli.textContent)


