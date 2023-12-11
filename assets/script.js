const currentDayEl = $('#currentDay')
const descriptionEl = $('.description')
const saveButtonEl = $('saveBtn')
const hourSelector = $('.hour').text()
const timeContainerEls = $('.row.time-block');
const mainContainer = $('.container')

let currentTime = dayjs()

let currentTime24 = currentTime.format('HH');



currentTime = dayjs().format('hA')



dayjs.extend(window.dayjs_plugin_advancedFormat)


const showDate = dayjs().format('Do MMMM YYYY')

// console.log(currentTime12);


// console.log(currentTime24Hour)

for (let i = 9; i < 18; i++) {
  const hour = dayjs().hour(i).format("hA");;
  console.log(i);

  let hourDiv = $("<div>").addClass('row time-block');
  let hourText = $('<div>').addClass('col-md-1 hour').text(hour);
  let description = $('<textarea>').addClass('col-md-10 description');
  let saveButton = $('<button>').addClass('btn saveBtn col-md-1');
  let faIcon = $('<span>').addClass('far fa-save fa-lg');
  saveButton.append(faIcon);

  if (i > currentTime24) {
    hourDiv.addClass('future');
    console.log('future');
  } else if (i < currentTime24) {
    hourDiv.addClass('past');
    console.log('past');
  } else {
    console.log('present');
    hourDiv.addClass('present');
  }

  mainContainer.append(hourDiv);
  hourDiv.append(hourText);
  hourDiv.append(description);
  hourDiv.append(saveButton);
}








// Showing day, month and year in format  1st December 2023
currentDayEl.text(showDate)







function handleSaveButton (event) {
  event.preventDefault()
  // reading the value in description field
  description = descriptionEl.val.trim()

  //  add it ot localstorage 
  description.reset()
}

// saveButtonEl.on('click', handleSaveButton)

function handleDelete (event){
  console.log(event.target)
  let deleteDescription = $(event.target)
  deleteDescription.empty()

  // remove it from localstore


}