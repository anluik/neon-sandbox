import { useSyncExternalStore } from "react";
import {
    getServerTheme,
    getTheme,
    setTheme,
    subscribeTheme
} from "./theme-store";

export default function ThemeToggle() {
    const theme = useSyncExternalStore(
        subscribeTheme,
        getTheme,
        getServerTheme
    );

    const label =
        theme === "dark"
            ? "Theme: night. Click to switch to day mode."
            : "Theme: day. Click to switch to night mode.";

    return (
        <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={label}
            className="ghost-control flex items-center gap-1.75 rounded-full! px-3! py-1.5! text-[11px] tracking-[0.08em]"
        >
            <span className="glow-dot theme-dot transition-all duration-400" />
            <span>{theme === "dark" ? "NIGHT" : "DAY"}</span>
        </button>
    );
}
