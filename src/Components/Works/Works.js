import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSunRain,
  faCirclePlay,
  faEnvelopeCircleCheck,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import "./Works.scss";
const Works = () => {
  return (
    <section className="project-container">
      <h2 className="project-container__title">Projects</h2>
      <section className="project-container__project-content">
        <section className="projects">
          <FontAwesomeIcon
            icon={faCloudSunRain}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCloudSunRain}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">Weather App</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faCirclePlay}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCirclePlay}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">BrainFlix</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">Job Application Tracker</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
        <section className="projects">
          <FontAwesomeIcon
            icon={faCartFlatbed}
            transform="grow-15"
            className="projects__icon"
          />
          <FontAwesomeIcon
            icon={faCartFlatbed}
            transform="grow-30"
            className="projects__icon-tablet"
          />
          <h3 className="projects__header">InStock</h3>
          <p className="projects__description">
            BrainStation Projects built on Reacts.js
          </p>
        </section>
      </section>
    </section>
  );
};
export default Works;
