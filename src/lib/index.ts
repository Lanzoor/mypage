export * as Legal from './legal';

export function setFrozen(value?: boolean) {
    let main = document.querySelector('main');
    if (!main) return;
    main.classList.toggle('frozen', value);
}
