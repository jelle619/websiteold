import styles from "./popup.module.css";

export default function popup({ children }) {

    const [visibility, setVisibility] = React.useState(hidden);

    // function enableVisibility() {
    //     document.getElementById("myNav").style.width = "100%";
    // }

    // function disableVisibility() {
    //     document.getElementById("myNav").style.width = "0%";
    // }

    return (
        <div className={styles.popup}>
            {children}
        </div>
    );
}