// Background Color
document.getElementById("colorButton").addEventListener("click", function () {
  const colors = ["#fcd34d", "#6ee7b7", "#60a5fa", "#f472b6", "#f87171"];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

// Date
function updateDate() {
  document.getElementById("dateCard").innerText = new Date().toDateString();
}
updateDate();
setInterval(updateDate, 1000);

// Discover Banner
document
  .getElementById("discoverBanner")
  .addEventListener("click", function () {
    window.location.href = "discoverpage.html";
  });

// Main Content

function updateElementText(id, value) {
  document.getElementById(id).innerText = value;
}

function addActivityLog(message) {
  let log = document.getElementById("activityLog");
  let entry = document.createElement("li");
  entry.innerText = message;
  log.appendChild(entry);
}

function completeTask(button) {
  let taskAssigned = parseInt(
    document.getElementById("taskAssigned").innerText
  );
  let taskCompleted = parseInt(
    document.getElementById("taskCompleted").innerText
  );

  if (taskAssigned > 0) {
    updateElementText("taskAssigned", taskAssigned - 1);
    updateElementText("taskCompleted", taskCompleted + 1);
    button.disabled = true;
    button.classList.replace("bg-indigo-600", "bg-gray-400");
    addActivityLog(
      `You have completed the task on ${new Date().toLocaleString()}`
    );
    alert("Task has been completed");
    if (
      document.querySelectorAll(".complete-btn:not([disabled])").length === 0
    ) {
      alert("All tasks have been completed!");
    }
  }
}

document.querySelectorAll(".complete-btn").forEach((button) => {
  button.addEventListener("click", function () {
    completeTask(this);
  });
});

document.getElementById("clearHistory").addEventListener("click", function () {
  document.getElementById("activityLog").innerHTML = "";
});
