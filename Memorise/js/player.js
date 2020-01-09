function player()
{
    var x, y;
    var createPlayer = function(x,y){
        this.x = x;
        this.y = y;
    }

    return {
        createPlayer : createPlayer
    };
}

export {player}