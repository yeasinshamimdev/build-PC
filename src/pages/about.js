"use client"

import AboutTopSection from "@/components/UI/about/AboutTopSection";
import Leadership from "@/components/UI/about/MeetOurLeadership";
import UserCount from "@/components/UI/about/UserCount";
import WorkWithUs from "@/components/UI/about/WorkWithUs";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta property="og:title" content="Shamim's tech" key="tech" />
      </Head>
      <AboutTopSection />
      <UserCount />
      <Leadership />
      <WorkWithUs />
    </div>
  )
}

export default About;
