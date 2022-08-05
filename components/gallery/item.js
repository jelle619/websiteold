import styles from "./gallery-item.module.css";

export default function item({ props }) {
    return (
        <div>
            <a>
                <img src={props.src} height={props.height} alt={props.alt}></img>
            </a>
        </div>
    );
}