// one user, view services.all, locations.all
// one user, return user and locations, show list of locations off user
// add Eliot button and filter Locations
// video of the Eliot video
// git hub push


document.addEventListener('DOMContentLoaded', function() {
    setFormLink()
    User.fetchUsers()
    .then(() => User.showUserNavbar())
    .then(() => Location.showLocationsNavbar())
    .then(() => setAllTabs())
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

function createService() {
    if (User.currentUser != null && Location.allLocations != []) {
        Service.createService()
        .then( () => resetForm())
        .then( () => Location.displayLocations())
    } else {
        User.createUser()
        .then( newUser => Location.createLocation(newUser))
        .then( () => Service.createService())
        .then( () => resetForm())
        .then( () => Location.displayLocations())
    }
}

function resetForm() {
    currentTab = 0
    clearForm()
    if (User.currentUser) User.showUserNavbar()
    if (Location.allLocations.length !== 0) Location.showLocationsNavbar()
}

function clearForm() {
    let form = document.getElementById('main-form')
    form.innerHTML = ""
}

