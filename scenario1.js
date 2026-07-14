const developerName = "Mular";
const specializedTrack = "Programming .NET Web development";

let modificationCount = 0;

console.log("Dashboard engine loaded successfully.");

const bioContainer = document.getElementById("bio-container");
const counterDisplay = document.getElementById("update-counter");
const updateButton = document.getElementById("update-btn");
const resetButton = document.getElementById("reset-btn");




function refreshDashboardView() {
    modificationCount = modificationCount + 1;
    console.log("Running layout modification index: " + modificationCount);

    const dynamicMarkup = "<h2>Name: " + developerName + "</h2>" +
        "<p>Specialization:<u>" + specializedTrack + "</u></p>" +
        "<p>Status: Active System Developer</p>";



        bioContainer.innerHTML = dynamicMarkup;
        
        counterDisplay.innerHTML = modificationCount;

    
}
updateButton.addEventListener("click", refreshDashboardView);

function resetDashboardView() {
    modificationCount = modificationCount * 0;
    console.log ("RESET: " + modificationCount);

    counterDisplay.innerHTML = modificationCount;
}
resetButton.addEventListener("click", resetDashboardView);
