import '../css/Header.css';
import '../css/Header.mobile.css'

function Header() {
  return (
    <div className="App">
      <header className="header">
            <h3 className="desktopOnly" style={{padding:"5px"}}>Demo Website 1 | <i>Glaukio L</i></h3>
            <h3 className="mobileOnly" style={{padding:"5px", display: 'none'}}>Demo Website 1 <br /><i>Glaukio L</i></h3>
            <div className="btn-holder">
                <button id="toskills" onClick={()=>{window.location.href='#skills'}}>Skills</button>
                <button id="toabout" onClick={()=>{window.location.href='#hireme'}}>Hire Me</button>
            </div>
            {
                window.onscroll=()=>{
                    const bio = document.getElementsByClassName('left-bio')[0];
                    // const bioMobile = document.getElementsByClassName('center-bio')[0];
                    // const socials = document.getElementsByClassName('socials')[0];
                    // const header = document.getElementsByTagName('header')[0];
                    const download_cv = document.getElementById('download-cv');
                    const down_arrw = document.getElementsByClassName('down-arrw')[0];
                    if(window.scrollY<15){
                        bio.style.display = 'block'
                        // bioMobile.style.display = 'block !important'
                        download_cv.style.display = 'block'
                        down_arrw.style.display = 'inline'
                    } else {
                        if(window.scrollY>100) {
                            bio.style.display = 'none'
                            // bioMobile.style.display = 'none !important'
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