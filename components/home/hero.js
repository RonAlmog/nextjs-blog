import Image from "next/image";
const hero = () => {
  return (
    <div>
      <div>Test</div>
      <h1>Hi Im Max</h1>
      <div>
        <Image
          src="/images/site/sigal.png"
          width={200}
          height={200}
          alt="my picture"
        />
      </div>
      <p>I blog about technology, react, nextjs, and more</p>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

export default hero;
