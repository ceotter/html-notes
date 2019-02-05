document.addEventListener('DOMContentLoaded', onLoadContent)

function onLoadContent(){
  //This button should get value from yay input
  //and when pressed we should add a new li to 
  //to our things list
  console.log("hello")
  document.getElementById ('yay-btn')
    .addEventListener('click', function(){
      document.getElementById('yay').value
      console.log("New list item", newItem)
    })
  console.log( document
    .getElementById('yay'))
  document
    .getElementById('yay')
    .addEventListener('keyup', keyInputAddItem)
  // Add a listener to the input element with id yay
  // This listener hsould console.log("change")

}
function keyInputAddItem (event){
  console.log("Keyup", this.value);
}
//Object Constructor

function onClickYay(){
  console.log('clicked')
}


let arr = ["Get groceries", 2, 6,"Drive", true]
let numbers = []
let content =[]
for (var i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number') {
    content.push(arr[i])
  } else if (typeof arr[i] === 'number'){
    numbers.push(arr[i])
    }
}
console.log(content);

var ulList = document.getElementById('things-list')

for (var i = 0; i < content.length; i++) {
  let listItem = document.createElement('li')
  listItem.textContent = content[i]
  ulList.append(listItem)
}
//document.getElementById('things-list')
