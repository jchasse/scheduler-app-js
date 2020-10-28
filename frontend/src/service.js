class Service {
    
    // static currentService = {}
   
    constructor(service) {
        this.id = service.id
        this.kind = service.attributes.kind
        this.kindDetail = service.attributes.kind_detail
        this.issue = service.attributes.issue
        this.details = service.attributes.details
    }

    static createService() {
        const kind = document.getElementById('category-select').value
        const kindDetail = document.getElementById('service-select').value
        const issue = document.getElementById('issue-select').value
    }

    static renderIssueForm(kind) {

        let electricalOptions = ["Power Issue", "Surge Protection", "Breaker Panel Replacement", "Interior Lighting", "Exterior Lighting", "Generator Repair", "Ceiling Fan", "Other Electrical Issue" ]
        let plumbingOptions = ["Tank Water Heater Repair", "Tankless Water Heater Repair", "Tank Water Heater Replacement", "Tankless Water Heater Replacement", "Toilet Repair/Replace", "Faucet Repair/Replace", "Clogged Drain", "Pipe Repair/Replace", "Other Plumbing Issue" ]
        let hvacOptions = ["No Heat", "No Cool", "AC Leaking Water", "System Noise", "Thermostat", "Air Quality Improvement", "Other HVAC Issue" ]

        let issueDiv = document.getElementById('issue-tab-select')
        let h5 = document.createElement("h5")
            h5.innerText = `How can we help with your ${kind} issue?`
        issueDiv.appendChild(h5)
        
        let div = document.createElement("div")
            div.setAttribute("class", "btn-group-toggle")
            div.setAttribute("data-toggle", "buttons")
            div.setAttribute("id", "issue-select")
        issueDiv.appendChild(div)
     
        if (kind === "Electrical") {
            for (const issue of electricalOptions) {
                Service.renderIssueOptions(issue)
            } 
        } else if (kind === "Plumbing") {
            for (const issue of plumbingOptions) {
                Service.renderIssueOptions(issue)
            } 
        } else if (kind === "HVAC") {
            for (const issue of hvacOptions) {
                Service.renderIssueOptions(issue)
            } 
        }
    }

    static renderIssueOptions(issue) {
        let div = document.getElementById("issue-select")
        let label = document.createElement("label")
            label.setAttribute("class", "btn btn-outline-secondary")
            label.innerText = issue
        div.appendChild(label)
        let input = document.createElement("input")
            input.setAttribute("type", "checkbox")
            input.setAttribute("name", issue)
        label.appendChild(input)
    }

    static renderDetailsTab() {
        let detailsDiv = document.getElementById('details-tab-select')
        let detailsH5 = document.createElement("h5")
            detailsH5.innerText = `Any additional details you would like to share? [equipment history, accessibility, special requests]`
        detailsDiv.appendChild(detailsH5)
        
        let div2 = document.createElement("div")
            div2.setAttribute("class", "form-group")
        detailsDiv.appendChild(div2)

        let textArea = document.createElement("textArea")
            textArea.setAttribute("id", "details-select")
            textArea.setAttribute("class", "form-control")
            textArea.setAttribute("rows", "3")
        div2.appendChild(textArea)
    }

    static renderPersonTab() {
        let personDiv = document.getElementById('person-tab-details')
        let h5 = document.createElement("h5")
            h5.innerText = `Let us gather additional information for an account:`
        personDiv.appendChild(h5)

        let pfn = document.createElement("p")
        personDiv.appendChild(pfn)
        let inputFN = document.createElement("input")
            inputFN.setAttribute("type", "text")
            inputFN.setAttribute("class", "form-control")
            inputFN.setAttribute("placeholder", "First name...")
        pfn.appendChild(inputFN)

        let pln = document.createElement("p")
        personDiv.appendChild(pln)
        let inputLN = document.createElement("input")
            inputLN.setAttribute("type", "text")
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

    static renderLocationTab() {
        let personDiv = document.getElementById('person-tab-details')


    }








    static fetchService() {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({service: {
                kind: kind, 
                kind_detail: kindDetail,

            }})
        }
        const url = "http://localhost:3000/services"
      
        document.getElementById('serviceForm').innerHTML = ""
      
        fetch(url, options).then(r => r.json()).then(serviceObj => {
            let newService = new Service(serviceObj.data)
            newService.renderService()
        })
    }

    renderService() {
        let div = document.getElementById('service-container')
        let h4 = document.createElement("h4")
        h4.id = this.id
        h4.innerText = this.kindDetail
        // pgh.addEventListener('click', this.showList.bind(this))
        div.append(h4)
    }




} 