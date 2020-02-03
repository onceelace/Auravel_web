$(function(){

    

    //FOR THE DATE
    // initializeCheckIn();
    // initializeCheckOut();

    $('#checkIn').datepicker(
        {
            dateFormat: "MM/dd/yyyy",
            startDate: "dateToday"
        }
    ).on('changeDate', function (selected) {
        var minDate = new Date(selected.date.valueOf());
        minDate.setDate(minDate.getDate() + 1);
        
        var dd = minDate.getDate();
        var mm = minDate.getMonth() + 1;
        var y = minDate.getFullYear();

        var someFormattedDate = mm + '/' + dd + '/' + y;

        $('#checkOut').datepicker('setStartDate', someFormattedDate);
        $('#checkOut').datepicker('setDate', someFormattedDate);
    });

    $('#checkOut').datepicker(
        {
            dateFormat: "MM/dd/yyyy",
            startDate: "dateToday"
        }
    );

    $('#mattress').on('blur',function(){
        $("#payButton").hide();
    });

    $('#mattress').change(function(){
        $("#payButton").hide();
    });



    // $('#checkIn').datepicker({minDate: 0, onSelect: function(dateStr) {
    //         console.log(this.val);
    // }});

    //Check In On Change
    // var checkInDate = document.getElementById('checkIn');
    // // var checkOutDate = document.getElementById('checkOut');
    // checkInDate.onchange = function()
    // {

    //     var tt = document.getElementById('checkIn').value;

    //     var date = new Date(tt);
    //     var newdate = new Date(date);
    
    //     newdate.setDate(newdate.getDate() + 1);
        
    //     var dd = newdate.getDate();
    //     var mm = newdate.getMonth() + 1;
    //     var y = newdate.getFullYear();
    
    //     var someFormattedDate = mm + '/' + dd + '/' + y;
    //     document.getElementById('checkOut').value = someFormattedDate;
    // };
});


function initializeCheckIn()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;

    document.getElementById("checkIn").setAttribute("min", today);
    //document.getElementById("checkIn").setAttribute("value", today);
}

function initializeCheckOut()
{
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;

    document.getElementById("checkOut").setAttribute("min", today);
    //document.getElementById("checkOut").setAttribute("value", today);
}