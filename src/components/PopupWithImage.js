import Popup from './Popup.js';
//гибридный элемент - всплывающее окно с картинкой ===========================
function PopupWithImage(props) {

 return (
    <Popup
      opened={props.opened}
      type='image'
      onClose={props.onClose}
    >
      <img
        className="popup__image"
        src={`${props.selectedCard.link}`}
        alt={`Фото: ${props.selectedCard.name}`}
      // onWheel={props.onScale}
      // onClick={props.onClose}
      />
      <figcaption className="popup__image-caption">{props.selectedCard.name}</figcaption>

    </Popup>
  );
};

export default PopupWithImage;