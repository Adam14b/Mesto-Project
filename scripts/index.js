// DOM элементы
const profileOpenButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileInfoName = document.querySelector('.profile__title');
const profileInfoAbout = document.querySelector('.profile__description');

const popupProfile = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImg = document.querySelector('.popup_type_image');

const popupProfileForm = document.querySelector('.popup_type_edit .popup__form');
const popupAddForm = document.querySelector('.popup_type_new-card .popup__form');

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_description');
const inputTitle = document.querySelector('.popup__input_type_card-name');
const inputLink = document.querySelector('.popup__input_type_url');

const popupPic = popupImg.querySelector('.popup__image');
const popupCaption = popupImg.querySelector('.popup__caption');

const template = document.querySelector('#card-template');
const listContainer = document.querySelector('.places__list');

// Функции попапов
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
  popup.addEventListener('click', closeByOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
  popup.removeEventListener('click', closeByOverlay);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
}

function closeByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

// Функции карточек
function createCard(item) {
  const cardElement = template.content.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;

  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_is-active');
  });

  cardImage.addEventListener('click', () => {
    popupPic.src = item.link;
    popupPic.alt = item.name;
    popupCaption.textContent = item.name;
    openPopup(popupImg);
  });

  return cardElement;
}

function renderInitialCards() {
  initialCards.forEach(item => {
    const cardElement = createCard(item);
    listContainer.append(cardElement);
  });
}

// Обработчики форм
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = inputName.value;
  profileInfoAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: inputTitle.value,
    link: inputLink.value
  };
  const cardElement = createCard(newCard);
  listContainer.prepend(cardElement);
  popupAddForm.reset();
  closePopup(popupAdd);
}

// Слушатели событий
profileOpenButton.addEventListener('click', () => {
  inputName.value = profileInfoName.textContent;
  inputAbout.value = profileInfoAbout.textContent;
  openPopup(popupProfile);
});

profileAddButton.addEventListener('click', () => {
  popupAddForm.reset();
  openPopup(popupAdd);
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupAddForm.addEventListener('submit', handleAddCardFormSubmit);

// Закрытие попапов по крестику
document.querySelectorAll('.popup__close').forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

// Инициализация
renderInitialCards();