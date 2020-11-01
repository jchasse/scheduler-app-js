class Service {
    
    // static allServices = []
   
    constructor(service) {
        this.id = service.id
        this.kind = service.attributes.kind
        this.kindDetail = service.attributes.kind_detail
        this.issue = service.attributes.issue
        this.details = service.attributes.details
    }

    static createService() {
        let issueArray = []
        let issueCSV

        const kind = document.getElementById('category-select').value
        const kindDetail = document.getElementById('service-select').value
        const details = document.getElementById('details-select').value
        const issue = document.querySelectorAll("label.active")
        const url = "http://localhost:3000/services"
        
        for (const selection of issue) {
            issueArray.push(selection.textContent)
        }
        issueCSV = issueArray.join(",")

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({service: {
                kind: kind, 
                kind_detail: kindDetail,
                issue: issueCSV,
                details: details
            }})
        }

        return fetch(url, options)
        .then(r => r.json())
        .then(serviceObj => {
            let newService = new Service(serviceObj.data)
            console.log(newService)
        })
    }

    //Rendering form tabs below

    static addServiceTab() {
        let form = document.getElementById("main-form")    
        let div = document.createElement("div")
            div.setAttribute("class", "tab")
            div.setAttribute("id", "service-tab")
        form.appendChild(div)
    }

    static addIssueTab() {
        let form = document.getElementById("main-form")    
        let div = document.createElement("div")
            div.setAttribute("class", "tab")
            div.setAttribute("id", "issue-tab")
        form.appendChild(div)
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
} 