import React from 'react';
import Popup from './Popup.js';
import successIcon from '../images/reg-success.svg';
import failureIcon from '../images/reg-failure.svg';

//гибридный элемент - всплывающее окно с сообщением о регистрации 
function InfoTooltip(props) {
	return (
		<Popup
			opened={props.opened}
			type='reginfo'
			onClose={props.onClose}
		>
			<form className="form">
			
				<img
					className="info__icon"
					src={props.success ? successIcon : failureIcon}
					alt={props.success ? 'Галочка' : 'Крестик'}
				/>
				<p className="info__text">{props.success ? 'Вы успешно зарегистрировались !' : 'Что-то пошло не так ! Пропробуйте ещё раз.'}</p>
			
			</form>

		</Popup>
	)
};

export default InfoTooltip;