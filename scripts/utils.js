export const validateEmail = (email) => {
  //eslint-disable-next-line
  var re =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let testEmail = re.test(String(email).toLowerCase());
  return testEmail;
};
