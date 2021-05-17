import '../css/Footer.css';

function Footer() {
  return (
    <footer>
        <p className="float_left">
            This is a demo website, to demonstrate my web development skills,<br /> you can order this in fiverr
        </p>
        <p className="float_right">
            If you like this website, you can order your custom one on fiverr!
        </p>
        <h4 className="float_right" style={{width: '100%', textAlign: 'center'}}> &copy; <a style={{textDecoration: 'none'}} href="https://github.com/glaukiol1">Glaukio L</a></h4>
        <h3 className="float_right" style={{width: '100%', textAlign: 'center'}}>console.log("Goodbye world!")</h3>
    </footer>
  );
}

export default Footer;