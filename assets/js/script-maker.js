/*
* javascript for completing code section based on input fields
*/
"use strict";

const arcType = document.getElementById('HPC-name').value;

const mem = document.getElementById(arcType.concat('-memory') );
const result = document.getElementById('job_mem');

function inputHandler(e) {

  const memLine = '#$ -l h_vmem=';

  result.innerHTML = memLine + e.target.value + 'G';
}

console.log(arcType)
console.log(mem)
console.log(result)

mem.oninput = inputHandler
