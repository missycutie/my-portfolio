import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.jpeg";
import IMG3 from "../../assets/img3.jpeg";
import IMG4 from "../../assets/img4.jpeg";
import IMG5 from "../../assets/img5.jpeg";
import IMG6 from "../../assets/img6.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cutie 1",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Cutie 2",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Cutie 3",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Cutie 4",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Cutie 5",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Cutie 6",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((item) => {
          return(
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title}></img>
            </div>

            <h3>{item.title}</h3>
            <div className="portfolio___item-cta">
              <a href={item.github} className="btn" target="_blank">
                Github
              </a>
              <a href={item.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>)
        })}
      </div>
    </section>
  );
};

export default Portfolio;
