window.addEventListener("load", solve);

function solve() {
  const activityType = document.getElementById("type");
  const intensity = document.getElementById("intensity");
  const calories = document.getElementById("calories");
  const duration = document.getElementById("duration");
  const date = document.getElementById("date");

  const addActivityBtn = document.getElementById("add-activity");
  const activitiesTable = document.getElementById("activities-table");
  const previewAtivity = document.getElementById("preview-activity");

  addActivityBtn.addEventListener("click", previewActivity);
  let currentActivity = {};

  function previewActivity(e) {
    if (
      !activityType.value ||
      !intensity.value ||
      !duration.value ||
      !date.value ||
      !calories.value
    ) {
      return;
    }
    e.target.disabled = true;

    currentActivity = {
      activityType: activityType.value,
      intensity: intensity.value,
      duration: duration.value,
      date: date.value,
      calories: calories.value,
    };

    const li = document.createElement("li");

    li.innerHTML = `<article>
    <p>Activity: ${activityType.value}</p>
    <p>Intensity: ${intensity.value}</p>
    <p>Duration: ${duration.value}</p>
    <p>Date: ${date.value}</p>
    <p>Calories: ${calories.value}</p>
    </article>
    <div class="btn-container">
      <button class="edit-btn">Edit</button>
      <button class="next-btn">Next</button>
    </div>
    `;

    li.querySelector(".edit-btn").addEventListener("click", editActivity);
    li.querySelector(".next-btn").addEventListener("click", createActivity);

    previewAtivity.appendChild(li);
    clearInputs();
  }

  function clearInputs() {
    activityType.value = "";
    intensity.value = "";
    calories.value = "";
    duration.value = "";
    date.value = "";
  }

  function createActivity(e) {
    const tr = document.createElement("tr");

    tr.innerHTML = `<td class="type-cell">${currentActivity.activityType}</td>
    <td class="duration-cell">${currentActivity.duration}</td>
    <td class="calories-cell">${currentActivity.calories}</td>
    <td class="date-cell">${currentActivity.date}</td>
    <td class="intensity-cell">${currentActivity.intensity}</td>
    <td class="btn-cell">
      <button class="delete-btn">Delete</button>
    </td>`;

    tr.querySelector(".delete-btn").addEventListener("click", deleteActivity);

    activitiesTable.appendChild(tr);
    addActivityBtn.disabled = false;
    previewAtivity.firstElementChild.remove();
  }

  function editActivity(e) {
    activityType.value = currentActivity.activityType;
    intensity.value = currentActivity.intensity;
    duration.value = currentActivity.duration;
    date.value = currentActivity.date;
    calories.value = currentActivity.calories;

    addActivityBtn.disabled = false;
    previewAtivity.firstElementChild.remove();
  }

  function deleteActivity(e) {
    activitiesTable.firstElementChild.remove();
  }
}
