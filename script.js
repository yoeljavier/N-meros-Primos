let primes = [2];
let currentIndex = 0;

function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function nextPrime() {
    let candidate = primes[primes.length - 1] + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    primes.push(candidate);
    return candidate;
}

document.addEventListener('mousedown', function (event) {
    event.preventDefault(); // Evita el menú contextual para el clic derecho
    if (event.button === 0) { // Clic izquierdo
        currentIndex++;
        if (currentIndex >= primes.length) {
            nextPrime();
        }
    } else if (event.button === 2) { // Clic derecho
        if (currentIndex > 0) {
            currentIndex--;
        }
    }
    document.getElementById('number').textContent = primes[currentIndex];
});

document.getElementById('resetButton').addEventListener('click', function () {
    currentIndex = 0;
    primes = [2];
    document.getElementById('number').textContent = primes[currentIndex];
});
