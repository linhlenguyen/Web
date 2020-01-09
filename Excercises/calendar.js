var c1 = [[900, 1630], [1400, 1500], [1530, 1630]]
var c2 = [[1000, 1100], [1300, 1400], [1530, 1630]]

//[[900, 1230], [1000, 1100], [1300, 1400], [1530, 1630], [1530, 1630]]
var mergedCalendar = c1.concat(c2).sort((x,y) => {
    return x[0] - y[0];
});

console.log(mergedCalendar);

var startTime = 900;
var finishTime = 1800;
var busy = [[]];

var ft = mergedCalendar.reduce((a,interval,index,source) => {
    var from = interval[0];
    var to = a.overFlow > interval[1] ? a.overFlow : interval[1];
    
    if (index === 0 && from > startTime){
        a.freeTime = a.freeTime.concat([[startTime, from]]);
    }
    else if (index === source.length - 1 && to < finishTime)
    {
        a.freeTime = a.freeTime.concat([[to, finishTime]]);
    }
    else {
        var nextSlot = source[index + 1];
        if (to < nextSlot[0]){
            a.freeTime = a.freeTime.concat([[to, nextSlot[0]]]);
        }
        else if (to > nextSlot[1]){
            a.overFlow = to;
        }
    }
    return a;
}, { freeTime : [], overFlow : 0 });

console.log(ft.freeTime);