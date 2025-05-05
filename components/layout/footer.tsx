export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-4 bg-zinc-950">
      <div className="container mx-auto px-4 text-center text-zinc-500 text-xs font-mono">
        <p>REPUBLIC MILITARY DATABASE // {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
