//ฝึกด้วยการทำ integradeted project Sprint1
const API_URL =
    "http://bscit.sit.kmutt.ac.th/intproj25/ms2/itb-ecors/api/v1/study-plans";

    console.log("⭐ script.js LOADED");

async function loadStudyPlans() {
    const tbody = document.getElementById("plan-body");
    tbody.innerHTML = "";

    try {
        const response = await fetch("http://bscit.sit.kmutt.ac.th/intproj25/ms2/itb-ecors/api/v1/study-plans");

        if (!response.ok) {
            showErrorDialog();
            return;
        }

        const data = await response.json();

        data.forEach((plan) => {
            tbody.innerHTML += `
              <tr class="ecors-row">
                <td class="ecors-id">${plan.id}</td>
                <td class="ecors-planCode">${plan.planCode}</td>
                <td class="ecors-nameEng">${plan.nameEng}</td>
                <td class="ecors-nameTh">${plan.nameTh}</td>
              </tr>
            `;
        });

    } catch (error) {
        console.error("Error loading study plans:", error);
        showErrorDialog();
    }
}

function showErrorDialog() {
    const dialog = document.getElementById("errorDialog");
    if (dialog) dialog.show();
}

document.addEventListener("DOMContentLoaded", loadStudyPlans);

document.getElementById("manageBtn").addEventListener("click", () => {
  window.location.href = "reserve.html";
});