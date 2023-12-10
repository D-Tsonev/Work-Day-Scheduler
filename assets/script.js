const currentDayElement = $('#currentDay')
const descriptionEl = $('description')
const saveButtonEl = $('saveBtn')


dayjs.extend(window.dayjs_plugin_advancedFormat)


const gradDate = dayjs().format('Do MMMM YYYY')

// Showing day, month and year in format  1st December 2023
currentDayElement.text(gradDate)

function timeColoring (){

}

currentTime = dayjs().format('hA')


function handleCurrentTime(SelectedTime) {

  console.log(`Current time: ${currentTime}`);
  console.log(typeof currentTime)

  if (SelectedTime > currentTime ){
    console.log ('future')}
  else if (SelectedTime < currentTime ){
    console.log ('past')}
  else {
    console.log('presant ')
  }
  }



handleCurrentTime('7PM');

// handleCurrentTime (8)

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