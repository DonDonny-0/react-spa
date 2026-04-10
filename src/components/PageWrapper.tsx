export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-linear-to-b from-gray-400 to-gray-700 to-[60vh]">
      {children}
    </div>
  );
}
