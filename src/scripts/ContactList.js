// component that displays all contacts. It should import the
// Contact component and the ContactCollection component.


import contactInfo from "./Contact"
import contactData from "./ContactCollection"

let getContactList = () => {

let counter = 0

contactData.getContacts().then((response) => {

  // let Alfonso = response[0]

  // let Noah = response[1]


  // return console.log(Alfonso.name)

  for (let i = 0; i < response.length; i++) {

    let object = response[i]

    $("#container").append(`<div id="contact_${object.id}"><h2>${object.name}
    ${object.last_name}</h2>
    <section id="dropInfo_${object.id}" class='hidden'><p>Email: ${object.email}</p>
    <p>Address: ${object.address}</p>
    <p>Age: ${object.age} years old</p>
    <p>Phone: ${object.phone}</p></section>
    <button class="contactInfo" id="infoButton_${object.id}">Contact Information</button></div>`)

    counter++
  }


  return

})
return
}
export default getContactList