const currentDayEl = $("#currentDay");
const mainContainer = $(".container");
const tasks = getTasks();

const currentTime = dayjs();

const currentTime24 = parseInt(currentTime.format("HH"));


dayjs.extend(window.dayjs_plugin_advancedFormat);

const showDate = dayjs().format("Do MMMM YYYY");

// Showing day, month and year in format  1st January 2023
currentDayEl.text(showDate);

// Loop though hours from 9 to 17
for (let i = 9; i < 18; i++) {
  //  Current time in 12hour format
  const hour = dayjs().hour(i).format("hA");

  // Creating a dynamic HTML elements

  let hourDiv = $("<div>").addClass("row time-block");
  let hourText = $("<div>").addClass("col-md-1 hour").text(hour);
  let description = $("<textarea>").addClass("col-md-10 description");
  let saveButton = $("<button>").addClass("btn saveBtn col-md-1");
  let faIcon = $("<span>").addClass("far fa-save fa-lg");
  saveButton.append(faIcon);

  if (i > currentTime24) {
    hourDiv.addClass("future");
  } else if (i < currentTime24) {
    hourDiv.addClass("past");
  } else {
    hourDiv.addClass("present");
  }
// checking if they are existing tasks and showing them on the page
  if (tasks[hour]) {
    description.val(tasks[hour]);
  }
  mainContainer.append(hourDiv);
  hourDiv.append(hourText);
  hourDiv.append(description);
  hourDiv.append(saveButton);
}

function handleSaveButton(event) {
  event.preventDefault();

// existingTasks object stores task and hour
  let existingTasks = {
    task: $(this).siblings(".description").val().trim(),
    hour: $(this).siblings(".hour").text(),
  };

  if (!existingTasks.task || !existingTasks.hour) {
    return;
  }

  tasks[existingTasks.hour] = existingTasks.task;

  localStorage.setItem("tasks", JSON.stringify(tasks));

  console.log(tasks);
}

$(".saveBtn").on("click", handleSaveButton);

// retrieve the tasks from the local storage
function getTasks() {
  if ("tasks" in localStorage) {
    return JSON.parse(localStorage.getItem("tasks"));
  } else {
    return {};
  }
}
