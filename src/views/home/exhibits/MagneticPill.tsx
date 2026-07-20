import ExhibitCaption from "./ExhibitCaption";

export default function MagneticPill() {
    return (
        <span
            className="group flex cursor-pointer flex-col items-center gap-2"
            title="#008 magnetic-cursor"
        >
            <span className="inline-block rounded-full bg-[linear-gradient(135deg,var(--magenta),var(--amber))] px-5.5 py-2.75 text-sm font-bold text-(--logo-ink) shadow-(--glow-m) transition-all duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-1 group-hover:-rotate-3 group-hover:shadow-[0_0_34px_oklch(0.72_0.23_350/0.65)]">
                pull me
            </span>
            <ExhibitCaption>#008 magnetic-cursor</ExhibitCaption>
        </span>
    );
}
