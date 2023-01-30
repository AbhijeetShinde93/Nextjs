import Link from "next/link";
import style from "../styles/navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={style.menubar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <button className={`${style.btnContact} ${style.btnText}`}>
              Connect
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
