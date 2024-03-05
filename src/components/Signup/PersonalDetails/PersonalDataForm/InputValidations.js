// Example validation functions
const nameValidation = (value) => {
  // Add your validation logic for name here
  return value.trim() !== "" && /^[a-zA-Z]+$/.test(value); // Example: Not empty and contains only alphabets
};

const mobileNumberValidation = (value) => {
  // Add your validation logic for mobile number here
  return value.trim() !== "" && /^\d{10}$/.test(value); // Example: Not empty and exactly 10 digits
};

const emailValidation = (value) => {
  // Add your validation logic for email here
  return value.trim() !== "" && /^\S+@\S+\.\S+$/.test(value); // Example: Not empty and follows email format
};

const aadhaarValidation = (value) => {
  // Add your validation logic for Aadhaar number here
  return value.trim() !== "" && /^\d{12}$/.test(value); // Example: Not empty and exactly 12 digits
};

const passwordValidation = (value) => {
  // Add your validation logic for password here
  return value.length >= 8; // Example: Password must be at least 8 characters long
};

const confirmPasswordValidation = (value, passwordValue) => {
  // Add your validation logic for confirm password here
  return value === passwordValue; // Example: Confirm password must match the original password
};

const addressValidation = (value) => {
  // Add your validation logic for address here
  return value.trim() !== ""; // Example: Address must not be empty
};

const DOBValidation = (value) => {
  console.log("DOb", value);
  return value.toString().trim() !== "";
};

// Add more validation functions as needed

export {
  nameValidation,
  mobileNumberValidation,
  emailValidation,
  aadhaarValidation,
  passwordValidation,
  confirmPasswordValidation,
  addressValidation,
  DOBValidation,
};
