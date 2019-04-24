function NameTrack(nameList){
    var namesGreeted= nameList; 
    
    function loadItems(){
        namesGreeted={};
    }
    function addName(userName, lang){
        var upFirst = userName.charAt(0).toUpperCase() + userName.slice(1);
        if(namesGreeted[upFirst]===undefined){
            namesGreeted[upFirst] = 0;
        }
        if (lang === "english"){
            return "Hello, " + upFirst;
        }else if(lang === "afrikaans"){
            return "Hallo, " + upFirst;
        } else if(lang === "isixhosa"){
            return "Molo, " + upFirst;
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
        add : addName,
        counter: displayCounter,
        load: loadItems,
        items: displayString
    }
}