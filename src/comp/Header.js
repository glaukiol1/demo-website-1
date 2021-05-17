import '../css/Header.css';

function Header() {
  return (
    <div className="App">
      <header className="header">
            <h3 style={{padding:"5px"}}>Demo Website 1 | <i>Glaukio L</i></h3>
            <div className="btn-holder">
                <button onClick={()=>{window.location.href='#skills'}}>Skills</button>
                <button onClick={()=>{window.location.href='#about'}}>About Me</button>
            </div>
            {window.onscroll=()=>{
                const bio = document.getElementsByClassName('left-bio')[0];
                const socials = document.getElementsByClassName('socials')[0];
                const header = document.getElementsByTagName('header')[0];
                if(window.scrollY<15){
                    bio.style.display = 'block'
                    header.style.backgroundColor = 'transparent'
                    socials.style.backgroundColor = 'rgba(0,0,0,0.3)'
                } else {
                    if(window.scrollY>100) {
                        header.style.backgroundColor = 'rgba(0,0,0,0.3)'
                        socials.style.backgroundColor = 'transparent'
                        bio.style.display = 'none'
                    }
                }
            }}
      </header>
    </div>
  );
}

export default Header;