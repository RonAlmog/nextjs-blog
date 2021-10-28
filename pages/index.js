import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Hero from "../components/home/hero";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Test</h1>
      <Hero />
      {/* <FeaturedPosts /> */}
    </div>
  );
}
