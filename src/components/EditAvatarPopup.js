import React, { useEffect } from 'react';
import useFormValidation from '../hooks/FormValidator.js';
import PopupWithForm from './PopupWithForm.js';

//гибридный элемент - всплывающее окно смены аватара
function AvatarEditPopup(props) {

	const { valid, errorSpans, handleChangeValue, resetForm } = useFormValidation({ avatarlink: '' }, false, {})

	//задание рефа
	const avatarLink = React.useRef('');

	//промежуточная функция отправки ссылки
	function handleSubmit(event) {
		event.preventDefault();
		props.onChangeBtnText('Сохранение...');
		props.onSubmit(avatarLink.current.value);
	}

	//функция очистки формы после успешной отправки данных
	useEffect(() => {
		avatarLink.current.value = '';
		resetForm();
}, [props.reset])

	return (
		<PopupWithForm
			type='avatar'
			formTitle='Обновить аватар'
			btnText={props.btnText}
			btnDisabled={!valid}
			opened={props.opened}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			{/* == ядро с формой смены аватара ===================================*/}
			<input
				className={`form__input form__input_type_avatarlink ${errorSpans.avatarLinkError &&'form__input_type_error'}`}
				type="url"
				placeholder="Ссылка на аватар"
				name="avatarLink"
				onChange={handleChangeValue}
				ref={avatarLink}
				autoFocus
				required
			/>
			<span className="form__error-message" id="avatarLink-error">{errorSpans.avatarLinkError}</span>
		</PopupWithForm>
	);
};

export default AvatarEditPopup;