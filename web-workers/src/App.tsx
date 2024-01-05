import { useState } from "react";
import "./App.css";

function App() {
  // Estados para armazenar números primos, valores de entrada e estado de carregamento
  const [primes, setPrimes] = useState<number[]>([]);
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(1000);
  const [loading, setLoading] = useState(false);

  // Função para lidar com a busca de números primos
  const handleFindPrimes = () => {
    if (window.Worker) {
      // Ativando o estado de carregamento
      setLoading(true);

      // Criando um novo Web Worker
      const worker = new Worker(new URL("./primesWorker.ts", import.meta.url));

      // Enviando uma mensagem para o worker com os números de início e fim
      worker.postMessage({ start: startNumber, end: endNumber });

      // Event listener para mensagens do worker
      worker.onmessage = (event) => {
        // Recebendo números primos do worker e atualizando o estado
        const primesInRange = event.data;
        setPrimes(primesInRange);

        // Desativando o estado de carregamento e encerrando o worker
        setLoading(false);
        worker.terminate();
      };
    } else {
      // Exibindo um erro se Web Workers não são suportados no ambiente
      console.error("Web Workers não são suportados neste ambiente.");
    }
  };

  return (
    <div>
      <h2>Calculadora de Números Primos com Web Worker</h2>

      {/* Campos de entrada para números de início e fim */}
      <div className="form-wrapper">
        <input
          type="number"
          placeholder="Número inicial"
          value={startNumber}
          onChange={(e) => setStartNumber(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Número final"
          value={endNumber}
          onChange={(e) => setEndNumber(Number(e.target.value))}
        />
      </div>

      <br />

      {/* Botão para iniciar a busca de números primos */}
      <button onClick={handleFindPrimes} disabled={loading}>
        {loading ? "Procurando primos..." : "Encontrar primos"}
      </button>

      {/* Exibição dos números primos encontrados ou mensagem de carregamento */}
      <p>
        <b>
          Números primos no intervalo de {startNumber} a {endNumber}:
        </b>
        <br /> {loading ? <p>Carregando...</p> : primes.join(", ")}
      </p>
    </div>
  );
}

export default App;
