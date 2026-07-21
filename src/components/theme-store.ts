export type Theme = "light" | "dark";

const listeners = new Set<() => void>();

let theme: Theme = "dark";
let synced = false;

function readTheme(): Theme {
    return document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";
}

function applyTheme(next: Theme) {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
}

export function getTheme(): Theme {
    return theme;
}

export function getServerTheme(): Theme {
    return "dark";
}

export function setTheme(next: Theme) {
    if (next === theme) {
        return;
    }

    theme = next;
    applyTheme(next);
    window.localStorage.setItem("theme", next);
    for (const listener of listeners) {
        listener();
    }
}

export function subscribeTheme(listener: () => void) {
    if (!synced) {
        synced = true;
        theme = readTheme();
    }

    listeners.add(listener);
    return () => listeners.delete(listener);
}
