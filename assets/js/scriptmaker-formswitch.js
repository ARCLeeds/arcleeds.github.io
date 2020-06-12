/*
*  jquery script for switching input form for script-o-matic
*/

$("#HPC-name").change(function() {
  if ($(this).val() == "ARC4") {
    $('#arc4-hvmem').show();
    $('#arc3-hvmem').hide();
  } else {
    $('#arc4-hvmem').hide();
    $('#arc3-hvmem').show();
  }
});
$("#HPC-name").trigger("change");
