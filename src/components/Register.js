import FormContent from './FormContent.js';

//гибридный элемент - страница регистрации
function Register(props) {

  function handleEmailChange(email) {
    props.onEmailChange(email);
  }

  function handlePwdChange(pwd) {
    props.onPwdChange(pwd);
  }

  function handleValidChange(valid) {
    props.onValidChange(valid)
  }

  function handleErrorSpansChange(errorSpans) {
    props.onErrorSpansChange(errorSpans)
  }

  //промежуточная функция отправки данных
  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(props.email, props.pwd);
  };

  //промежуточная функция переключения страницы
  function handleClick() {
    props.onTogglePage()
  };

  return (
    //секция с формой регистрации ======================================== 
    <form className="form form__theme-dark" name="regForm" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title form__title_theme-dark">Регистрация</h2>

      {/* сюда поступает содержание форма */}
      <FormContent
        btnText={props.btnText}
        email={props.email}
        pwd={props.pwd}
        valid={props.valid}
        errorSpans={props.errorSpans}
        onEmailChange={handleEmailChange}
        onPwdChange={handlePwdChange}
        onValidChange={handleValidChange}
        onErrorSpansChange={handleErrorSpansChange}
      />

      <div className="form__caption">
        <p className="form__text">Уже зарегистированы ?</p>
        <p className="form__link" onClick={handleClick}>&nbsp; Войти</p>
      </div>

    </form>
  );
};

export default Register;