export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-10/12 mt-10 mb-10">
      {children}
    </div>
  );
}
