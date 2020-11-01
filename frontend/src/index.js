document.addEventListener('DOMContentLoaded', function() {
    setFormLink()
    setAllTabs()
})

function setAllTabs() {
    Service.addServiceTab()
    Service.addIssueTab()
    Service.addDetalsTab()
    if (User.currentUser == undefined) User.addUserTab()
    if (Location.allLocations.length === 0) Location.addLocationTab()
    initializeForm()
}

function initializeForm() {
    Service.addServiceSelect()
    Service.addSubCategorySelect()
    Service.addDetailsTextarea()
    if (User.currentUser == undefined) User.addUserInputs()
    if (Location.allLocations.length === 0) Location.addLocationInputs()
    addFormButtons()
    addSteps()
    showTab(currentTab) 
}

function setFormLink() {
    let scheduler = document.getElementById("scheduler-home")
    scheduler.addEventListener('click', function() {
        resetForm()
        setAllTabs()
    })
}

