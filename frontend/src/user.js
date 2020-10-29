class User {
    
    static currentUser = []

    constructor(user) {
        this.id = user.id
        this.firstName = user.first_name  // update once Fast JSON is working
        this.lastName = user.last_name // update once Fast JSON is working
        this.mobileNumber = user.mobileNumber
        this.email = user.email
        this.locations = user.attributes.locations.map(location => new Location(location))
        User.currentUser.push(this)
    }

    createUser() {
        // let issueArray = []
        // let issueCSV

        const first_name = document.getElementById('firstName').value
        const last_name = document.getElementById('lastName').value
        const mobile_number = document.getElementById('phone').value
        const url = "http://localhost:3000/users"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: {
                first_name: this.firstName,
                last_name: this.lastName,
                mobile_number: mobileNumber 
            }})
        }

        fetch(url, options)
        .then(r => r.json())
        .then(usereObj => {
            let newUser = new User(userObj.data)
            console.log(newUser)
        })
    }



    //Rendering form tabs below

    static renderUserTab() {
        let personDiv = document.getElementById('person-tab-details')
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