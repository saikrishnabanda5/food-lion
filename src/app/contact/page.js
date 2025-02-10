// pages/contact.js
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Contact Us</title>
      </Head>

      <Header />

      <main className={`bg-gray-300 flex-grow text-center p-12`}>
        <p>Get in touch with us for more information.</p>
        <h1 className="text-xl"></h1>
        <br />

        <b>Contact Us</b>
        <p>
          If you have any questions, <br /> feel free to email us:
        </p>
        <a
          href="mailto:foodlionindustries@gmail.com"
          className="text-blue-500 hover:underline"
        >
          foodlionindustries@gmail.com
        </a>
        <br />
        <a
          href="mailto:foodlion.marketing@gmail.com"
          className="text-blue-500 hover:underline"
        >
          foodlion.marketing@gmail.com
        </a>
        <br />
        <div className="text-lg pt-4">
          <b>Rakesh AVN : </b>
          <br />
          <a href="tel:8374011919" className="text-blue-500 hover:underline">
            +91 8374011919
          </a>
          <br />
          <a href="tel:8374011818" className="text-blue-500 hover:underline">
            +91 8374011818
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
