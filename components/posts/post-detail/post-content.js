import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY = {
  title: "Getting started with Nuxt.js !",
  image: "cat.jpg",
  excerpt: "hey you, test this very long text lorem ipsum mit dolor.",
  date: "2021-10-10",
  slug: "myslug",
  content: "# Title Here ",
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY.image}`;
  return (
    <article>
      <PostHeader title={DUMMY.title} image={imagePath} />
      <ReactMarkdown>{DUMMY.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
