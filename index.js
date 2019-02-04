function onLoadContent(){
  console.log("loaded")
}
function onClickYay(){
  console.log('clicked')
}
document.addEventListener('DOMContentLoaded', function() {
  console.log("loaded")
})
 document
  .getElementById('yay')
  .addEventListener('click', function() {
    console.log("clicked");
  });
