// components/Header.js
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul
          className={`flex flex-row h-24 md:h-28 items-center ${styles.navList}`}
        >
          <div className="w-24 sm:w-32 md:w-40 lg:w-52">
            <Image
              src="/food-lion.png"
              alt="Food Lion"
              layout="intrinsic"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>

          <li className={styles.navItem}>
            <Link className="text-sm md:text-xl" href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
