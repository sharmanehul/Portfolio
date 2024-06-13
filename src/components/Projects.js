import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Camps And Pegs",
      description: "Built a web application where user can create/visit new campgrounds,see reviews and ratings.Implemented custom user authentication for adding  editing, deleting comments, campgrounds and more.",
      imgUrl: projImg1,
    },
    {
      title: "Say And Tell",
      description: "Designed a secure, scalable, and easy-to-maintain blog application. Developed features for user registration, login, profile image upload via Cloudinary, and profile updates,Implementing user authentication and authorization to ensure only authorized users can edit or delete posts.",
      imgUrl: projImg2,
    },
    {
      title: "Sustainify-Ewaste Collector",
      description: "The Sustainify E-Waste Collector is an innovative solution designed to help households and businesses responsibly manage their electronic waste. As the volume of electronic devices grows exponentially, proper disposal and recycling become critical to reducing environmental impact. The Sustainify E-Waste Collector offers a user-friendly, efficient, and eco-friendly way to dispose of your obsolete or broken electronics.",
      imgUrl: projImg4,
    },
    {
      title: "BudPing",
      description: " A realtime chat application built for sending and receiving real time messages.Integrated WebSocket for instant message delivery and real-time communication.",
      imgUrl: projImg3,
    },
  ];

  return (
     <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
    </section>
  )
}
