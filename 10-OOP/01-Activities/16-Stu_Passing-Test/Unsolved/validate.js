// class Validate {}

// Validate.prototype.isPassword = (password) => {
//   // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
//   // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
// };

// module.exports = Validate;




class Validate {
  isPassword(password) {
    // Check if the password is less than 8 characters
    if (password.length < 8) {
      return false;
    }

    // Check if the password contains at least 1 uppercase, 1 lowercase, and 1 number
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasUppercase && hasLowercase && hasNumber;
  }
}

module.exports = Validate;
