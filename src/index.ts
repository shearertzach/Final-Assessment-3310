// source

function formatPhone(phoneNumber: string): string {
  const cleanPhoneNumber = ("" + phoneNumber).replace(/\D/g, "");
  const formattedNumber = cleanPhoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (formattedNumber)
    return (
      "(" +
      formattedNumber[1] +
      ") " +
      formattedNumber[2] +
      "-" +
      formattedNumber[3]
    );

  return "Could not format phone number. Please enter a correct phone number.";
}

module.exports.formatPhone = formatPhone;
