import FormContent from './FormContent.js';

//гибридный элемент - страница входа
function Login(props) {

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

  //------------------------------------------------------------------------

  //промежуточная функция отправки данных
  function handleSubmit(event) {
    event.preventDefault();
    props.onChangeBtnText('Вход...');
    props.onSubmit(props.email, props.pwd);
  };

  return (
    //секция с формой входа ===============================================
    <>

      <form className="form form__theme-dark" name="loginForm" onSubmit={handleSubmit} noValidate>
        <h2 className="form__title form__title_theme-dark">Вход</h2>

        {/* сюда поступает содержание формы */}
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
          <p className="form__text"></p>
          <p className="form__link"></p>
        </div>

      </form>

    </>
  );

};

export default Login;