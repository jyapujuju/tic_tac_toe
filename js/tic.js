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
    if (
      $("#1").val() === $("#4").val() === $("#7").val() || //check whether button 1,4,7 are equal or first column is same
      $("#1").val() == $("#2").val() == $("#3").val() && //check whether button 1,2,3 are equal or first row is same
      $("#1").val() != '' ){
        console.log($("#1").val() + 'win');
    }
    else if (
      $("#2").val() == $("#5").val() == $("#8").val() || //check whether button 2,5,8 are equal or second column is same
      $("#4").val() == $("#5").val() == $("#6").val() || //check whether button 4,5,6 are equal or second row is same
      $("#1").val() == $("#5").val() == $("#9").val() || //check whether button 1,5,9 are equal or diagonal is same
      $("#7").val() == $("#5").val() == $("#3").val() && //check whether button 3,5,7 are equal or diagonal is same
      $("#5").val() != '' ) {
        console.log($("#5").val() + 'win');
    }
    else if (
      $("#3").val() == $("#6").val() == $("#9").val() && //check whether button 3,6,9 are equal or third column is same
      $("#6").val() != ''  ) {
        console.log($("#3").val() + 'win');
    }
    else if (
      $("#7").val() == $("#8").val() == $("#9").val() && //check whether button 7,8,9 are equal or third row is same 
      $("7").val() != ''){
        console.log($("#7").val() + 'win');
    }
    else if ( count < 8){
    }
    else {
      console.log("tie");
    }
  }
});
