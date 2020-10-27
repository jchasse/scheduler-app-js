class Location {
    
    // static allLocations = []

    constructor(location) {
        this.id = location.id
        this.streetAddress = location.street_address  // update once Fast JSON is working
        this.unit = location.unit  // update once Fast JSON is working
        this.zip = location.zip
        this.city = location.city
        this.state = location.state
        this.userId = location.user_id
    }




} 