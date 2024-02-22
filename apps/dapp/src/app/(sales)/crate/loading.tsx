import { LoadingSkeleton } from '@/components/Crate/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="md:px-4">
      <div className="container mx-auto">
        <LoadingSkeleton />
      </div>
    </div>
  );
}
