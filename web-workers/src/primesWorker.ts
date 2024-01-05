// Este trecho de código trata do evento onmessage que ocorre quando a thread do worker recebe uma mensagem da thread principal.
onmessage = (event) => {
  // Desestruturação dos dados recebidos da thread principal.
  const { start, end } = event.data;

  // Chama a função findPrimesInRange para encontrar os números primos no intervalo especificado.
  const primes = findPrimesInRange(start, end);

  // Envia os números primos encontrados de volta para a thread principal.
  postMessage(primes);
};

// Função responsável por encontrar os números primos no intervalo especificado.
function findPrimesInRange(start: number, end: number): number[] {
  // Array para armazenar os números primos encontrados.
  const primes: number[] = [];

  // Itera sobre todos os números no intervalo especificado.
  for (let number = start; number <= end; number++) {
    // Verifica se o número atual é primo usando a função isPrime.
    if (isPrime(number)) {
      // Se for primo, adiciona-o ao array de números primos.
      primes.push(number);
    }
  }

  // Retorna o array contendo os números primos no intervalo.
  return primes;
}

// Função auxiliar para verificar se um número é primo.
function isPrime(num: number): boolean {
  // Números menores que 2 não são primos.
  if (num < 2) return false;

  // Itera até a raiz quadrada do número para verificar se é divisível por algum outro número.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Se for divisível, não é primo.
    if (num % i === 0) return false;
  }

  // Se não foi divisível por nenhum número, é primo.
  return true;
}
