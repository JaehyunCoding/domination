// Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). Since this function always does the same thing, it requires no parameters!
// Now call it! The first list item (<li>) should get what's known as a "strikethrough" style.

function addStrikethrough(){
    let listItem = document.querySelector(`li`)
    listItem.style.textDecoration = `line-through`
}

addStrikethrough()

// Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
// Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!

function setImage(id,url){
    // let img = document.querySelector(id) // selects an img element based on the id
    let img = document.querySelector("#" + id) // selects an img element based on the id
    img.src = url
}

setImage(`image-1`, "https://pbs.twimg.com/media/Fptue4uaYAEkUhg?format=jpg&name=large")

// This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
// Now use it to remove the first two items from that list. You'll need to call it twice!

function removeItem(){
    let listItem = document.querySelector(`li`)
    listItem.remove()
}

removeItem()
removeItem()

// Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
// Try using it to change the size of any text on the page.

function changeSize(fontSize, id){

    let text = document.querySelector(id)
    text.style.fontSize = fontSize

}

changeSize("40px", "#heading")
changeSize("50px", "#thing-2")

// Part Two - DOM Elements as Function Parameters - These functions will take in DOM elements as parameters. They also don't need to return anything.

let itemC = document.createElement("img")
itemC.src = "https://pbs.twimg.com/media/FrFyYNKaAAACsTh?format=jpg&name=medium"
function createDom(item){
    let myUl = document.querySelector(`#arguments`)
        myUl.appendChild(item)
}
createDom(itemC)

function image30(img){
    img.style.height = "30px"
}
let myImg = document.querySelector("$image-1")
image30(myImg)

function invis(element){
    element.className = "invisible"
}
let listitem = document.querySelector("li")

invis(listitem)

//  Part Three - Creating DOM Elements

function createTextElement(text){
    let newItem = document.createElement(`li`)
    newItem.innerText = text
    return newItem
}

let item1 = createTextElement(`Testing text`)
let item2 = createTextElement(`not testing text`)
let arguments = document.querySelector(`$arguments`)
arguments.appendChild(item1)
arguments.appendChild(item2)

function createHeader (headerSize, text){
    let newHeader = document.createElement(`h${headerSize}`)
    newHeader.innerText = text
    return newHeader
}

let header1 = createHeader(`9`, `header test`)
arguments.appendChild(header1)

// function createli(string){
//     let myOl = document.querySelector("ol")
//     let item = document.createElement("li")
//     item.innerText = string
//     myOl.appendChild(item)
// }
// createli()