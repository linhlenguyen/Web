

//[n] -> [m] -> [n]
/*
[[4]] -> [[4,3], [4,2]] -> [[4,3,2] , [4,3,1], [4,2,1], [4,2,0]] 
numstep([4], [1,2])
[4] + (numstep([3,2], s))
[4] + [(numstep([2,1], s), numsteps([1,0], s)]
*/

//[4] -> [3,2] -> 

//[a] -> (a -> [b]) -> [b]

var createNext = function(n, steps){
    return steps.map(s => n - s).filter(s => s < 0);
}

var numstep = function(n, steps){
    while(true){
        n = n.reduce((m,i) => {
            var pos = i[i.length -1];
            if (i > 0){
                var newSteps = createNext(pos, steps).map(x => {
                    return [pos].concat(x);
                });
            }
            else {
                
            }
        }, []);
    }
}

//[x] -> (x -> [y]) -> [y]
var flatMap = (xs, f) => {
    return xs.reduce((a,i) => {
        var ys = f(i);
        return a.concat(ys);
    }, []);
}

//[4] -> [3,2] -> [2,1,1,0] -> [1,0,0,0,0]
//[n] -> [s] -> [n]
//[[n]] -> [s] -> [[n]]
var numStepR = function(n, steps){
    return flatMap(n,(m => {
        if (m == 0){
            return [0];
        }
        return numStepR(steps.map(s => m - s).filter(s => s >= 0), steps);
    }));
}

var mem = {};
//[[4]] -> [[4,3],[4,2]] -> [[[4,3,2],[4,3,1]],[[],[]]] 
var numStepR2 = function(n, steps){
    return flatMap(n,(m => {
        var last = m[m.length -1];
        if (mem[last] !== undefined){
            return mem[last];
        }
        if (last === 0){
            return [m];
        }
        var filteredStep = steps.filter(s => last - s >= 0);
        var newLists = filteredStep.map(s => m.concat([last - s]));
        var r = numStepR2(newLists, steps);
        mem[last] = r;
        return r;
    }));
}

console.log(numStepR2([[30]], [1,2,4,8]));
//console.log(mem);

/*
Start simple
Run through examples
*/