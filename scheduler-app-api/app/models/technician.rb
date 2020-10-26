class Technician < ApplicationRecord
  belongs_to :service
  has_many :appointments
  has_many :locations, through: :appointments
end
