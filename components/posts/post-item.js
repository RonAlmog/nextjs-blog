import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US");
  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <Link href={linkPath}>
      <a>
        <Fragment>
          <div className="card-header">
            <h3>{title}</h3>
          </div>
          <div className="card">
            <Image
              src={imagePath}
              width={200}
              height={200}
              alt="my picture"
              layout="responsive"
            />

            <div className="card-body">
              <time>{formattedDate}</time>
              <p>{excerpt}</p>
            </div>
          </div>
        </Fragment>
      </a>
    </Link>
  );
};

export default PostItem;
