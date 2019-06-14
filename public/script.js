
function getUserInfo() {
 const input = document.getElementById("userName").value;
 const url = "/api/showprofile/" + input;
 axios.get(url)
   .then(response => {
     document.getElementById("userInfo").innerHTML = JSON.stringify(response.data);
   })
}


function handleSubmit() {
 const userName = document.getElementById("user-name").value;
 const userId = document.getElementById("user-id").value;
 const message = document.getElementById("message").value;
 console.log(userName, userId, message);
  const payload = {
   username: userName,
   id: userId,
   message
 }
 axios.post("/api/", payload)
   .then(response => {
     console.log(response)
   })

}
function getAllUsers() {
 axios.get("/api/getallusers/")
   .then(response => {
     document.getElementById("result").innerHTML = JSON.stringify(response.data)
   })
}

