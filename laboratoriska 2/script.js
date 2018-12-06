let nums = [1 ,[2], [3, [[4]]] ,[5, 6]];

let flatten = function (arr) {
    let flatArr = [];
    arr.forEach (function(element){
        if(Array.isArray(element)){
            flatArr = flatArr.concat(flatten(element))
        }
        else{
             flatArr.push(element);
        }
    })
    return flatArr;
}

console.log(flatten(nums));