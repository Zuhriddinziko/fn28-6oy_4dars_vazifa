import john from "../assets/John.png";
function Home() {
  return (
    <>
      <div className="headers">
        <div className="home countiner">
          <div className="main">
            <h2 className="creativ">Hi, I am John, Creative Technologist</h2>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="btn">Download Resume</button>
          </div>
          <img className="person" src="./John.png" alt="image_person" />
        </div>
        <div className="making">
          <div className=" making__countiner">
            <div className="system">
              <div className="post countiner">
                <b>Recent posts</b>
                <b href="#">View all</b>
              </div>
              <div className="patFig countiner">
                <div className="patter">
                  <h4 className="from">Making a design system from scratch</h4>
                  <div className="year">
                    <p className="years">12 Feb 2020</p>
                    <p>Design, Pattern</p>
                  </div>
                  <p className="text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="patter figma">
                  <h4 className="from">
                    Creating pixel perfect icons in Figma
                  </h4>
                  <div className="year">
                    <p className="years">12 Feb 2020</p>
                    <p>Figma, Icon Design</p>
                  </div>
                  <p className="text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
            <div className="featured countiner">
              <h3 className="workss">Featured works</h3>
              <div className="dash">
                <img src="./desin.png" alt="desig" />
                <div>
                  <h3 className="from name">Designing Dashboards</h3>
                  <div className="bord">
                    <p className="yil">2020</p>
                    <p className="beg">Dashboard</p>
                  </div>
                  <p className="text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="dash dash1">
                <img src="./girl.png" alt="desig" />
                <div>
                  <h3 className="from name"> Vibrant Portraits of 2020</h3>
                  <div className="bord">
                    <p className="yil">2018</p>
                    <p className="beg">Illustration</p>
                  </div>
                  <p className="text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="dash dash2">
                <img src="./aaa.png" alt="desig" />
                <div>
                  <h3 className="from name">36 Days of Malayalam type</h3>
                  <div className="bord">
                    <p className="yil">2018</p>
                    <p className="beg">Typography</p>
                  </div>
                  <p className="text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
