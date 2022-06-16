import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Ahmad Ghorbani",
          description: "A passionate Front End Web Developer.",
          image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
          url: "https://portfolio-ahmad-ghorbani.vercel.app/",
          keywords: [
            "Ahmad",
            "Ahmad Ghorbani",
            "@amadghorbani",
            "Ahmad-Ghorbani",
            "Portfolio",
            "Ahmad Portfolio ",
            "Ahmad Ghorbani Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "nodejs ",
            "expressjs",
            "reactjs ",
            "redux",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />s
      <Proficiency />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}
