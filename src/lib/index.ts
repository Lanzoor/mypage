// export function setFrozen(value: boolean) {
//     const main = document.querySelector('main');

//     if (!main) return;

//     main.classList.toggle('frozen', value);
// }

export function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pickRandom<T>(array: T[]): T {
    return array[randInt(0, array.length - 1)];
}
