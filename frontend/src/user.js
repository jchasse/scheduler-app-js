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

    




} 