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
        Location.allLocations.push(this)
    }

    static createLocation() {
        const streetAddress = document.getElementById("inputAddress").value
        const unit = document.getElementById("inputAddress2").value
        const city = document.getElementById("inputCity").value
        const state = document.getElementById("inputState").value
        const zip = document.getElementById("inputZip").value

        const url = `http://localhost:3000/users/${User.currentUser.id}/locations`

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
                zip: zip
            }})
        }
        return fetch(url, options)
        .then(r => r.json())
        .then(locationObj => {
            let newLocation = new Location(locationObj.data)
            console.log(newLocation)
        })
    }

    static displayLocations() {
        clearForm()
        Location.addLocationHeading()
        Location.fetchUserLocations()
        .then( () => Location.renderLocations() )
    }

    static fetchUserLocations() {
        Location.allLocations = []
        const url = `http://localhost:3000/users/${User.currentUser.id}/locations`

        return fetch(url)
        .then(r => r.json())
        .then(locations => {
          for (let location of locations.data) new Location(location)
        })
    }

    static renderLocations() {
        for (let location of this.allLocations) {
            location.showLocationCard()
        }
        Location.showNewLocationCard()    
    }

    showLocationEdit() {
        resetForm()
        Location.addLocationTab()
        Location.addLocationInputs()
        this.addLocationId()
        this.fillLocationForm()
        addFormButtons()
        addSteps()
        showTab(currentTab)
    }

    static showLocationNew() {
        resetForm()
        Location.addLocationTab()
        Location.addLocationInputs()
        addFormButtons()
        addSteps()
        showTab(currentTab)
    }

    fillLocationForm() {
        let streetAddress = document.getElementById("inputAddress")
        let unit = document.getElementById("inputAddress2")
        let city = document.getElementById("inputCity")
        let state = document.getElementById("inputState")
        let zip = document.getElementById("inputZip")
        streetAddress.value = this.streetAddress
        unit.value = this.unit
        city.value = this.city
        state.value = this.state
        zip.value = this.zip
    }

    static updateLocation() {
        const userId = User.currentUser.id
        const id = document.getElementById('location-id').innerText
        const streetAddress = document.getElementById("inputAddress").value
        const unit = document.getElementById("inputAddress2").value
        const city = document.getElementById("inputCity").value
        const state = document.getElementById("inputState").value
        const zip = document.getElementById("inputZip").value

        const url = `http://localhost:3000/users/${userId}/locations/${id}`

        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({location: {
                street_address: streetAddress, 
                unit: unit,
                city: city,
                state: state,
                zip: zip
            }})
        }
        return fetch(url, options)
        .then(r => r.json())
        .then(locationObj => {
            let updatedLocation = new Location(locationObj.data)
            let index = this.allLocations.findIndex( () => location.id === locationObj.id)
            this.allLocations[index] = updatedLocation
            this.allLocations.pop()
            Location.displayLocations()
        })
    }

    static filterCity() {
        clearForm()
        let city = "Elliot"
        const filteredResults = Location.allLocations.filter(location => location.city == city)
        let form = document.getElementById("main-form")
        let h1 = document.createElement("h1")
            h1.innerText = 'My Locations'
        form.appendChild(h1)        
        for (let location of filteredResults) {
            location.showLocationCard()
        }

        Location.showNewLocationCard() 
    }


    //Rendering tabs/links below

    addLocationId() {
        let div = document.getElementById("location-tab")
        let p = document.createElement("p")
            p.setAttribute("id", "location-id" )
            p.innerText = this.id
            p.hidden = true   
        div.appendChild(p)
    }

    static addLocationHeading() {
        let form = document.getElementById("main-form")
        let h1 = document.createElement("h1")
            h1.innerText = 'My Locations'
        let button = document.createElement("button")
            button.innerText = "Elliot"
            button.addEventListener("click", Location.filterCity)
        form.appendChild(h1)
        form.appendChild(button)
    }

    showLocationCard() {
        let form = document.getElementById("main-form")    
        let div = document.createElement("div")
            div.setAttribute("class", "card")
            div.setAttribute("data-id", `${this.id}`)
        form.appendChild(div)
        let h5 = document.createElement("h5")
            h5.setAttribute("class", "card-header")
            h5.innerText = `${this.id}`
        div.appendChild(h5)
        let div2 = document.createElement("div")
            div2.setAttribute("class", "card-body")
        div.appendChild(div2)
        let p = document.createElement("p") 
            p.setAttribute("class", "card-text")
            p.innerText = this.streetAddress
        div2.appendChild(p)
        let p2 = document.createElement("p") 
            p2.setAttribute("class", "card-text")
            p2.innerText = this.unit
        div2.appendChild(p2)  
        let p3 = document.createElement("p") 
            p3.setAttribute("class", "card-text")
            p3.innerText = `${this.city}, ${this.state} ${this.zip}`
        div2.appendChild(p3)
        let a = document.createElement("a")
            a.setAttribute("href", "#")
            a.setAttribute("class", "btn btn-secondary")
            a.innerText = "Edit"
            a.addEventListener("click", this.showLocationEdit.bind(this))
        div.appendChild(a)
    }

    static showLocationsNavbar() {
        let priorLocation = document.getElementById("locations-list")
        if (priorLocation != null) priorLocation.remove()

        let ul = document.getElementById("navbarTogglerId")
        let li = document.createElement("li")
            li.setAttribute("class", "nav-item")
        ul.appendChild(li)    
        let a = document.createElement("a")
            a.setAttribute("class", "nav-link")
            a.setAttribute("href", "#")
            a.id = "locations-list"
            a.innerText= "My Locations"
            a.addEventListener("click", Location.displayLocations)
        li.appendChild(a)
    }

    static addLocationTab() {
        let form = document.getElementById("main-form")    
        let div = document.createElement("div")
            div.setAttribute("class", "tab")
            div.setAttribute("id", "location-tab")
        form.appendChild(div)
    }

    static addLocationInputs() {
        let locationDiv = document.getElementById('location-tab')

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
            inputZip.setAttribute("placeholder", "Zip")
        divZip.appendChild(inputZip)
    }

    static showNewLocationCard() {
        let form = document.getElementById("main-form")    
        let div = document.createElement("div")
            div.setAttribute("class", "card")
        form.appendChild(div)
        let a = document.createElement("a")
            a.setAttribute("href", "#")
            a.setAttribute("class", "btn btn-secondary")
            a.innerText = "Add New Location"
            a.addEventListener("click", this.showLocationNew)
        div.appendChild(a)
    }





} 