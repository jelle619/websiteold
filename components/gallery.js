import styles from "./gallery.module.css";

export default function gallery({ children }) {
  return (
  <div className={styles.gallery}>
    {children}
  </div>
  );
}