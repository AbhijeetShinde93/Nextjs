import Link from "next/link";
import Navbar from "../Components/Navbar";
import style from "../styles/about.module.css";

const about = () => {
  return (
    <div className=" container mt-4">
      <Navbar />
      <h1 className={style.mainheading}>About</h1>
      <button className="btn btn-primary">
        <Link href="/work">Go to work Page with using Link fon link/next</Link>
      </button>
    </div>
  );
};

export default about;
