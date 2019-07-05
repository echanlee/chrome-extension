var commentButton = document.getElementById("insertCommentButton");

commentButton.addEventListener("click", myFunction);

function myFunction() {
    var inputMessage = document.querySelector("textarea.docos-input-textarea");
    inputMessage.addEventListener("keyup", function(e) {
        if(e.keyCode == 190){
              inputMessage.value = inputMessage.value +" :)";
        }
  })
}
