// component that, when filled out and a submit button is pressed,
// adds a new contact to storage. It should import the
// ContactCollection component.

import contactData from "./ContactCollection"

// let postContactList = contactData.postContact().then((response2) => {
// console.log(response2)


// })

let postNewContact = function addNewContact() {

  $(document).on("click", ".saveContact", function () {

    $(".message").remove()
    $(".error").remove()
    console.log(".saveContact")




    var valid_fields = []
    // var are_all_fields_valid = true;   *
    $(".journal").map(function (index, current_el) {
      if ($(current_el)[0].value !== '') {
        valid_fields.push(true)
      } else {
        valid_fields.push(false)
      }

      if ($(current_el)[0].value === '') {
        // are_all_fields_valid = false;  *
      }

    }) //map end


    // if (are_all_fields_valid)  *
    if (valid_fields.join(',').includes('false') === false) {
      console.log('TRUE')



      let newContact = {
        name: $(".journal")[0].value,
        last_name: $(".journal")[1].value,
        address: $(".journal")[2].value,
        email: $(".journal")[3].value,
        age: $(".journal")[4].value,
        phone: $(".journal")[5].value
      }


      console.log(newContact)
      contactData.postContact(newContact)

      $(".journal").map(function (index, current_el) { $(".journal")[0].value }) = ""

      $("#error").append(`<div class="message">
      <h3>New contact has been saved, refresh to view on list.</h3>
      </div>`)

    } else {

      $("#error").append(`<div class="error">
      <h3>Cannot save contact, please make sure all fields are filled.</h3>
      </div>`)
      console.log('FALSE')
    }
  }); //click end
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
