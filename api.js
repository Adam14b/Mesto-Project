const myHeaders = new Headers();
myHeaders.append("authorization", "e1ed57ff-779c-48f1-9530-b8dff13e46b9");



functionMe(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}


const urlencoded = new URLSearchParams();

funcCards(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("https://mesto.nomoreparties.co/v1/wff-cohort-1/cards?_id=be23c6910b1b927ebfd495da", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "e1ed57ff-779c-48f1-9530-b8dff13e46b9");

const raw = JSON.stringify({
  "name": "Andropov",
  "about": "The best"
});

funcPatch(){
const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/wff-cohort-1/users/me?Content-Type=application/json", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "e1ed57ff-779c-48f1-9530-b8dff13e46b9");


funcPost(){
const raw = JSON.stringify({
  "likes": [],
  "_id": "5d1f0611d321eb4bdcd707dd",
  "name": "Байкал",
  "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  "owner": {
    "name": "Jacques Cousteau",
    "about": "Sailor, researcher",
    "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    "_id": "ef5f7423f7f5e22bef4ad607",
    "cohort": "local"
  },
  "createdAt": "2019-07-05T08:10:57.741Z"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://mesto.nomoreparties.co/v1/wff-cohort-1/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  }