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
        let electricalOptions = ["Power Issue", "Surge Protection", "Breaker Panel Replacement", "Interior Lighting", "Exterior Lighting", "Generator Repair", "Ceiling Fan", "Other Electrical Issue" ]
        let plumbingOptions = ["Tank Water Heater Repair", "Tankless Water Heater Repair", "Tank Water Heater Replacement", "Tankless Water Heater Replacement", "Toilet Repair/Replace", "Faucet Repair/Replace", "Clogged Drain", "Pipe Repair/Replace", "Other Plumbing Issue" ]
        debugger
        event.preventDefault()
        const kindDetail = document.getElementById('service').value
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({service: {kind_detail: kindDetail}})
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