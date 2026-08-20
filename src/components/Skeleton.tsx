import './Skeleton.css';

interface SkeletonProps {
  lines?: number;
  height?: number;
  className?: string;
}

export function SkeletonLine({ height = 14, className = '' }: SkeletonProps) {
  return <div className={`skeleton-line ${className}`} style={{ height }} />;
}

export function SkeletonCircle({ size = 48 }: { size?: number }) {
  return <div className="skeleton-circle" style={{ width: size, height: size }} />;
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card-header">
        <SkeletonCircle size={48} />
        <div className="skeleton-card-text">
          <SkeletonLine height={16} />
          <SkeletonLine height={12} />
        </div>
      </div>
      <SkeletonLine height={10} />
    </div>
  );
}

export function SkeletonBar() {
  return <div className="skeleton-bar" />;
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="skeleton-text">
      {Array.from({ length: lines }, (_, i) => (
        <SkeletonLine key={i} height={12} className={i === lines - 1 ? 'short' : ''} />
      ))}
    </div>
  );
}
