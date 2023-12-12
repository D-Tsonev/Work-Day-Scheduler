
const currentDayEl = $('#currentDay')
const mainContainer = $('.container')

$(document).ready(function () {
let currentTime = dayjs()

let currentTime24 = parseInt(currentTime.format('HH'))
console.log(currentTime24)

dayjs.extend(window.dayjs_plugin_advancedFormat)
const showDate = dayjs().format('Do MMMM YYYY')

// Showing day, month and year in format  1st January 2023
currentDayEl.text(showDate)


// Loop though hours from 9 to 17 
for (let i = 9; i < 18; i++) {

//  Current time in 12hour format 
  const hour = dayjs().hour(i).format("hA")

  // Creating a dynamic HTML elements

  let hourDiv = $("<div>").addClass('row time-block')
  let hourText = $('<div>').addClass('col-md-1 hour').text(hour)

  let description = $('<textarea>').addClass('col-md-10 description')
  let saveButton = $('<button>').addClass('btn saveBtn col-md-1')
  let faIcon = $('<span>').addClass('far fa-save fa-lg')
  saveButton.append(faIcon)

  if (i > currentTime24) {
    hourDiv.addClass('future')
  } else if (i < currentTime24) {
    hourDiv.addClass('past')
  } else {
    hourDiv.addClass('present')
  }

  mainContainer.append(hourDiv)
  hourDiv.append(hourText)
  hourDiv.append(description)
  hourDiv.append(saveButton)

}


function handleSaveButton(event) {
  event.preventDefault();

  let existingTasks = {
    task: $(this).siblings(".description").val().trim(),
    hour: $(this).siblings(".hour").text()
  }
  
  if (!existingTasks.task || !existingTasks.hour){
    return
  }

  localStorage.setItem("tasks", JSON.stringify(existingTasks));

  console.log(task, hour)
}

$('.saveBtn').on('click', handleSaveButton);

})


