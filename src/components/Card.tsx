export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
