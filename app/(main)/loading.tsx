export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-primary-main dark:bg-dark-primary-main">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-light-success dark:border-dark-success"></div>
      </div>
    </div>
  );
}

