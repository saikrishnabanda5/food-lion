// pages/index.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import Image from "next/image";

const imageData = [
  {
    id: 0,
    alt: "Image 1",
    url: "/image1.jpg",
  },
  {
    id: 1,
    alt: "Image 2",
    url: "/image2.jpg",
  },
  {
    id: 2,
    alt: "Image 3",
    url: "/image3.jpg",
  },
  {
    id: 3,
    alt: "Image 4",
    url: "/image4.jpg",
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Next.js Landing Page</title>
        <meta
          name="description"
          content="A simple Next.js app with header, footer, and landing page."
        />
      </Head>
      <Header />
      <main className={styles.main}>
        {/* <h1 className={styles.title}>Welcome to Our Landing Page</h1> */}
        <p className={styles.description}>
          Food Lion is widely recognized for its supermarkets, which offer a
          variety of food products and household items, it is not specifically
          known as a manufacturer of biscuits.{" "}
        </p>

        <div className={styles.imageGrid}>
          {imageData?.map((product) => {
            return (
              <div className={styles.imageItem} key={product.id}>
                <Image
                  src={product.url}
                  alt={product.alt}
                  width={350}
                  height={200}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
