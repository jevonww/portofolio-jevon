export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black px-5 py-8">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <p className="font-mono text-xs text-neutral-600">
          © {new Date().getFullYear()} Jevon Wong A.
        </p>
        <p className="font-mono text-xs text-neutral-600">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}