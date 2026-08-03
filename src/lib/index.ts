export * as Legal from './legal';

export function setFrozen(value?: boolean) {
    let main = document.querySelector('main');
    if (!main) return;
    main.classList.toggle('frozen', value);
}

export async function sleep(timeMs: number): Promise<any> {
    return new Promise((p) => setTimeout(p, timeMs));
}
