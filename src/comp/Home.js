import '../css/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="left-bio">
        <h2 style={{margin: '1px'}}>Glaukio L</h2>
        <p style={{color: 'lightgray'}}>Web Developer</p>
        <hr />
        <p>Description here*<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis nulla sed imperdiet vulputate. Mauris semper euismod tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc dignissim fringilla semper. Aenean nunc neque, hendrerit sit amet aliquam efficitur, posuere non tortor. Nullam cursus mattis diam ac vehicula. Etiam at ultricies nulla. Proin at rhoncus orci. Morbi molestie nisi volutpat dignissim iaculis. Morbi felis ipsum, sodales eget vulputate sed, faucibus eu felis. </p>
      </div>
      <button id="download-cv">
        <a href="/#" style={{textDecoration: 'none'}}>
          Download My CV
        </a>
      </button>
      <div className="socials">
        <h4 style={{display: 'inline-block', padding: '0', margin: '0'}}>Socials</h4>
        <i className="fab fa-github"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fas fa-envelope"></i>
        <i className="fab fa-stack-overflow"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-medium-m"></i>
      </div>
      <i className="fas fa-arrow-alt-circle-down down-arrw"></i>
    </div>
  );
}

export default Home;
