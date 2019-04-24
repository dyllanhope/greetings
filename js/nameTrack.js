function NameTrack(count,nameList){
    var timesGreeted = count;
    var namesGreeted= nameList;
    
    function loadItems(num){
        namesGreeted={};
        timesGreeted = num;
    }
    function addName(userName, lang){
        var temp = userName.charAt(0).toUpperCase() + userName.slice(1);
        if(namesGreeted[temp]===undefined){
            timesGreeted++;
            namesGreeted[temp] = 0;
        }
        if (lang === "english"){
            return "Hello, " + temp;
        }else if(lang === "afrikaans"){
            return "Hallo, " + temp;
        } else if(lang === "isixhosa"){
            return "Molo, " + temp;
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