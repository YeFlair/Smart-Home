# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.destroy_all
home = Home.destroy_all
utility = Utility.destroy_all 

user1 = User.create(name: "Yahya")
user2 = User.create(name: "Carly")

home1 = Home.create(name: "Walnut")
home2 =  Home.create(name: "pistachu")

utility1 = Utility.create(home_id: home1.id , user_id: user1.id, washing: false,  door: false, temperature: rand(40..70), light: false, alarm_system: true)

utility2 =  Utility.create(home_id: home1.id , user_id: user1.id, washing: false, door: true, temperature: rand(40..70), light: true, alarm_system: false)


