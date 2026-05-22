import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Website Developers India Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built 3+ complete applications from scratch. Worked on Node.js,
              Nest JS, Serverless architecture, and AWS services. Developed REST
              APIs, microservices, and database designs for various projects.
              Managed team of 5-7 developers, providing technical guidance and
              code reviews. Handling client interactions, requirement gathering,
              and project management for multiple concurrent projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Wow Rooms Hospitality Pvt Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Made significant contributions to the development of backend
              services and APIs for the hotel booking application. Worked on
              booking reservation systems, payment gateway integrations, and
              database management. Collaborated with frontend developers to
              ensure seamless integration of backend services with the user
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
