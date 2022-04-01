const input = document.getElementById("text");
const button = document.getElementById("btn");
const output = document.getElementById("output");


input.addEventListener("keyup", (e)=>{
    let noc = input.value.length;
    let words= input.value;
    words= words.match( /\w+/g );
    output.innerText= `${noc}:Characters   ${words.length}:Words `;
})
