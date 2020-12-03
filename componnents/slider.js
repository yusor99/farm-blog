const Slider = () => {
  return (
    <>
      <section className="home-cover">
        <img src="/img/cover.png" alt="cover" />
        <div className="overlay">
          <div className="container">
            <section className="head">
              <small style={{ color: "gray", fontWeight: 600 }}>
                AGRICULTURE FOR EVERYONE
              </small>
              <p className="des">
                An online agricultural platform aimed at teaching best
                agricultural practices to farmers everywhere.
              </p>
              <div>
                <button className="login-btn">Sign Up</button>
                <button className="play-btn">play Watch our tutorials</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
export default Slider;
