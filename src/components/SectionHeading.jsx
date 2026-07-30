export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-10 mt-6">
      <h2 className="font-mono text-lg md:text-xl font-bold uppercase text-[var(--text-primary)]">
        <span className="text-[var(--accent)] mr-2">{number}.</span>
        {title}
      </h2>
      <div className="flex-1 border-t border-[var(--border)] border-dashed"></div>
    </div>
  );
}
