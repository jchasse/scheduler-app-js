# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_26_200638) do

  create_table "appointments", force: :cascade do |t|
    t.string "date"
    t.string "time_target"
    t.string "time_window"
    t.integer "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "technician_id", null: false
    t.index ["location_id"], name: "index_appointments_on_location_id"
    t.index ["technician_id"], name: "index_appointments_on_technician_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "street_address"
    t.string "unit"
    t.string "zip"
    t.string "city"
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_locations_on_user_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "kind"
    t.string "kind_detail"
    t.string "issue"
    t.string "details"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "technicians", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "service_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["service_id"], name: "index_technicians_on_service_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "mobile_number"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "locations"
  add_foreign_key "appointments", "technicians"
  add_foreign_key "locations", "users"
  add_foreign_key "technicians", "services"
end
