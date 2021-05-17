import '../css/Header.css';

function Header() {
  return (
    <div className="App">
      <header className="header">
            <h3 style={{padding:"5px"}}>Demo Website 1 | <i>Glaukio L</i></h3>
            <div className="btn-holder">
                <button id="toskills" onClick={()=>{window.location.href='#skills'}}>Skills</button>
                <button id="toabout" onClick={()=>{window.location.href='#hireme'}}>Hire Me</button>
            </div>
            {
                window.onscroll=()=>{
                    const bio = document.getElementsByClassName('left-bio')[0];
                    const socials = document.getElementsByClassName('socials')[0];
                    const header = document.getElementsByTagName('header')[0];
                    const download_cv = document.getElementById('download-cv');
                    const down_arrw = document.getElementsByClassName('down-arrw')[0];
                    if(window.scrollY<15){
                        bio.style.display = 'block'
                        header.style.backgroundColor = 'transparent'
                        socials.style.backgroundColor = 'rgba(0,0,0,0.1)'
                        download_cv.style.display = 'block'
                        down_arrw.style.display = 'inline'
                    } else {
                        if(window.scrollY>100) {
                            header.style.backgroundColor = 'rgba(0,0,0,0.3)'
                            socials.style.backgroundColor = 'transparent'
                            bio.style.display = 'none'
                            download_cv.style.display = 'none'
                            down_arrw.style.display = 'none'
                        }
                    }
                }
            }
      </header>
    </div>
  );
}

export default Header;