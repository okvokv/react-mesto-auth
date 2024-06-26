// форма административной страницы ============================================
import { useState, useEffect } from 'react';
import useFormValidation from '../hooks/FormValidator.js';

// гибридный элемент - поля административной страницы
function FormContent(props) {

	// объявление данных в глобальной области
	const { valid, values, errorSpans, handleChangeValue } = useFormValidation({ email: props.email, pwd: props.pwd }, props.valid, props.errorSpans);

	// объявление состояния видимости
	const [type, setType] = useState("password");

	const { email, pwd } = values;
	const { emailError, pwdError } = errorSpans;

	useEffect(() => {
		props.onEmailChange(email);
	}, [props, email])

	useEffect(() => {
		props.onPwdChange(pwd);
	}, [props, pwd])

	useEffect(() => {
		props.onValidChange(valid);
	}, [props, valid])

	useEffect(() => {
		props.onErrorSpansChange(errorSpans);
	}, [props, errorSpans])

	return (
		<>
			<div className="form__input-group form__input-group_theme-dark">
				<input
					className={`form__input form__input_theme-dark ${emailError && 'form__input_type_error'}`}
					type="email"
					placeholder="Email"
					name="email"
					value={email}
					onChange={handleChangeValue}
					autoComplete="on"
					required
					autoFocus
				/>
			</div>
			<span className="form__error-message" id="email-error">{emailError}</span>

			<div className="form__input-group form__input-group_theme-dark">
				<input
					className={`form__input form__input_theme-dark ${pwdError && 'form__input_type_error'}`}
					type={type}
					placeholder="Пароль"
					name="pwd"
					minLength="8"
					maxLength="100"
					value={pwd}
					onChange={handleChangeValue}
					autoComplete="on"
					required
				/>
				<span className={`form__input-icon_inv ${type === "text" && "form__input-icon_vis"}`} onClick={() => type === "password" ? setType("text") : setType("password")}></span>
			</div>
			<span className="form__error-message" id="pwd-error">{pwdError}</span>

			<button
				className={`form__submit-button form__submit-button_theme-dark ${!valid && 'form__submit-button_disabled form__submit-button_disabled_theme-dark'}`}
				type="submit"
				aria-label="кнопка отправки"
				disabled={!valid}
			>{props.btnText}</button>
		</>
	);
};

export default FormContent;
