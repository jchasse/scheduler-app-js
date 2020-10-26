class AddTechnicianIdToAppointment < ActiveRecord::Migration[6.0]
  def change
    add_reference :appointments, :technician, null: false, foreign_key: true
  end
end
