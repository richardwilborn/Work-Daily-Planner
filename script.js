$(document).ready(function () {
  $('saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time =(this).parent().attr('id');
    //save to local storage
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    var currentHour = moment().hours();

  }

  hourUpdater();
  //interval every 10 seconds to check to see if current time needs to be updated 
  var interval = setInterval(hourUpdater, 10000);


//current day is displayed at the top of the calendar
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});