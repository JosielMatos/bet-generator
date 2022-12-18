import Head from "next/head";
import { MouseEvent, useState } from "react";
import { BetsList } from "../components/BetsList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [betsResults, setBetsResults] = useState([] as number[][]);

  function generateBets(event: MouseEvent, betsQty: number = 10) {
    event.preventDefault();

    const betsNumbers = Array(6)
      .fill(0)
      .map((e) => Math.ceil(Math.random() * 60))
      .sort((a, b) => a - b);
    const betsResults = Array(betsQty)
      .fill(0)
      .map((e) => betsNumbers);

    setBetsResults(betsResults);
    console.log(betsResults);
  }

  return (
    <>
      <Head>
        <title>Gerador de Apostas</title>
        <meta name='description' content='Make your bets easily' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gerador de apostas</h1>

        <button onClick={generateBets}>Gerar apostas</button>

        {betsResults.length ? (
          <BetsList bets={betsResults} />
        ) : (
          <p>Sem apostas ainda.</p>
        )}
      </main>
    </>
  );
}
