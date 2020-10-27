class User < ApplicationRecord
    has_many :locations, dependent: :destroy
    has_many :appointments, through: :locations
end
