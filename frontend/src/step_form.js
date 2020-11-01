let currentTab = 0

// render form buttons and steps

function addFormButtons() {
    let form = document.getElementById("main-form")
    let divStyle = document.createElement("div")
        divStyle.style = "overflow:auto;"
        divStyle.id = "div-style"
    form.appendChild(divStyle)
    let divStyle2 = document.createElement("div")
        divStyle2.style = "float:right;"
        divStyle2.id = "button-div"
    divStyle.appendChild(divStyle2)
    let prevBtn = document.createElement("button")
        prevBtn.type = "button"
        prevBtn.setAttribute("class", "button")
        prevBtn.id = "prevBtn"
        prevBtn.setAttribute("onclick", "nextPrev(-1)")
        prevBtn.innerText = "Previous"
    divStyle2.appendChild(prevBtn)
    let nextBtn = document.createElement("button")
        nextBtn.type = "button"
        nextBtn.setAttribute("class", "button")
        nextBtn.id = "nextBtn"
        nextBtn.setAttribute("onclick", "nextPrev(1)")
        nextBtn.innerText = "Next"
    divStyle2.appendChild(nextBtn)
}

function addSteps() {
    let allTabs = document.getElementsByClassName("tab")
    let divStyle = document.getElementById("div-style")

    let divStep = document.createElement("div")
        divStep.style = "text-align:center;margin-top:40px;"
    divStyle.appendChild(divStep)
    
    for (let i = 0; i < allTabs.length; i++) {
        let span = document.createElement("span")
            span.setAttribute("class", "step")
        divStep.appendChild(span)
    }
}

// form functionality

function showTab(n) {
    let allTabs = document.getElementsByClassName("tab")
    let prevBtn = document.getElementById("prevBtn")
    let nextBtn = document.getElementById("nextBtn")

    allTabs[n].style.display = "block"
    if (n == 0) {prevBtn.style.display = "none" } 
    else {prevBtn.style.display = "inline"}

    if (n == (allTabs.length - 1)) {nextBtn.innerHTML = "Submit"} 
    else {nextBtn.innerHTML = "Next"}

    fixStepIndicator(n)
}

function nextPrev(n) {
    let allTabs = document.getElementsByClassName("tab")
    let userTab = document.getElementById('user-tab')
    let locationTab = document.getElementById('location-tab')

    if (n == 1 && !validateForm()) return false

    allTabs[currentTab].style.display = "none"
    currentTab = currentTab + n;

    if (allTabs.length === 1 && allTabs[0]=== userTab) {
        return User.updateUser()
    } else if (allTabs.length === 1 && allTabs[0]=== locationTab && document.getElementById('location-id') === null) {
        return Location.createLocation()
    } else if (allTabs.length === 1 && allTabs[0]=== locationTab) {
        return Location.updateLocation()
    } else if (currentTab >= allTabs.length) {
        return createService()
    }
    showTab(currentTab)
}

function validateForm() {
    let valid = true
    let allTabs = document.getElementsByClassName("tab")
    let inputs = allTabs[currentTab].getElementsByTagName("input")
    let step = document.getElementsByClassName("step")

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value == "") {
        inputs[i].className += " invalid"
        valid = false
      }
    }
    if (valid) {
      step[currentTab].className += " finish"
    }
    return valid
}

function fixStepIndicator(n) { 
    let allSteps = document.getElementsByClassName("step")

    for (let i = 0; i < allSteps.length; i++) {
      allSteps[i].className = allSteps[i].className.replace(" active", "")
    }
    allSteps[n].className += " active";
}