


const alertBox = document.getElementById("status-notification");
alertBox.innerHTML = "<h1><strong>Javascript </strong> Your profile is active.</h1>";
const updateButton = document.getElementById("update-btn");
function updater(){ 
    alertBox.innerHTML ="<h1><strong>Update Banner</strong> to the main branch</h1>"
}
updateButton.addEventListener("click", updater);



const resetButton = document.getElementById("reset-btn");
function resetDashboardView(){ 
    alertBox.innerHTML ="<h1><strong>Javascript </strong> Your profile is active.</h1>"
}

resetButton.addEventListener("click", resetDashboardView );
