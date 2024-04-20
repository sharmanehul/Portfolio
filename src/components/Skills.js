import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import HtmlCss from "../assets/img/HtmlCss.png";
import Javascript from "../assets/img/javascript.png";
import MongoDb from "../assets/img/Mongodb.png";
import ExpressJs from "../assets/img/Expressjs.png";
import NodeJs from "../assets/img/nodejs.png";
import Reactjs from "../assets/img/Reactjs.png";
import Java from "../assets/img/Java.png"
import C from "../assets/img/C++.png";
import Postman from "../assets/img/MongodbAtlas.png";
import MySql from "../assets/img/MySql.png";
import Git from "../assets/img/git.png";
import Github from "../assets/img/Github.png";
import Docker from "../assets/img/Docker.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={HtmlCss} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Javascript} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={MongoDb} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={ExpressJs} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={NodeJs} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Reactjs} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={C} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Postman} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Github} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Git} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={MySql} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Docker} alt="Image" />
                            </div>
                          </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
