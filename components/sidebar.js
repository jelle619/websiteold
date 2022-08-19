import Link from "next/link"
import styles from "./sidebar.module.css";

export default function Sidebar({ children }) {
  return (
  <div className={styles.sidebar}>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li>Art</li>
      <ul>
        <li><Link href="/art/personal"><a>Personal</a></Link></li>
        <li><Link href="/art/commisions"><a>Commisions</a></Link></li>
      </ul>
      <li>Collection</li>
      <ul>
        <li><Link href="/collection/books"><a>Books</a></Link></li>
        <li><Link href="/collection/games"><a>Games</a></Link></li>
        <li><Link href="/collection/media"><a>Media</a></Link></li>
      </ul>
      <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
  </div>
  );
}