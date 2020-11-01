class Location {
    
    static allLocations = []

    constructor(location) {
        this.id = location.id
        this.streetAddress = location.attributes.street_address
        this.unit = location.attributes.unit
        this.zip = location.attributes.zip
        this.city = location.attributes.city
        this.state = location.attributes.state
        this.userId = location.attributes.user_id
    }

    static createLocation(userObj) {
        const streetAddress = document.getElementById("inputAddress").value
        const unit = document.getElementById("inputAddress2").value
        const city = document.getElementById("inputCity").value
        const state = document.getElementById("inputState").value
        const zip = document.getElementById("inputZip").value

        const url = "http://localhost:3000/locations"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({location: {
                street_address: streetAddress, 
                unit: unit,
                city: city,
                state: state,
                zip: zip,
                user_id: userObj.id
            }})
        }
        fetch(url, options)
        .then(r => r.json())
        .then(locationObj => {
            let newLocation = new Location(locationObj.data)
            console.log(newLocation)
            // do some action
        })
    }



    //Rendering form tabs below

    static renderLocationTab() {
        let locationDiv = document.getElementById('location-tab-details')

        let div1 = document.createElement("div")
            div1.setAttribute("class", "form-group")
        locationDiv.appendChild(div1)
        let inputA = document.createElement("input")
            inputA.setAttribute("type", "text")
            inputA.setAttribute("class", "form-control")
            inputA.setAttribute("id", "inputAddress")
            inputA.setAttribute("placeholder", "Address")
        div1.appendChild(inputA)

        let div2 = document.createElement("div")
            div2.setAttribute("class", "form-group")
        locationDiv.appendChild(div2)
        let inputU = document.createElement("input")
            inputU.setAttribute("type", "text")
            inputU.setAttribute("class", "form-control")
            inputU.setAttribute("id", "inputAddress2")
            inputU.setAttribute("placeholder", "Apartment, studio, or floor")
        div2.appendChild(inputU)

        let div3 = document.createElement("div")
            div3.setAttribute("class", "form-row")
        locationDiv.appendChild(div3)

        let divCity = document.createElement("div")
            divCity.setAttribute("class", "form-group col-md-6")
        let divState = document.createElement("div")
            divState.setAttribute("class", "form-group col-md-4")
        let divZip = document.createElement("div")
            divZip.setAttribute("class", "form-group col-md-2")
        div3.appendChild(divCity)
        div3.appendChild(divState)
        div3.appendChild(divZip)
        
        let inputCity = document.createElement("input")
            inputCity.setAttribute("type", "text")
            inputCity.setAttribute("class", "form-control")
            inputCity.setAttribute("id", "inputCity")
            inputCity.setAttribute("placeholder", "City")
        divCity.appendChild(inputCity)
        let inputState = document.createElement("input")
            inputState.setAttribute("type", "text")
            inputState.setAttribute("class", "form-control")
            inputState.setAttribute("id", "inputState")
            inputState.setAttribute("placeholder", "State")
        divState.appendChild(inputState)
        let inputZip = document.createElement("input")
            inputZip.setAttribute("type", "text")
            inputZip.setAttribute("class", "form-control")
            inputZip.setAttribute("id", "inputZip")
            inputZip.setAttribute("placeholder", "State")
        divZip.appendChild(inputZip)
    }






} 