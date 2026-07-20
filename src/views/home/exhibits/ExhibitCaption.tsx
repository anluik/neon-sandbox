export default function ExhibitCaption({
    children
}: {
    children: React.ReactNode;
}) {
    return <span className="mono-label tracking-widest!">{children}</span>;
}
