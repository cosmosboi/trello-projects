let nums = [1 ,[2], [3, [[4]]] ,[5, 6]];

let flatten = function (arr) {
    let flatArr = [];
    arr.forEach (function(value){
        if(Array.isArray(value)){
            flatArr = flatArr.concat(flatten(value))
        }
        else{
             flatArr.push(value);
        }
       
    })
    return flatArr;
}

console.log(flatten(nums));


function fibonacci(){
    let prev =0;
    let next = 1;
    
    return function(){
        let temporary = next;
        next = prev + next;
        prev = temporary;
        return next;
    }
    }
    var temp = fibonacci()

p1 = document.querySelector("#p1");
p2 = document.querySelector("#p2");


function timer(elt, wait){
    let counter = 100;
    setInterval(odbrojuvac, wait);
    function odbrojuvac(){
        elt.innerHTML = counter;
        counter++
    }
}

timer(p1, 500);
timer(p2, 3.141592);


console.dir(timer);
console.dir(temp);

nums = [1, 2 ,3 [4,5], [6,7,8], 9]

function flatten(arr) {
    let flatArray = []; // [1, ]
                        // [2, ]
                        // [3, ]
    //[ ]
    arr.forEach(function(value){
        if(Array.isArray(value)){
            flatArray = flatArray.concat(flatten(value))
        }
        else{
            flatArray.push(value);
        }
    })
    return flatArray;
}

flatten(nums);