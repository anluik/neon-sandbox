import ShelfItem from "./ShelfItem";
import type { ExperimentGroup } from "#/experiments";

export default function ShelfGroup({
    group,
    onNavigate
}: {
    group: ExperimentGroup;
    onNavigate: () => void;
}) {
    return (
        <div>
            <div className="flex items-center gap-2 px-1.5 pb-2">
                <span className={`glow-dot dot-${group.accent}`} />
                <span className="mono-label">{group.label}</span>
            </div>
            <div className="flex flex-col gap-0.5">
                {group.items.map(item => (
                    <ShelfItem
                        key={item.index}
                        item={item}
                        group={group}
                        onNavigate={onNavigate}
                    />
                ))}
            </div>
        </div>
    );
}
