import { useCallback, useState } from "react";
import Sidebar from "#/app/nav/Sidebar";
import TopBar from "./nav/TopBar.tsx";
import type { ReactNode } from "react";

export default function App({ children }: { children: ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = useCallback(() => setMenuOpen(false), []);

    return (
        <div className="flex h-dvh w-full flex-col overflow-hidden md:flex-row">
            <TopBar open={menuOpen} onToggle={() => setMenuOpen(o => !o)} />
            <Sidebar open={menuOpen} onClose={closeMenu} />
            <div
                inert={menuOpen}
                className="relative min-w-0 flex-1 overflow-y-auto"
            >
                {children}
            </div>
        </div>
    );
}
