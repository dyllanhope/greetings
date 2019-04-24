function NameTrack(count,nameList){
    var timesGreeted = count;
    var namesGreeted= nameList;
    
    function loadItems(num){
        namesGreeted={};
        timesGreeted = num;
    }
    function addName(userName, lang){
        var upFirst = userName.charAt(0).toUpperCase() + userName.slice(1);
        if(namesGreeted[upFirst]===undefined){
            timesGreeted++;
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
        return timesGreeted;
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