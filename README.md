# APIU1JanJoh

//get 
curl -X GET "http://localhost:3000/students"

//get by query
curl -X GET "http://localhost:3000/students?name={NAME}"

//post
curl -X POST "http://localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"michelebyman@gmail.com", "name":"Miche Byman", "address":{"street":"Marcus", "zipcode":"etett", "city":"Andersson"}}}'

//put
curl -X PUT "http://localhost:3000/students/{id}" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"fgdf.com", "name":"Miche", "address":{"street":"Marcus", "zipcode":"hello", "city":"hello"}}}'

//delete
curl -X DELETE "http://localhost:3000/students/{id}"