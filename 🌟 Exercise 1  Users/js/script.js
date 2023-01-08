
//Retrieve the div and console.log it
let firstDiv = document.getElementById("container").innerHTML

console.log(firstDiv)

//Change the name “Pete” to “Richard”.
let liPete = document.querySelector('ul').lastElementChild.innerHTML = 'Richard'
console.log(liPete)

//Change each first name of the two <ul>'s to your name.
let firstLi = document.querySelectorAll('ul > li:first-child');
for (let elt of firstLi) {
    elt.innerHTML = 'KONE'; // "test", "passed"
  }

//Delete the <li> that contains the text node “Sarah”.
let SarahLi = document.querySelectorAll(".list")[1].children[1].remove()

//bonus
//Add a class called student_list to both of the <ul>'s.
let elts = document.querySelectorAll(".list")
for (let elt of elts) {
  elt.classList.add("student_list")
}
//Add the classes university and attendance to the first <ul>.
 let firstUl = document.querySelectorAll(".list")[0]
 firstUl.classList.add("university","attendance")


