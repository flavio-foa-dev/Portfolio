import styles from './burtton.module.css';

export default function Button(props:any) {
  return (
    <button className={styles.btn}>
      {props.text}
    </button>
  );
}
