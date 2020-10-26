class User < ApplicationRecord
    has_many :appointments
    # has_many :locations, through: :appointments
end
