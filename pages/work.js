import { useRouter } from "next/router";
import Navbar from "../Components/Navbar";
import style from "../styles/work.module.css";

const work = () => {
  const router = useRouter();
  return (
    <div className="container mt-4 ">
      <Navbar />
      <h1 className={style.mainheading}>Work</h1>
      <button className="btn btn-success">
        <a
          onClick={() => {
            router.push("/");
          }}
        >
          Lets Go to home page with using useRouter
        </a>
      </button>
    </div>
  );
};

export default work;
