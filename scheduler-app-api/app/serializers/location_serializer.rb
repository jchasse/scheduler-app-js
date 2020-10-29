class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :street_address, :unit, :city, :state, :zip, :user_id
end
