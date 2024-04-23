import { useState, useEffect } from 'react';
//гибридный компонент Popup для обертки любых попапов
function Popup(props) {

	useEffect(() => {
		// установка и удаление обработчика в `clean-up` функции
		if (props.opened) {
			document.body.style.overflowY = 'hidden';
			/*document.body.style.touchAction = 'none';*/
			document.addEventListener('keydown', handleEscapeClick);
			return function () { document.removeEventListener('keydown', handleEscapeClick) };
		}
		//обработка нажатия на Escape
		function handleEscapeClick(event) {
			if (event.key === 'Escape') {
				document.body.style.overflowY = 'initial';
				props.onClose();
			}
		}
	}, [props.opened, props]);


	// обработка нажатия на оверлей
	function handleOverlayClick(event) {
		if (event.target === event.currentTarget) {
			document.body.style.overflowY = 'initial';
			props.onClose();
		}
	}
	// обработка нажатия на кнопку закрыть
	function handleButtonClick(event) {
		document.body.style.overflowY = 'initial';
		props.onClose();
	}

	// обработка прокрутки
	const step = .09;

	/*let scale = 1;*/
	// В чём разница, использовать let scale = 1 и потом это значение менять, или 
	// использовать стейт ?

	const [scale, setScale] = useState(1);

	function onScale(event) {
		const elem = event.currentTarget;
		if (event.deltaY < 0 && `${props.type}` === 'image') {
			setScale(scale + step);
			elem.style.scale = scale;
			return;
		}
		if (event.deltaY > 0 && scale > .75 && `${props.type}` === 'image') {
			setScale(scale - step);
			elem.style.scale = scale;
			return;
		}
	}

	return (
		<div className={`popup popup_type_${props.type} ${props.opened && 'popup_opened'}`} onClick={handleOverlayClick}>

			<div className={`popup__container ${props.opened && 'popup__container_zoomed'}`} onWheel={onScale} >

				<button
					className="popup__close-button"
					type="button"
					aria-label="кнопка Закрыть"
					onClick={handleButtonClick}
				>
				</button>

				{/* сюда загружается содержание любого попапа */}
				{props.children}

			</div>

		</div>
	);
};

export default Popup;