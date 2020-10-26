# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(first_name: "Bill", last_name: "Thompson", mobile_number: "972-123-4567", email: "bill@test.com")
location = Location.create(street_address: "123 Main Street", unit: "", zip: "12345", city: "Dallas", state: "TX", user_id: user.id)
service = Service.create(kind: "Electrical", kind_detail: "Repair", issue: "Outlet not working" details: "Location in the kitchen", )
technician = Technician.create(first_name: "Elec", last_name: "Trician", service_id: service.id)
appointment = Appointment.create(date: "12/31/20", time_target: "3:00", time_window: "2", location_id: location.id, technician_id: technician.id)

