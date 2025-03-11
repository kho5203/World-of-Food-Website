import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to The World of Food!</h1>
        <p>Discover delicious recipes from around the world!</p>
      </div>
      <div className="food-image">
        <img
          src="https://tenor.com/view/anime-food-ramen-hot-gif-17124843.gif"
          alt="ramenBowl"
        />
      </div>
    </div>
  );
}

export default Home;
