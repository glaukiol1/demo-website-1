import '../css/Header.css';

function Home() {
  return (
    <div className="App">
      <header className="header">
            <h3>Demo Website 1</h3>
            <div className="btn-holder">
                <button onClick={()=>{window.location.href='/demo-website-1'}}>Home</button>
                <button onClick={()=>{window.location.href='demo-website-1/about'}}>About Me</button>
            </div>
      </header>
    </div>
  );
}

export default Home;