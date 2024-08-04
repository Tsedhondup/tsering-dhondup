import profileImage from "../../assets/image/tsering.png";
import "./AboutSecond.scss";
const AboutSecond = () => {
  return (
    <section className="about-second">
      <img
        src={profileImage}
        alt="profile-image"
        className="about-second__img"
      />
      <p className="about-second__texts">
        From a simple HTML layout to complex web applications, I've always been
        fascinated by the power of the web to connect, inform, and inspire. What
        started as a curiosity and hobby has evolved into a full-fledged
        passion, driving me to pursue a career transition into the tech industry
        where I can play a part in shaping the digital landscape
      </p>
    </section>
  );
};
export default AboutSecond;
