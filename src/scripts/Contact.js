// component that displays a person's name, phone number, and address.

import contactData from "./ContactCollection"

let contactInfo = $(document).on("click", ".contactInfo", function() {

    var id_number = this.id.split('infoButton_')[1]

    $("#dropInfo_" + id_number).slideToggle()

    $("#dropInfo_" + id_number).toggleClass('hidden');
  });


export default contactInfo