import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = (props) => {
  return (
    <div>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </div>
  );
};

export default FeaturedPosts;
