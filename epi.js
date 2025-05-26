const myHeaders = new Headers();
myHeaders.append("authorization", "271d6240-99fa-4c01-a313-62d9c17e953b");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));