// Global var
var timeDisplay = $('#currentDay')
// Ref the schedule container
var calendar = document.querySelector('.scehdlue-container')
// Use dayjs to show current hour, this will be used to select which class should be used in each hour ID in the html
var today = dayjs().format('H')

// // This will be used in the index.html file to show the current day/time in the header
function showtime() {
  var timeNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplay.text(timeNow);
}

function trackTask() {
  // Event listener for the save buttons using dom traversal parent and sibling properties
  $(".saveBtn").on('click', function () {
    var saveText = $(this).siblings('.description').val();
    // pull up the id
    var timeId = $(this).parent().attr('id');
    // toss it into local storage
    localStorage.setItem(timeId, saveText);
  });

  // Use the ID to save each updated item into local storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))


  // Go through each hour ID in the time-block class
  $('.time-block').each(function () {
    var currentTime = today;
    console.log(currentTime)
    var compToCurrentTime = parseInt($(this).attr('id').split('hour-')[1])
    // compare the hour in time block with currentTime, if the hour less than the current time we apply the class of past. This will use the starting code css classes
    if (compToCurrentTime < currentTime) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');

    } else if (compToCurrentTime == currentTime) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })
};


// call trackTask
trackTask();

//call showtime and make it update each second
showtime();
setInterval(showtime, 1000);