import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Address = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Address Us</title>
      </Head>

      <Header />

      <main className={`bg-gray-300 flex-grow text-center p-12`}>
        <h1 className="text-xl">
          <b>FOODLION INDUSTRIES INDIA PRIVATE LIMITED</b>{" "}
        </h1>
        <br />
        <b>Registered Office Address</b>
        <div className="text-lg">
          <p> PLOT NO. 44, ROAD NO. 10, </p>
          <p>
            MCR COLONY,BADANGPET, <br />
            HYDERABAD - 500 058
          </p>
        </div>
        <br />

        <a
          href={"https://maps.app.goo.gl/eCftLtABPtTG7Yqq5"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Open Location in Google Maps
        </a>
        <br />
        <div className="text-lg pt-4">
          <b>Factory Address</b>
          <p> PLOT NO. 168, Survey No.32 & 37,</p>
          <p>
            LAXMIGUDA, KATTEDAN, <br />
            HYDERABAD,TELANGANA - 500 077
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Address;
