var main = function(){
    var updateTime = function(time){
        console.log(time);
        document.getElementById("currentTime").innerHTML = time;
    };

    return {
        ut : updateTime
    };
}
