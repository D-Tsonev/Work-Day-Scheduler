const currentDayEl = $('#currentDay')
const descriptionEl = $('.description')
const saveButtonEl = $('saveBtn')
const hourSelector = $('.hour').text()
const timeContainerEls = $('.row.time-block');
console.log(timeContainerEls)

console.log(hourSelector)

var hours = [];

hours.push(hourSelector)

console.log(hours);


currentTime = dayjs().format('hA')


dayjs.extend(window.dayjs_plugin_advancedFormat)


const gradDate = dayjs().format('Do MMMM YYYY')

// Showing day, month and year in format  1st December 2023
currentDayEl.text(gradDate)






function handleCurrentTime(hourSelector) {

  console.log(`Current time: ${currentTime}`);
  console.log(typeof currentTime)

  if (hourSelector > currentTime ){
    console.log ('future')
    timeContainerEls.addClass('future')}
  else if (hourSelector < currentTime ){
    console.log ('past')
    timeContainerEls.addClass('past')}
  else {
    console.log('present ')
    timeContainerEls.addClass('present')
  }
  }

handleCurrentTime(hours);




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