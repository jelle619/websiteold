import Image from "next/image"
import styles from "./image.module.css";

export default function Image(props) {
  return (
  <Image className={styles.image} src={props.src} placeholder="blur" layout="responsive"/>
  );
}