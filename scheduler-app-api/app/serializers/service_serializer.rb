class ServiceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :kind, :kind_detail, :issue, :details
end
