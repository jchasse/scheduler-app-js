class User {
    
    static currentUser

    constructor(user) {
        this.id = user.id
        this.firstName = user.attributes.first_name
        this.lastName = user.attributes.last_name
        this.mobileNumber = user.attributes.mobile_number
        this.email = user.attributes.email
        // this.locations = user.attributes.locations.map(location => new Location(location))
        User.currentUser = this
    }

    static createUser() {
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const mobileNumber = document.getElementById('phone').value
        const url = "http://localhost:3000/users"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: {
                first_name: firstName,
                last_name: lastName,
                mobile_number: mobileNumber
            }})
        }

            return fetch(url, options)
            .then(r => r.json())
            .then(userObj => {
                let newUser = new User(userObj.data)
                console.log(newUser)
                return newUser
            })
    }

    showUserEdit() {
        resetForm()
        User.addUserTab()
        User.addUserInputs()
        User.currentUser.fillUserForm()
        addFormButtons()
        addSteps()
        showTab(currentTab)
    }

    fillUserForm() {
        let firstName = document.getElementById("firstName")
        let lastName = document.getElementById("lastName")
        let phone = document.getElementById("phone")
        firstName.value = this.firstName
        lastName.value = this.lastName
        phone.value = this.mobileNumber
    }

    static updateUser() {
        const id = User.currentUser.id
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const mobileNumber = document.getElementById('phone').value
        const url = `http://localhost:3000/users/${id}`

        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: {
                first_name: firstName,
                last_name: lastName,
                mobile_number: mobileNumber
            }})
        }

            return fetch(url, options)
            .then(r => r.json())
            .then(userObj => {
                let currentUser = new User(userObj.data)
                console.log(currentUser)
                resetForm()
                Location.displayLocations()
            })
    }


    static addUserInputs() {
        let personDiv = document.getElementById('user-tab')
        let h5 = document.createElement("h5")
            h5.innerText = `Let us gather additional information for an account:`
        personDiv.appendChild(h5)

        let pfn = document.createElement("p")
        personDiv.appendChild(pfn)
        let inputFN = document.createElement("input")
            inputFN.setAttribute("type", "text")
            inputFN.setAttribute("id", "firstName")
            inputFN.setAttribute("class", "form-control")
            inputFN.setAttribute("placeholder", "First name...")
        pfn.appendChild(inputFN)

        let pln = document.createElement("p")
        personDiv.appendChild(pln)
        let inputLN = document.createElement("input")
            inputLN.setAttribute("type", "text")
            inputLN.setAttribute("id", "lastName")
            inputLN.setAttribute("class", "form-control")
            inputLN.setAttribute("placeholder", "Last name...")
        pln.appendChild(inputLN)

        let pm = document.createElement("p")
        personDiv.appendChild(pm)
        let inputM = document.createElement("input")
            inputM.setAttribute("type", "tel")
            inputM.setAttribute("class", "form-control")
            inputM.setAttribute("id", "phone")
            inputM.setAttribute("pattern", "[0-9]{3}-[0-9]{2}-[0-9]{3}")
            inputM.setAttribute("placeholder", "Mobile Phone")
        pm.appendChild(inputM)

        let ptm = document.createElement("p")
            ptm.innerText = "We’ll send you a text message to confirm your appointment and to provide you with other updates, if need be."
        personDiv.appendChild(ptm)
    }







} 