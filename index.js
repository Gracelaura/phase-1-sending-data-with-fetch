// Add your code here
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        name: userName,
        email : userEmail
      }
    )})
    .then(response => response.json())
    .then(data => {document.querySelector("form").append(data)})
    .catch(error => {
        alert(`error`);
        console.log(error.message);
        document.querySelector("form").append(error.message)
    })
  }