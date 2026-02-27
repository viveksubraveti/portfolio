export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-6 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Vivek Subraveti Uma Mahesh
        </p>

        {/* Lighthouse Performance Badge */}
        <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span>Lighthouse 90+</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
          <span className="hidden sm:inline">Statically generated &middot; Edge-delivered</span>
        </div>
      </div>
    </footer>
  );
}
