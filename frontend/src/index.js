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
    addFormButtons()
    addSteps()
    showTab(currentTab) 
}
