// pages/about.js
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>

      <Header />

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>About Us</h1>
        <p>Learn more about our project.</p>
      </main>

      <Footer />
    </>
  );
};

export default About;
