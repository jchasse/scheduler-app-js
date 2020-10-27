class UserSerializer
    include FastJsonapi::ObjectSerializer
    attributes :first_name, :last_name, :mobile_number, :email
    attribute :locations do |user|
      UserSerializer.new(user.locations).as_json["data"]
    end
end