function NameTrack(){
    var timesGreeted = 0;
    var namesGreeted={};
    var nameTrace='';
    function loadCount(num){
        timesGreeted = num;
    }
    function addName(userName){
        if(namesGreeted[userName]===undefined){
            timesGreeted++;
            namesGreeted[userName] = 0;
            nameTrace = userName;
        }
    }
    function displayName(){
        return nameTrace;
    }
    function displayCounter(){
        return timesGreeted;
    }

    return{
        add : addName,
        counter: displayCounter,
        load : loadCount,
        name: displayName
    }
}