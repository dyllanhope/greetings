var greetBtn = document.querySelector(".greetBtn");
var greetFieldText = document.querySelector(".greetFieldtext");
var greetElement = document.querySelector(".name");

greetBtn.addEventListener('click', function(){
    greetElement.innerHTML = "Hello, " + greetFieldText.value.trim();
    greetFieldText.value='';
})