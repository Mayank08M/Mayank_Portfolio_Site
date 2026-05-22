import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Minglar",
    link: "https://minglargroup.com",
    category: "A new age experiential travel app | 2026",
    highlights: [
      "A travel app that offers personalized itineraries, real-time updates, and immersive experiences for modern travelers.",
      "Implemented user booking management, activity listing and tracking, dynamic itinerary creation, role based access control, and secure payment processing.",
      "Designed and developed RESTful APIs with serverless architecture.",
    ],
    tools: "Nodejs, NestJS, React.js, Flutter, PostgresSql, Serverless, AWS",
    image: "/images/minglar_landing_page.png",
  },
  {
    title: "Tanami Capital",
    link: "https://tanamicapital.com",
    category: "Private Equity Investment Platform | 2025",
    highlights: [
      "Investment platform for private equity firms, streamlining deal sourcing, due diligence, and portfolio management.",
      "Implemented secure user authentication, role-based access control, and data encryption to protect sensitive financial information.",
      "Designed and developed RESTful APIs for seamless integration with third-party financial data providers and internal services.",
    ],
    tools: "Nodejs, NestJS, React.js, Mysql, MVC Architecture, AWS",
    image: "/images/TanamiLandingPage.png",
  },
  {
    title: "Ran-Out-Off",
    link: "https://ranoutof.com",
    category: "Smart Grocery Management App | 2025",
    highlights: [
      "Tracks groceries with red, yellow, and green status indicators, shared lists, expiry timers, and recently used products.",
      "Integrated email and SMS alerts for low-stock or expiring items. Push notifications for real-time updates on shared lists and product status changes.",
      "Processed and ingested 22,000+ products asynchronously with RabbitMQ. ",
    ],
    tools:
      "TypeScript, NestJS, Docker, PostgreSQL, PM2, AWS, Node.js, OneSignal API, RabbitMQ",
    image: "/images/ranoutofflandingpage.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-title-link"
                          >
                            {project.title}
                          </a>
                        </h4>
                        <p className="carousel-category">{project.category}</p>
                        {project.highlights && (
                          <ul className="carousel-highlights">
                            {project.highlights.map((highlight) => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
