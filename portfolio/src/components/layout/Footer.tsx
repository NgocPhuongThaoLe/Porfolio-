export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-6">
      <div className="mx-auto max-w-6xl text-sm text-slate-400">
        © {new Date().getFullYear()} Portfolio
      </div>
    </footer>
  )
}