import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../components/home/featured-posts";
import Hero from "../components/home/hero";
import styles from "../styles/Home.module.css";

const DUMMY = [
  {
    title: "test",
    image: "cat.jpg",
    excerpt: "hey you, test this very long text lorem ipsum mit dolor.",
    date: "2021-10-10",
    slug: "myslug",
  },
  {
    title: "test",
    image: "bull.jpg",
    excerpt: "hey you, test this very long text lorem ipsum mit dolor.",
    date: "2021-10-10",
    slug: "myslug2",
  },
  {
    title: "test",
    image: "fruits.jpg",
    excerpt: "hey you, test this very long text lorem ipsum mit dolor.",
    date: "2021-10-10",
    slug: "myslug3",
  },
  {
    title: "test",
    image: "fruits2.jpg",
    excerpt: "hey you, test this very long text lorem ipsum mit dolor.",
    date: "2021-10-10",
    slug: "myslug4",
  },
];
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Test</h1>
      <Hero />
      <FeaturedPosts posts={DUMMY} />
    </Fragment>
  );
}
