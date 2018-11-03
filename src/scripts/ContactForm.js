// component that, when filled out and a submit button is pressed,
// adds a new contact to storage. It should import the
// ContactCollection component.

import contactData from "./ContactCollection"

// let postContactList = contactData.postContact().then((response2) => {
// console.log(response2)


// })

let postNewContact = function addNewContact() {

  $(document).on("click", ".saveContact", function() {

    console.log(".saveContact")

    let newContact = $(".journal")

    contactData.postContact().then(newContact)
  });
}






// export default ContactForm "./main.js"

// let meetUpsEvent = (data) => {
//   return fetch("http://localhost:8088/itinerary/1", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
// }

// function finalItineraryListenerEvent() {
//   let finalSaveButton = document.querySelector(".finalButton")
//   finalSaveButton.addEventListener("click", () => {
//     console.log("click")
//     let itineraryObject = {
//       park: document.querySelector("#parkItinerary").innerText,
//       food: document.querySelector("#foodItinerary").innerText,
//       event: document.querySelector("#meetUpsItinerary").innerText,
//       concert: document.querySelector("#concertItinerary").innerText
//     }
//     meetUpsEvent(itineraryObject)
//   })
// }

// finalItineraryListenerEvent()

export default postNewContact
