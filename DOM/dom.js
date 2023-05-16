// 1: Accessing Elements by ID
let head = document.getElementById("heading");
console.log(head.innerHTML);


// 2: Accessing Elements by Tag Name

let parms = document.getElementsByTagName("p");
 console.log(parms[0].innerHTML = "hi saim");


// 3: Accessing Elements by Class Name:

let elements = document.getElementsByClassName("body");
console.log(elements[0].innerHTML);

// 4: Accessing Elements by CSS Selector:
let abc = document.querySelector("#myspan");
console.log(abc.innerHTML);



// Event-listener
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
  console.log('Button clicked!');
});
