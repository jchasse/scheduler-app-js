class Location < ApplicationRecord
    has_many :appointments
    # has_one :users, through: :appointments
end
