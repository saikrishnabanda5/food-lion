// pages/contact.js
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>

      <Header />

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for more information.</p>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
