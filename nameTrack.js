function NameTrack(){
    var timesGreeted = 0;
    var namesGreeted={};
    var nameTrace='';
    function loadCounter(num){
        timesGreeted = num;
    }
    function loadItems(savedName){
        namesGreeted={};
        nameTrace = savedName;
        var items = savedName.split(',');
        for(var i=0;i<savedName.length;i++){
            var item = items[i];
            if(namesGreeted[item]===undefined){
                namesGreeted[item] = 0;
            }
        }
    }
    function addName(userName){
        var temp = userName.charAt(0).toUpperCase() + userName.slice(1);
        if(namesGreeted[temp]===undefined){
            timesGreeted++;
            namesGreeted[temp] = 0;
            nameTrace += temp + ',';
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
        load: loadCounter,
        loadElem : loadItems,
        string: displayString
    }
}