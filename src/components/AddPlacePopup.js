import { useEffect } from 'react';
import useFormValidation from '../hooks/FormValidator.js';
import PopupWithForm from './PopupWithForm.js';

//гибридный элемент - всплывающее окно добавления контента
function CardAddPopup(props) {

	// объявление данных в глобальной области
	const { valid, values, errorSpans, handleChangeValue, resetForm } = useFormValidation({ cardName: '', cardLink: '' }, false, {});

	const { cardName, cardLink } = values;


	//промежуточная функция отправки данных карточки
	function handleSubmit(event) {
		event.preventDefault();
		props.onChangeBtnText('Сохранение...');
		props.onSubmit(cardName, cardLink);
	};

	// функция очистки формы после успешной отправки данных
	useEffect(() => {
		resetForm();
	}, [props.reset])

	return (
		<PopupWithForm
			type='card'
			formTitle='Новое место'
			btnText={props.btnText}
			btnDisabled={!valid}
			opened={props.opened}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			{/* == ядро с формой добавления контента ===============================*/}
			<div className="form__input-group">
				<input
					className={`form__input form__input_type_cardname ${errorSpans.cardNameError && 'form__input_type_error'}`}
					type="text"
					placeholder="Название"
					name="cardName"
					minLength="2"
					maxLength="30"
					value={cardName}
					onChange={handleChangeValue}
					autoComplete="on"
					autoFocus
					required
				/>
				</div>
				<span className="form__error-message" id="cardName-error">{errorSpans.cardNameError}</span>
			
			<div className="form__input-group">
			<input
				className={`form__input form__input_type_cardlink ${errorSpans.cardLinkError && 'form__input_type_error'}`}
				type="url"
				placeholder="Ссылка на картинку"
				name="cardLink"
				value={cardLink}
				onChange={handleChangeValue}
				autoComplete="on"
				required
			/>
		</div>
			<span className="form__error-message" id="cardLink-error">{errorSpans.cardLinkError}</span>
		
		</PopupWithForm>
	);
};

export default CardAddPopup;