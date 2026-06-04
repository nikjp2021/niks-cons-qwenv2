export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[var(--color-border)] border-t-[var(--color-accent)] rounded-full animate-spin" />
        <p className="font-ui text-ui-sm text-[var(--color-text-muted)]">
          Loading...
        </p>
      </div>
    </div>
  );
}
