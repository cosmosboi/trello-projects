let nums = [2, 6, 78, 1, 8];
let cars = ["BMW", "Audi", "Ford", "Peugeout"];

function showLength() {
    document.querySelector("#length").innerHTML= `Length of numbers is ${nums.length}</br> Length of cars is ${cars.length}`;
    
}

function arrayIteration(){
    let sum = 0;
    let neiskoristena_promelinva;
    for (let i = 0; i < nums.length; i++) {
         sum += nums[i];
        
    }
    document.querySelector("#iteration").innerHTML=`Sum is ${sum} and average is ${sum/nums.length}`;
}

function Rectangle(height, width){
    this.height = height;
    this.width = width;
}

Rectangle.prototype.getPerimeter = function(){
    return ` ${2 * (this.height + this.width)}`
}

Rectangle.prototype.PrintRectangle = function(){
    return `Rectangle height is ${this.height} and rectangle width is ${this.width}`;
}

let rectangle1 = new Rectangle(5, 6);
let rectangle2 = new Rectangle(12, 15);

// function calculatePerimeter(){
//     document.querySelector("#biggestPerimeter").innerHTML = `The biggest rectangle has a perimeter of 
//     ${rectangle1.getPerimeter()>rectangle2.getPerimeter() ? rectangle1.getPerimeter() :
//      rectangle2.getPerimeter()}`;
// }

function calculatePerimeter(){
    document.querySelector("#biggestPerimeter").innerHTML = `The biggest rectangle has a perimeter of 
    ${Math.max(rectangle1.getPerimeter(), rectangle2.getPerimeter())}`;
}

window.onload = function(){
    document.querySelector("#rectangle").innerHTML = `Paragraph no.1 ${rectangle1.PrintRectangle()} <br> Paragraph no.2
    ${rectangle2.PrintRectangle()}`
}
