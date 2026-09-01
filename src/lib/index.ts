// export function setFrozen(value: boolean) {
//     const main = document.querySelector('main');

//     if (!main) return;

//     main.classList.toggle('frozen', value);
// }

export function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom<const T>(array: readonly T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}
