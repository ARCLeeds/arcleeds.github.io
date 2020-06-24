/****************************************************\
Author: Alex Coleman <a.coleman1@leeds.ac.uk>
Date: 2020-06-24

*****************************************************
    a job script generator based off 
    https://github.com/BYUHPC/BYUJobScriptGenerator

\****************************************************/
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
 * Summary. create new input element with checkbox
 * Description. 
 * 
 * @param  {} args
 */
ARCJobScriptOMat.prototype.newCheckBox = function(args) {
    var tthis = this;
    var newEl = document.createElement("input");
    newEl.type = "checkbox";
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

/**
 * Summary. Creates new input elements for text
 * Description.
 * 
 * @param  {} args
 */
ARCJobScriptOMat.prototype.newInput = function(args) {
    var tthis = this;
    var newEl = document.createElement("input");
    newEl.type = "text";
    if(args.size)
        newEl.size = args.size;
    if(args.maxLength)
        newEl.maxLength = args.maxLength;
    if(args.value)
        newEl.value = args.value;
    
    newEl.onclick = newEl.onchange = function () {
        tthis.updateJobScript();
    }
    return newEl;
};

/**
 * Summary. creates new select elements
 * @param  {} args
 */
ARCJobScriptOMat.prototype.newSelect = function(args) {
    var tthis = this;
    var newEl = document.createElement("select");
    if(args.options) {
        for( var i in args.options) {
            var newOpt = document.createElement("option");
            newOpt.value = args.options[i][0];
            newOpt.text = args.options[i][1];
            if(args.selected && args.selected == args.options[i][0])
                newOpt.selected = true;
            newEl.appendChild(newOpt)
        };
    };
    newEl.onclick = newEl.onchange = function () {
        tthis.updateJobScript();
    };
    return newEl;
};

/**
 * Summary. creates new span elements
 */
ARCJobScriptOMat.prototype.newSpan = function() {
    var newEl = document.createElement("span");
    if(arguments[0])
        newEl.id = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if(typeof arguments[i] == "string" ) {
            newEl.appendChild(document.createTextNode(arguments[i]));
        } else 
            newEl.appendChild(arguments[i]);
    };
    return newEl;
};

/**
 * Summary. create new anchor element
 * 
 * @param  {} url
 * @param  {} body
 */
ARCJobScriptOMat.prototype.newA = function(url, body) {
    var a = document.createElement("a");
    a.href = url;
    a.appendChild(document.createTextNode(body));
    a.target = "_base";
    return a;
}

/**
 * Summary. create the form
 * 
 * @param  {} doc
 */
ARCJobScriptOMat.prototype.createForm = function(doc) {
    function br() {
        return document.createElement("br")
    };
    function newHeaderRow(text) {
        var headertr = document.createElement("tr");
        var headerth = document.createElement("th");
        headerth.colSpan = 2;
        headerth.appendChild(document.createTextNode(text));
        headertr.appendChild(headerth);
        return headertr;
    }

    var newEl;
    form = document.createElement("form");
    var table = document.createElement("table");
    form.appendChild(table);
    table.appendChild(newHeaderRow("Parameters"));

    
}