import React from "react";
import { useParams } from "react-router-dom";
import Blogs from "./Blogs";
import Section from "./Section";

function About() {
  const { type } = useParams();
  return (
    <div>
      <h2>About</h2>
      {type === "blogs" && <Blogs />}
      {type === "section" && <Section />}
    </div>
  );
}

export default About;
