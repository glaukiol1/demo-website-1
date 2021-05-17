import '../css/Header.css';

function Header() {
  return (
    <div className="App">
      <header className="header">
            <h3 style={{padding:"5px"}}>Demo Website 1 | <i>Glaukio L</i></h3>
            <div className="btn-holder">
                <button onClick={()=>{window.location.href='/demo-website-1'}}>Home</button>
                <button onClick={()=>{window.location.href='demo-website-1/about'}}>About Me</button>
            </div>
      </header>
    </div>
  );
}

export default Header;