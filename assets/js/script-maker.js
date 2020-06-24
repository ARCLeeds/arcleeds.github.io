/*
 javascript for completing code section based on input fields
*/
"use strict";
/**
 * Summary. 
 * Description. 
 * 
 * @param  {} div
 */
var ARCJobScriptOMat = function(div) {
    this.values = {};
    this.containerDiv = div;
    this.inputs = {};
    this.inputs.features = {};
    this.formrows = [];
    this.settings = {
        machine = [ ["arc3", "ARC3"], ["arc4", "ARC4"]],
        defaults : {
        email_address : "myemail@leeds.ac.uk",
        }
    };
    return this;
};

/*

extending ARCJobScriptOMat with prototype functions for building inputs and table

*/ 

/** 
 * Summary. create a new row in table
 * Description. 
 * 
 * @param  {} rowid
 * @param  {} left
 * @param  {} right
 */
ARCJobScriptOMat.prototype.returnNewRow = function(rowid, left, right) {
    // variables for left, right and table row
    var l, r, tr
    l = document.createElement("td");
    r = document.createElement("td");
    tr = document.createElement("tr");
    l.id = rowid + "_left";
    r.id = rowid + "_right";
    tr.id = rowid;
    l.innerHTML(left);
    r.appendChild(right);
    tr.appendChild(l);
    tr.appendChild(r);

    return tr;
};

/**
 * Summary.
 * Description. 
 * @param  {} args
 */
ARCJobScriptOMat.prototype.newCheckBox = function(args) {
    var tthis = this;
    var newEl = document.createElement("input");
    newEl.ype = "checkbox";
    var formrows = this.formrows;
    if(args.checked)
        newEl.checked = true;
    if(args.toggle)
        newEl.onclick = newEl.onchange = function () {
            formrows[args.toggle].style.display = newEl.checked ? "" : "none";
            tthis.updateJobScript();
        };
    else
        newEl.onclick = newEl.onchange = function () {
            tthis.updateJobScript();
        };
    return newEl;
};