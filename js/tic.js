$(document).ready(function() {
  var count = 0;
  var P1_score = 0;
  var P2_score = 0;
  $(".button").click(function(){
    if($(this).val() === ''){
      if(count%2 == 0){
        $(this).text("X");
        $(this).val("P1");
        $("#turn").text('P2 turn');
      }
      else {
        $(this).text("O");
        $(this).val("P2");
        $("#turn").text('P1 turn');
      }
    count++;
    if (count>2){
      check();
    }
    }
  });
  function check(){
    if (
      ($("#1").val() === $("#4").val() && $("#1").val() === $("#7").val() || //check whether button 1,4,7 are equal or first column is same
      $("#1").val() === $("#2").val() && $("#1").val() === $("#3").val()) && //check whether button 1,2,3 are equal or first row is same
      $("#1").val() !== '' ){
      $('#1').val() === "P1" ? P1_score++ : P2_score++;
      $("#result_p1").text("P1 win " + P1_score + " game");
      $("#result_p2").text("P2 win " + P2_score + " game");
      $("#score").text($("#1").val() + ' win');
      setTimeout(function(){
        reload_div();
      }, 500);
      count = 0;
    }
    else if (
      (($("#2").val() === $("#5").val() && $("#5").val() === $("#8").val()) ||
      ($("#4").val() === $("#5").val() && $("#5").val() === $("#6").val()) ||
      ($("#1").val() === $("#5").val() && $("#5").val() === $("#9").val()) ||
      ($("#7").val() === $("#5").val() && $("#5").val() === $("#3").val())) && //check whether button 3,5,7 are equal or diagonal is same
      $("#5").val() !== '' ) {
      $("#score").text($("#5").val() + ' win').delay( 800 );
      $('#1').val()==='P1'? P1_score++ : P2_score++;
      reload_div();
      count = 0;
    }
    else if (
      ($("#3").val() === $("#6").val() && $("#3").val() === $("#9").val()) && //check whether button 3,6,9 are equal or third column is same
      $("#6").val() !== '') {
      $("#score").text($("#3").val() + ' win');
      reload_div();
      count = 0;
    }
    else if (
      ($("#7").val() === $("#8").val() && $("#7").val() === $("#9").val()) && //check whether button 7,8,9 are equal or third row is same
      $("#7").val() !== '') {
      $("#score").text($("#7").val() + ' win');
      reload_div();
      count = 0;
    }
    else if ( count < 9){
    }
    else {
      $("#score").text('tie');
      reload_div();
      count = 0;
    }
  }
  function reload_div(){
    $("#1").val('');
    $("#1").text('-');
    $("#2").val('');
    $("#2").text('-');
    $("#3").val('');
    $("#3").text('-');
    $("#4").val('');
    $("#4").text('-');
    $("#5").val('');
    $("#5").text('-');
    $("#6").val('');
    $("#6").text('-');
    $("#7").val('');
    $("#7").text('-');
    $("#8").val('');
    $("#8").text('-');
    $("#9").val('');
    $("#9").text('-');
    $("#turn").text('P1 turn');
    $("#score").empty();

  }

});
