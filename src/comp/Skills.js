import '../css/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="left-bio">
        <h2>Hello!</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis nulla sed imperdiet vulputate. Mauris semper euismod tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc dignissim fringilla semper. Aenean nunc neque, hendrerit sit amet aliquam efficitur, posuere non tortor. Nullam cursus mattis diam ac vehicula. Etiam at ultricies nulla. Proin at rhoncus orci. Morbi molestie nisi volutpat dignissim iaculis. Morbi felis ipsum, sodales eget vulputate sed, faucibus eu felis. </p>
      </div>
      <div className="socials">
        <h4 style={{display: 'inline-block', padding: '0', margin: '0'}}>Socials</h4>
        <i className="fab fa-github"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fas fa-envelope"></i>
        <i class="fab fa-stack-overflow"></i>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-medium-m"></i>
      </div>
      <i class="fas fa-arrow-alt-circle-down down-arrw"></i>
    </div>
  );
}

export default Home;
