// Подножие сайта ====================================
function Footer() {
  //получение значения года
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;{year}  Mesto Russia</p>
    </footer>
  );
};

export default Footer;