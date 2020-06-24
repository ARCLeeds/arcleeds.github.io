/*
*  jquery script for switching input form for script-o-matic
*/

$("#HPC-name").change(function() {
  if ($(this).val() == "ARC4") {
    $('#arc4-hvmem').show();
    $('#arc3-hvmem').hide();
    const arcType = document.getElementById('HPC-name').value;
    const mem = document.getElementById(arcType.concat('-memory') );
  } else {
    $('#arc4-hvmem').hide();
    $('#arc3-hvmem').show();
    const arcType = document.getElementById('HPC-name').value;
    const mem = document.getElementById(arcType.concat('-memory') );
  }
});
$("#HPC-name").trigger("change");
