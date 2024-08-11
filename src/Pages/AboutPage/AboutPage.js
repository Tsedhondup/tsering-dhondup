import Header from "../../Components/Header/Header";
import AboutFirst from "../../Components/AboutFirst/AboutFirst";
import Contacts from "../../Components/Contacts/Contacts";
import { useState } from "react";
const AboutPage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const validateScrolling = () => {};
  return (
    <>
      <Header isScroll={isScroll} />
      <AboutFirst />
      <Contacts />
    </>
  );
};
export default AboutPage;
