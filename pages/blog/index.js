import Navbar from "../../Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      xyz: data,
    },
  };
};

const blog = ({ xyz }) => {
  console.log(Array.isArray(xyz)); //to check weather data is in array formate or not
  return (
    <div className=" container mt-4 ">
      <Navbar />
      <h1 style={{ color: "red" }}>Blog</h1>
      <div className="row">
        {xyz &&
          xyz.map((e) => {
            return (
              <div className="col-12 blog-card" key={e.id}>
                <Link href={`/blog/${e.id}`}>
                  <h3 className="text-capitalize">{e.title}</h3>
                  {/* <Image src={e?.image} height={200} width={300} /> */}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default blog;
