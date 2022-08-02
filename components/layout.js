import Header from "./header"
import Sidebar from "./sidebar"

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}