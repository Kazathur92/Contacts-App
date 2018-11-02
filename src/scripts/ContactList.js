// component that displays all contacts. It should import the
// Contact component and the ContactCollection component.

// import contactData from "./ContactCollection"
import hoot from "./Contact"
import contactData from "./ContactCollection"

let counter = 0

let woop = contactData.getContacts().then((response) => {

  // let Alfonso = response[0]

  // let Noah = response[1]


  // return console.log(Alfonso.name)

  for (let i = 0; i < response.length; i++) {

    let object = response[i]

    $("#container").append(`<h2>${object.name}
    ${object.last_name}</h2><button id="infoButton_${[i]}">Contact Informations</button>`)

    counter++


    // console.log(objects.name)

    // for (const keys in objects) {
    //   const element = objects[keys]

    //   // console.log(element)

    //   $("#container").append(`<h2>${element}<h2>`)
    // }
  }


  return

})

// console.log(woop)
