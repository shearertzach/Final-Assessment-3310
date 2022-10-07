// source
function formatPhone(phoneNumber) {
  var cleanPhoneNumber = ("" + phoneNumber).replace(/\D/g, "");
  var formattedNumber = cleanPhoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (formattedNumber)
    return ("(" +
      formattedNumber[1] +
      ") " +
      formattedNumber[2] +
      "-" +
      formattedNumber[3]);
  return "Could not format phone number. Please enter a correct phone number.";
}

module.exports.formatPhone = formatPhone;
