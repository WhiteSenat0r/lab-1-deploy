/**
 * Header component with page title and user controls
 * Displays settings title, feedback button, notifications, and user avatar
 */
export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-900">Settings</h1>

      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-700 hover:text-gray-900 font-medium">
          Feedback
        </button>

        <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C7.23858 2 5 4.23858 5 7V10.5858L3.29289 12.2929C3.10536 12.4804 3 12.7348 3 13V15C3 15.5523 3.44772 16 4 16H7.06189C7.51314 17.1956 8.66606 18 10 18C11.334 18 12.4869 17.1956 12.9381 16H16C16.5523 16 17 15.5523 17 15V13C17 12.7348 16.8946 12.4804 16.7071 12.2929L15 10.5858V7C15 4.23858 12.7614 2 10 2Z" fill="currentColor"/>
          </svg>
        </button>

        <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-medium">
          CN
        </div>
      </div>
    </header>
  );
}
