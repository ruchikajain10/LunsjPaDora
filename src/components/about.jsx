import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
          <div className="col-xs-12">
            <div className="about-text">
              <h2>Why Lunsj Pa Dora?</h2>
              
              <h3>A healthier happier meal while you work</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
               <button class="button">Our Story </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
