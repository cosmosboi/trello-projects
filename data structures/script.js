function createQueue(){
    const queue = [];
    return{
        enqueue(item){
            queue.unshift(item);
        },
        dequeue(){
            return queue.pop()
        },
        peek(){
            return queue[queue.length-1];
        },
        get length(){
            return queue.length;
            
        },
        isEmpty(){
            return queue.length === 0; 
        }
    }
}

const q = createQueue();

q.enqueue("Prvo");
q.enqueue("Vtoro");
q.enqueue("Treto");
q.enqueue("Cetvrto");


q.length;
q.dequeue();
q.length;
q.dequeue();
q.length;
q.dequeue();
q.length;
q.dequeue();
q.length;

console.log(q.isEmpty());


function createStack(){
     stack = [];
    return{
        push(item){
            stack.push(item);
        },
        pop(){
           return stack.pop();
        },
        peek(){
            return stack[stack.length-1]
        },
        get length(){
            return stack.length;
        },
        isEmpty(){
            return stack.length === 0;
        }
    }
}



const lowerBodyStack = createStack();

lowerBodyStack.push("gakje");
lowerBodyStack.push("maicu");
lowerBodyStack.push("corape");
lowerBodyStack.push("Pantalone");

lowerBodyStack.pop();
lowerBodyStack.pop();
console.log(lowerBodyStack.length);
console.log(lowerBodyStack.peek())