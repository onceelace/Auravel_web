$('#chkReservation').click(function(){
  if($(this).prop("checked") == true){
      $("#payment_status").val("Reservation");
      $("#payButton").html('Pay Reservation PHP ' + $('#reservation').attr("value"));
  }
  else if($(this).prop("checked") == false){
      $("#payment_status").val("Full");
      $("#payButton").html('Pay Full PHP ' + $('#totalAmount').attr("value"));
  }
});