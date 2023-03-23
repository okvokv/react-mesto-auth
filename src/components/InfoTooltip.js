import React from 'react';
import successIcon from '../images/reg-success.svg';
import failureIcon from '../images/reg-failure.svg';

//гибридный элемент - всплывающее окно с сообщением о регистрации 
function InfoTooltip(props) {
	return (

		<div className={`popup popup_type_reginfo ${props.opened && 'popup_opened'}`}>
			<div className="popup__container">

				<button
					className="popup__close-button"
					type="button"
					aria-label="кнопка Закрыть"
					onClick={props.onClose}>
				</button>
				<img
					className="form__reg-icon"
					src={props.success ? successIcon : failureIcon}
					alt={props.success ? 'Галочка' : 'Крестик'}
				/>

				<p className="form__reg-message">{props.success ? 'Вы успешно зарегистрировались !' : 'Что-то пошло не так ! Пропробуйте ещё раз.'}</p>

			</div>
		</div>

	)
}

export default InfoTooltip;