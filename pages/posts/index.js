import AllPosts from "./all-posts";

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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY} />;
};

export default AllPostsPage;
