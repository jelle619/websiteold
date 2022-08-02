import styles from "./hero.module.css";

function styleBuilder(heroUrl, heroHeight) {
    let final = { backgroundImage: "url(" + heroUrl + ")", height: heroHeight }
    return final
}

export default function Hero(props) {
    return (
        <div className={styles.hero} style={styleBuilder(props.src, props.height)}>
            <p>{props.text}</p>
        </div>
    );
}