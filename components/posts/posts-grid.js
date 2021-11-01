import PostItem from "./post-item";

const PostsGrid = (props) => {
  const { posts } = props;
  return (
    <div className="row">
      {posts.map((item) => (
        <div className="col-12 col-sm-6 col-lg-3" key={item.slug}>
          <PostItem post={item} />
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
