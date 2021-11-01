import Image from "next/image";
const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header>
      <div className="row">
        <div className="col-12 col-md-8">
          <h1>{title}</h1>
        </div>
        <div className="col-12 col-md-4">
          <Image src={image} alt={title} width={200} height={150} />
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
