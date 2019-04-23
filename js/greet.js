var greetBtn = document.querySelector(".greetBtn");
var greetFieldText = document.querySelector(".greetFieldtext");
var greetElement = document.querySelector(".name");
var radioLang = document.querySelector(".languageChoiceType");
var countElem = document.querySelector(".counterDisplay");
var resetBtn = document.querySelector(".resetBtn");
var nameError = document.getElementsByClassName("errorName");
var langError = document.getElementsByClassName("errorLang")
var greetInstance = NameTrack();

nameError[0].style.display="none";
radioLang.checked = true;

if ((localStorage['greeted'])&&((localStorage['namelist']))){
    greetInstance.load(Number(localStorage['greeted']),(localStorage['namelist']));
    countElem.innerHTML = greetInstance.counter();
}
resetBtn.addEventListener('click',function(){
    greetInstance.load(0,'');
    greetElement.innerHTML = ''; 
    localStorage.clear();
    countElem.innerHTML = greetInstance.counter();
})
greetBtn.addEventListener('click', function(){
    nameError[0].style.display="none";
    var checkedRadioBtn = document.querySelector("input[name='languageChoice']:checked");
    if (checkedRadioBtn){
        var languageType = checkedRadioBtn.value
    }
    if((languageType === "english")&&(greetFieldText.value.trim()!== "")){
        greetInstance.add(greetFieldText.value.trim());
        greetElement.innerHTML = "Hello, " + greetFieldText.value.trim();
        greetFieldText.value='';
        countElem.innerHTML = greetInstance.counter();
        localStorage['greeted'] = greetInstance.counter();
        localStorage['namelist'] = greetInstance.string();
        greetFieldText.classList.remove("warningArea");
        
    }else if((languageType === "afrikaans")&&(greetFieldText.value.trim()!== "")){
        greetInstance.add(greetFieldText.value.trim());
        greetElement.innerHTML = "Hallo, " + greetFieldText.value.trim();
        greetFieldText.value='';
        countElem.innerHTML = greetInstance.counter();
        localStorage['greeted'] = greetInstance.counter();
        localStorage['namelist'] = greetInstance.string();
        greetFieldText.classList.remove("warningArea");

    }else if((languageType === "isixhosa")&&(greetFieldText.value.trim()!== "")){
        greetInstance.add(greetFieldText.value.trim());
        greetElement.innerHTML = "Molo, " + greetFieldText.value.trim();
        greetFieldText.value='';
        countElem.innerHTML = greetInstance.counter();
        localStorage['greeted'] = greetInstance.counter();
        localStorage['namelist'] = greetInstance.string();
        greetFieldText.classList.remove("warningArea");

    }else if(greetFieldText.value.trim()===''){
        nameError[0].style.display = "block";
        greetFieldText.classList.add("warningArea");
    }
    
})