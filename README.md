## ReadMe


### To start the API, in APIU1JanJoh run:
    - npm install
    - npm start

*Note: Always start the API first before the frontend.*

### To start React, in APIU1JanJoh/frontend run:
    - npm install
    - npm start

*Note: When asked the question "Something is already running on port 3000.*
*Would you like to run the app on another port instead? (Y/n)"*

*Choose Yes.*

**GET request**

    curl -X GET "http://localhost:3000/students"

**GET request by query**
    
    curl -X GET "http://localhost:3000/students?name={NAME}" 

**GET request by id**
    
    curl -X GET "http://localhost:3000/students/{id}" 

**POST request**
    
    curl -X POST "http://localhost:3000/students" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"michelebyman@gmail.com", "name":"Miche Byman", "address":{"street":"Marcus", "zipcode":"etett", "city":"Andersson"}}}'

**PUT request**

    curl -X PUT "http://localhost:3000/students/{id}" -H "accept: application/json" -H "Content-Type: application/json" -d '{"student":{"email":"fgdf.com", "name":"Miche", "address":{"street":"Marcus", "zipcode":"hello", "city":"hello"}}}'

**DELETE request**

    curl -X DELETE "http://localhost:3000/students/{id}"


## Theory Questions

**1a. How is the HTTP protocol used when browsing a web page?** 

>Whenever a browser requests a page, a HTTP protocol is sent (GET), and the corresponding web server responds with HTTP.

**1b. Describe which method, path, URI, response code and body are submitted and answered. Example, use http://www.smp.se/kultur-noje/ as an example.**

    - Request Method: GET
    - Path: /kultur-noje/
    - URI: http://www.smp.se/kultur-noje/
    - Response/Status Code: 200 OK
    - Body: The website itself.

**2. Describe the most common methods of the HTTP protocol and what they do.**

>**Get**: Requests data from the source. Example, sending a GET request to https://jsonplaceholder.typicode.com/users would fetch all the users from the API.

>**Post**: Sends new data to the source. Example, sending a POST request to https://jsonplaceholder.typicode.com/users would add a new user to the API.

>**Put**: Updates source data, replaces all fields. Example, sending a PUT request to https://jsonplaceholder.typicode.com/users/1 would update all the data for the user "Leanne Graham". 

>**Patch**: Updates source data, but only what was changed. Example, sending a PATCH request to https://jsonplaceholder.typicode.com/users/1 and only changing the "name" would update only the "name" for the user "Leanne Graham". 

>**Delete**: Deletes data from the source. Example, sending a DELETE request to https://jsonplaceholder.typicode.com/users/1 would delete the user "Leanne Graham" from the API.

**3. "http://localhost:3000/users?username=something" is a URI. Describe what parts it consists of and what they are called.**

    - Scheme: http
    - Authority: //localhost:3000
    - Path: /users
    - Query: ?username=something

**4. In what three ways can you submit parameters in an HTTP request? Give examples with curl.**

    - Path: curl -X GET "http://localhost:3000/students/5cece29f0cef6b4c8e00dbf5"
    - Query: curl -X GET "http://localhost:3000/students?name=value"
    - Header: curl -X GET "http://localhost:3000/students" -H "key: value"

## Feedback

>**Course's pace:** I found the course's pace perfect for me. Not too fast, not too slow. Pretty lagom.

>**Course material:** Really good use of slides, theory, and the examples are really good.

>**Format:** I really like the format of the class too. The mix of individual exercises and group exercises are pretty fun. I learned a lot from my group (like restarting my dev server after a change!), and the first inlämningsuppgift wasn't too hard. Still nervous of that test we have coming up though!