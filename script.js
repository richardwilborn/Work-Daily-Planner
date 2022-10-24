$(document).ready(function () {
  //listen for save button clicks
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    //save to local storage
    localStorage.setItem(time, value);

    //'show' notification that an item was saved to local storage
    $('.notification').addClass('show');

    //removes 'show' after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  //call to track the current date and time
  function hourUpdater() {
    var currentHour = moment().hours();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  //interval every 15 seconds to check to see if current time needs to be updated 
  var interval = setInterval(hourUpdater, 15000);

  //load saved data from localStorage into each hour in HTML
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

//current day is displayed at the top of the calendar
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});