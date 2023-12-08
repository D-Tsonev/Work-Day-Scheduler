const currentDayElement = $('#currentDay');



dayjs.extend(window.dayjs_plugin_advancedFormat)
const gradDate = dayjs().format('Do MMMM YYYY');;
currentDayElement.text(gradDate);