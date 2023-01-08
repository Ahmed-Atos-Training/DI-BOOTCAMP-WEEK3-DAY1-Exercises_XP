
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
const allBooks = [

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
	{
		'title': "Soundjata",
		'author': "D.T.NIANE",
		'image' : "https://lecactussahelien.files.wordpress.com/2017/03/soundjata-ou-l-epopee-mandingue.jpg?w=620",
		'alreadyRead': true
	},
	{
		'title': "Le monde s'effondre",
		'author': "CHINUA ACHBE",
		'image' : "https://lecactussahelien.files.wordpress.com/2017/03/le-monde-seffondre.jpg?w=620",
		'alreadyRead': false
	}
]

// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).

let listBooks = document.getElementsByClassName("listBooks")[0]

let htmlTable = document.createElement('table')
htmlTable.setAttribute('style','width:100%; border:3px solid black')
listBooks.appendChild(htmlTable)


let headLine = document.createElement('tr')
htmlTable.appendChild(headLine)

let thTitle = document.createElement('th')
thTitle.setAttribute('style','width:35%; border:3px solid black')
headLine.appendChild(thTitle)

let TitleContent = document.createTextNode('title') 
thTitle.appendChild(TitleContent)


let thAuthor = document.createElement('th')
thAuthor.setAttribute('style','width:35%; border:3px solid black')
headLine.appendChild(thAuthor)

let authorContent = document.createTextNode('Author') 
thAuthor.appendChild(authorContent)


let thImage = document.createElement('th')
thImage.setAttribute('style','width:30%; border:3px solid black')
headLine.appendChild(thImage)

let imageContent = document.createTextNode('Image') 
thImage.appendChild(imageContent)


let tbody = document.createElement('tbody')
htmlTable.appendChild(tbody)

for(let book of allBooks){
	let line = document.createElement('tr')
	tbody.appendChild(line)
	
	let tdTitle = document.createElement('td')
	tdTitle.setAttribute('style','width:35%; border:3px solid black')
	line.appendChild(tdTitle)

	let bookTitle = document.createTextNode(book.title) 
	tdTitle.appendChild(bookTitle)


	let tdAuthor = document.createElement('td')
	tdAuthor.setAttribute('style','width:35%; border:3px solid black')
	line.appendChild(tdAuthor)

	let bookAuthor = document.createTextNode(book.author) 
	tdAuthor.appendChild(bookAuthor)


	let tdImage = document.createElement('td')
	tdImage.setAttribute('style','width:30%; border:3px solid black')
	line.appendChild(tdImage)
	
	let imageContent = document.createElement('img')
	imageContent.setAttribute('src',book.image)
	imageContent.setAttribute('width',"100px")
	tdImage.appendChild(imageContent);
}





