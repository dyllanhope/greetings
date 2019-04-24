function NameTrack(){
    var timesGreeted = 0;
    var namesGreeted={};
    var nameTrace='';
    
    function loadItems(num,savedName){
        namesGreeted={};
        timesGreeted = num;
        nameTrace = savedName;
        var items = savedName.split(',');
        for(var i=0;i<savedName.length;i++){
            var item = items[i];
            if(namesGreeted[item]===undefined){
                namesGreeted[item] = 0;
            }
        }
    }
    function addName(userName, lang){
        var temp = userName.charAt(0).toUpperCase() + userName.slice(1);
        if(namesGreeted[temp]===undefined){
            timesGreeted++;
            namesGreeted[temp] = 0;
            nameTrace += temp + ',';
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
        return timesGreeted;
    }
    function displayString(){
        return nameTrace;
    }

    return{
        add : addName,
        counter: displayCounter,
        load: loadItems,
        string: displayString
    }
}