import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const newdata = await res.json();
  const paths = newdata.map((post) => {
    // console.log("========", post);
    return {
      params: { pageNo: String(post.id) },
    };
  });

  return {
    paths, //this paths is use to get id
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

const pageNo = ({ post }) => {
  // const router = useRouter();
  // const pagesNumber = router.query.pageNo;
  return (
    <>
      <div className="col-12 container p-2">
        <h1 className="text-capitalize">{post.body}</h1>
      </div>
    </>
  );
};

export default pageNo;
