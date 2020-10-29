class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :mobile_number, :email
end
