# APIU1JanJoh

//get 
curl -X GET "http://localhost:3000/students"

//post
curl -X POST "http://localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"michelebyman@gmail.com", "name":"Miche"}, "address":{"street":"Marcus", "zipcode":"etett", "city":"Andersson"}}'

//put

curl -X PUT "http://localhost:3000/students/5ced0422559a1d0634b94479" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"michelebyman@gmail.com", "name":"Miche", "address":{"street":"Marcus", "zipcode":"etett", "city":"Andersson"}}}'

//delete
curl -X DELETE "http://localhost:3000/students/5ced03e0559a1d0634b94478"