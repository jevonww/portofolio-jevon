export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Jevon Wong.</p>
        <p className="text-muted/70">exit code 0</p>
      </div>
    </footer>
  );
}
