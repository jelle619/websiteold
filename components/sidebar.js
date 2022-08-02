import Link from "next/link"
import styles from "./sidebar.module.css";

export default function Sidebar({ children }) {
  return (
  <div className={styles.sidebar}>
    <Link href="/"><a>Home</a></Link>
  </div>
  );
}