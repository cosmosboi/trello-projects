function showValue(params) {
    let string = 'string';
    let num = 2;
    
    document.querySelector("#para").innerHTML = `${string} ${num}`;
}

function plusFive(a){
    let b = a+5;
    document.querySelector("#para5").innerHTML = b; 
}

function helloWorld(){
    let hello = "hello";
    document.querySelector("#paraWorld").innerHTML = `${hello} +  world!`;
}
    