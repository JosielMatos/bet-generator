import styles from "../styles/bet.module.css";

interface BetsResultsProps {
  numbers: number[];
  betId: number;
}

export function Bet({ numbers, betId }: BetsResultsProps) {
  return (
    <li className={styles["bet-container"]}>
      <p className={styles["bet-number"]}>Aposta {betId}</p>

      <ul className={styles["numbers-list"]}>
        {numbers.map((n, i) => {
          return (
            <li key={i} className={styles.number}>
              {n}
            </li>
          );
        })}
      </ul>
    </li>
  );
}
