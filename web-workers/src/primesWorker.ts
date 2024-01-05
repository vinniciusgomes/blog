onmessage = (event) => {
  const { start, end } = event.data;

  const primes = findPrimesInRange(start, end);

  postMessage(primes);
};

function findPrimesInRange(start: number, end: number): number[] {
  const primes: number[] = [];

  for (let number = start; number <= end; number++) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  return primes;
}

function isPrime(num: number): boolean {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
