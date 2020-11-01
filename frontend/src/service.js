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

    static addDetalsTab() {
        let form = document.getElementById("main-form")    
        let div = document.createElement("div")
            div.setAttribute("class", "tab")
            div.setAttribute("id", "details-tab")
        form.appendChild(div)
    }

    static addServiceSelect() {
        let div = document.getElementById("service-tab")
        let categories = ["Electrical", "HVAC", "Plumbing"]

        let h5 = document.createElement("h5")
            h5.innerText = "Please start here to book your appointment:"
        div.appendChild(h5)

        let select = document.createElement("select")
            select.setAttribute("class", "custom-select")
            select.setAttribute("id", "category-select")
        div.appendChild(select)    
            select.addEventListener("change", function() {
                const serviceSelect = document.getElementById('category-select')
                Service.addIssueSelect(serviceSelect.value)
            })

        let optionNone = document.createElement("option")
            optionNone.value = "none"
            optionNone.selected = true
            optionNone.disabled = true
            optionNone.hidden = true
            optionNone.innerText = "Category of Service"
        select.appendChild(optionNone)

        for (let i = 0; i < categories.length; i++) {
            let option = document.createElement("option")
                option.value = `category${i+1}`
                option.innerText = categories[i]
            select.appendChild(option)
        }
    }

    static addSubCategorySelect() {
        let subcategories = ["Repair/Service", "Maintenance", "Estimate for Replacement"]
        let div = document.getElementById("service-tab")

        let selectSub = document.createElement("select")
            selectSub.setAttribute("class", "custom-select")
            selectSub.setAttribute("id", "service-select")
        div.appendChild(selectSub)

        let optionNoneSub = document.createElement("option")
            optionNoneSub.value = "none"
            optionNoneSub.selected = true
            optionNoneSub.disabled = true
            optionNoneSub.hidden = true
            optionNoneSub.innerText = "Type of Service"
        selectSub.appendChild(optionNoneSub)

        for (let i = 0; i < subcategories.length; i++) {
            let option = document.createElement("option")
                option.value = `subCategory${i+1}`
                option.innerText = subcategories[i]
            selectSub.appendChild(option)
        }
    }

    static addIssueSelect(kind) {
        // let option1 =["Power Issue", "Surge Protection", "Breaker Panel Replacement", "Interior Lighting", "Exterior Lighting", "Generator Repair", "Ceiling Fan", "Other Electrical Issue" ]
        // let option2 = ["Tank Water Heater Repair", "Tankless Water Heater Repair", "Tank Water Heater Replacement", "Tankless Water Heater Replacement", "Toilet Repair/Replace", "Faucet Repair/Replace", "Clogged Drain", "Pipe Repair/Replace", "Other Plumbing Issue" ]
        // let option3 = ["No Heat", "No Cool", "AC Leaking Water", "System Noise", "Thermostat", "Air Quality Improvement", "Other HVAC Issue" ]
        let option1 = ["Cat1-Issue1", "Cat1-Issue2", "Cat1-Issue3", "Cat1-Issue4", "Cat1-Issue5"]
        let option2 = ["Cat2-Issue1", "Cat2-Issue2", "Cat2-Issue3", "Cat2-Issue4", "Cat2-Issue5"]
        let option3 = ["Cat3-Issue1", "Cat3-Issue2", "Cat3-Issue3", "Cat3-Issue4", "Cat3-Issue5"]
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