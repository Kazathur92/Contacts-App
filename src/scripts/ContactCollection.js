//fetch to database.json then
let contactData =
{
  getContacts: () => {
    return fetch("http://localhost:8088/contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(function (response) {
        return response.json()
      })
      // .then(function (json) {
      //   return (JSON.stringify(json))
      // })

  },
  postContact: (newContact) => {
    console.log('newContact', newContact)
    fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
    .then(function (response) {
      console.log(response)
      //return response2.json()
    })
  }
}

export default contactData