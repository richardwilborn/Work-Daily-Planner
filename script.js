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

//current day is displayed at the top of the calendar
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});