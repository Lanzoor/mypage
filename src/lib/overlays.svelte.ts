export interface OverlayState {
    identifier: string;
    open: boolean;
    closable?: boolean;
}

export const navigationOverlay = $state<OverlayState>({
    identifier: "navigation-overlay",
    open: false,
});

export const warpOverlay = $state<OverlayState>({
    identifier: "warp-overlay",
    open: false,
});

export const legalNoticeOverlay = $state<OverlayState>({
    identifier: "legal-notice",
    open: false,
    closable: false,
});

export const closePriorities = [
    warpOverlay.identifier,
    navigationOverlay.identifier,
    legalNoticeOverlay.identifier,
];

const overlays = {
    [navigationOverlay.identifier]: navigationOverlay,
    [warpOverlay.identifier]: warpOverlay,
    [legalNoticeOverlay.identifier]: legalNoticeOverlay,
};

export function handleEscape() {
    return (event: KeyboardEvent) => {
        if (event.key !== "Escape") return;

        const activeOverlay = closePriorities
            .map((id) => overlays[id])
            .find((overlay) => overlay.open && overlay.closable !== false);

        if (activeOverlay) {
            activeOverlay.open = false;
        }
    };
}
