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
  // This function will figure out which tab to display
  let allTabs = document.getElementsByClassName("tab");
//   let issue = document.getElementById("details-tab-select")
//   let person = document.getElementById("person-tab-details")
//   let location = document.getElementById("location-tab-details")
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  allTabs[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;

//   if (allTabs[currentTab] === issue) {
//     Service.renderDetailsTab()
//   } else {
//       console.log("hello")
//   }

  // if you have reached the end of the form...
  if (currentTab >= allTabs.length) {
    // ... the form gets submitted:
    // let form = document.getElementById("regForm")
    // form.addEventListener("click", Service.createService)

    document.getElementById("regForm").submit();
    debugger
    Service.createService()
    Location.createLocation()
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}