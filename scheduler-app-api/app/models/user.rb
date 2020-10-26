class User < ApplicationRecord
    has_many :locations
    has_many :appointments, through: :locations
end
