class LocationSerializer

    def initialize(location_object)
        @location = location_object
    end

    def to_serialized_json
        options = {
            include: {
              user: {
                only: [:first_name, :last_name, :mobile_number, :email]
              }
            },
            except: [:updated_at],
          }
          @location.to_json(options)
    end

end