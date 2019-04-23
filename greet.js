var greetBtn = document.querySelector(".greetBtn");
var greetFieldText = document.querySelector(".greetFieldtext");
var greetElement = document.querySelector(".name");
var radioLang = document.querySelector(".languageChoiceType");
var countElem = document.querySelector(".counterDisplay");
var resetBtn = document.querySelector(".resetBtn");
var greetInstance = NameTrack();

if (localStorage['greeted']){
    greetInstance.load(Number(localStorage['greeted']));
    countElem.innerHTML = counter;
}
resetBtn.addEventListener('click',function(){
    var counter = 0;
    localStorage['greeted'] = counter;
    countElem.innerHTML = counter;
})
greetBtn.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='languageChoice']:checked");
    if (checkedRadioBtn){
        var languageType = checkedRadioBtn.value
    }
    if(languageType === "english"){
        greetInstance.add(greetFieldText.value.trim());
        greetElement.innerHTML = "Hello, " + greetInstance.name();
        greetFieldText.value='';
        countElem.innerHTML = greetInstance.counter();
        localStorage['greeted'] = greetInstance.counter();
    }
    if(languageType === "afrikaans"){
        greetInstance.add(greetFieldText.value.trim());
        greetElement.innerHTML = "Hallo, " + greetInstance.name();
        greetFieldText.value='';
        countElem.innerHTML = greetInstance.counter();
        localStorage['greeted'] = greetInstance.counter();
    }
    if(languageType === "isixhosa"){
        greetInstance.add(greetFieldText.value.trim());
        greetElement.innerHTML = "Molo, " + greetInstance.name();
        greetFieldText.value='';
        countElem.innerHTML = greetInstance.counter();
        localStorage['greeted'] = greetInstance.counter();
    }
})