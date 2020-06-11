/*
* javascript for completing code section based on input fields
*/
"use strict";

const mem = document.getElementById('input1');
const result = document.getElementById('job_mem');

function inputHandler(e) {

  const memLine = '#$ -l h_vmem=';

  result.innerHTML = memLine + e.target.value + 'G';
}

console.log(mem)
console.log(result)

mem.oninput = inputHandler
