$(document).ready(function() {
  var count = 0;
  $(".button").click(function(){
    if($(this).val() === ''){
      if(count%2 == 0){
        $(this).text("X");
        $(this).val(1);
        console.log(count);
      }
      else {
        $(this).text("O");
        $(this).val(0);
        console.log(count);
      }
    count++;
    if (count>2){
      check();
    }
    }
  });
  function check(){
    if ($("#1").val() === $("#4").val() === $("#7").val() || $("#1").val() == $("#2").val() === $("#3").val() && $(this).val() != '' ){
      console.log($("#1").val() + 'win');
    }
    else if ( $("#2").val() === $("#5").val() === $("#8").val() || $("#4").val() === $("#5").val() === $("#6").val() ||
        $("#1").val() === $("#5").val() === $("#9").val() ||
        $("#7").val() === $("#5").val() === $("#3").val() && $(this).val() != '' ) {
      console.log($("#5").val() + 'win');
    }
    else if (
      $("#3").val() === $("#6").val() === $("#9").val()   && $(this).val() != ''  ) {
      console.log($("#3").val() + 'win');
    }
    else if ( $("#7").val() === $("#8").val() === $("#9").val() && $(this).val() != ''){
      console.log($("#7").val() + 'win');
    }
    else if ( count < 8){
    }
    else {
      console.log("tie");
    }
  }
});
