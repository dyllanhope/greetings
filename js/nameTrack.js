function NameTrack(nameList){
    var namesGreeted= nameList || {}; 
    
    function loadItems(){
        namesGreeted={};
    }
    function addName(userName, lang){
        var upFirst = userName.toUpperCase();
        if(namesGreeted[upFirst]===undefined){
            namesGreeted[upFirst] = 0;
        }
        if (lang === "english"){
            return "Hello, " + userName;
        }else if(lang === "afrikaans"){
            return "Hallo, " + userName;
        } else if(lang === "isixhosa"){
            return "Molo, " + userName;
        }

    }
    function displayCounter(){
        var numberOfNames = Object.keys(namesGreeted);
        return numberOfNames.length;
    }
    function displayString(){
        return namesGreeted;
    }

    return{
        greet : addName,
        counter: displayCounter,
        load: loadItems,
        items: displayString
    }
}