/****************************************************\
Author: Alex Coleman <a.coleman1@leeds.ac.uk>
Date: 2020-06-24

TODO:
- [ ] create a global series of settings that can be switched based on
machine select

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
        machine : [ ["arc4", "ARC4"], ["arc3", "ARC3"] ],
        defaults : {
        email_address : "myemail@leeds.ac.uk",
        },
        machine_settings : {
            arc3 : {
                max_node_mem : "128",

            },
            arc4 : {
                max_node_mem : "192",
            }
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
    l.innerHTML = left;
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
    if(args.size)
        newEl.size = args.size;
    if(args.maxLength)
        newEl.maxLength = args.maxLength;
    if(args.value)
        newEl.value = args.value;
    if(args.min)
        newEl.min = args.min;
    if(args.max)
        newEl.max = args.max;
    if(args.type) {
        newEl.type = args.type;
    } else {
        newEl.type = "text";
    };
    
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
    var form = document.createElement("form");
    var table = document.createElement("table");
    form.appendChild(table);
    table.appendChild(newHeaderRow("Parameters for Job script"));

    // selecting system
    this.inputs.system_selector = this.newSelect({ options : this.settings.machine });

    // specifying inputs
    this.inputs.node_type = this.newSelect({options : [["Compute", "Compute"],
                                                       ["GPU", "GPU"]] });

    this.inputs.mem_per_core = this.newInput({value : "1", 
                                              size : 6,
                                              type : "number",
                                              min : "1",
                                              max : "192"})

    this.inputs.wallhours = this.newInput({value : "00", 
                                           size : 3, 
                                           type : "number",
                                           min : "00",
                                           max : "48"});
    this.inputs.wallmins = this.newInput({value : "15",
                                          size : 4,
                                          type : "number",
                                          min : "00",
                                          max : "59"});
    this.inputs.wallsec = this.newInput({value : "00",
                                          size : 3,
                                          type : "number",
                                          min : "00",
                                          max : "59"});

    this.inputs.mem_units = this.newSelect({options : [["G", "GB"], ["M", "MB"]]});                                        

    // create input section of form
    table.appendChild(this.returnNewRow("arc_sm_system_selector_container", 
                                  "Which system do you wish to use?", 
                                  this.inputs.system_selector));

    table.appendChild(this.returnNewRow("arc_sm_row_node_type",
                                        "What node type do you wish to use? ",
                                        this.inputs.node_type));

    table.appendChild(this.returnNewRow("arc_sm_row_walltime", 
                                        "How long will your job run: ",
                                        this.newSpan(null, 
                                                    this.inputs.wallhours, 
                                                    " hours ", 
                                                    this.inputs.wallmins, 
                                                    " mins ", 
                                                    this.inputs.wallsec, 
                                                    " secs ")));

    table.appendChild(this.returnNewRow("arc_sm_row_mem_per_core",
                                        "How much memory do you need per core? ",
                                        this.newSpan(null, this.inputs.mem_per_core, this.inputs.mem_units)));


    
    return form;
    
}; // end of create form 

/**
 * Summary. intialise the script-o-matic 
 * Description. Creates the form and blank job script
 */
ARCJobScriptOMat.prototype.init = function() {
    this.inputDiv = document.createElement("div");
    this.inputDiv.id = "arc_sm_input_container";
    this.containerDiv.appendChild(this.inputDiv);

    var scriptHeader = document.createElement("h1");
    scriptHeader.id = "arc_sm_script_header_container";
    scriptHeader.appendChild(document.createTextNode("Job Script"));
    this.containerDiv.appendChild(scriptHeader);

    this.systemSelectorDiv = document.createElement("div");
    this.systemSelectorDiv.id = "arc_sm_system_selector_container";
    
    this.form = this.createForm();
    this.inputDiv.appendChild(this.form);

    this.jobNotesDiv = document.createElement("div");
    this.jobNotesDiv.id = "arc_sm_jobnotes"
    this.containerDiv.appendChild(this.jobNotesDiv)

    this.jobScriptDiv = document.createElement("div");
    this.jobScriptDiv.id = "arc_sm_jobscript";
    this.containerDiv.appendChild(this.jobScriptDiv);

    this.updateJobScript();
    
};

ARCJobScriptOMat.prototype.retrieveValues = function() {


    this.values.system_choice = this.inputs.system_choice;
    // retrieve wallclock time values
    // TODO: need some validation here of correct inputs
    this.values.wallhours = this.inputs.wallhours;
    this.values.wallmins = this.inputs.wallmins;
    this.values.wallsec = this.inputs.wallsec;
    this.values.mem_per_core = this.inputs.mem_per_core;
    this.values.mem_units = this.inputs.mem_units;
    
};


ARCJobScriptOMat.prototype.updateJobScript = function() {
    this.retrieveValues();
    this.toJobScript();

    return;
}


ARCJobScriptOMat.prototype.generateScript = function() {

    var features = "";

    var script_body = "# An example job submission script\n# generated by the Script-o-matic!\n";

    var hashdoll = function hashdoll(txt) {
        script_body += "#$ " + txt + "\n";
    };

    script_body += "# use current environment and current working directory\n#$ -V -cwd\n\n";

    script_body += "# specify wallclock time (minimum 15min, maximum 48 hours)\n";
    hashdoll("-l h_rt=" + this.values.wallhours.value + 
             ":" + this.values.wallmins.value + ":" +
             this.values.wallsec.value + "\n");

    hashdoll("-l h_vmem=" + this.values.mem_per_core.value + this.values.mem_units.value)

    return script_body
};

/**
 * Summary. function to inject job script content into div
 */
ARCJobScriptOMat.prototype.toJobScript = function() {
    var script_body = this.generateScript()

    this.jobScriptDiv.innerHTML = "<pre>" + script_body + "</pre>";
};