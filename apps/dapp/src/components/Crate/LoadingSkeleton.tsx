import { UiSkeleton } from '@/ui/UiSkeleton';

export const SkeletonItem = () => (
  <div className="flex w-full max-h-[201px] h-[200px] gap-4">
    <UiSkeleton className="h-[200px] w-[200px] flex-shrink-0 max-md:hidden" />
    <div className="w-full h-full space-y-2 flex items-center flex-col justify-center">
      <UiSkeleton className="w-full h-full max-md:hidden" />
      <div className="max-md:h-[140px] max-md:flex max-md:flex-row max-md:gap-2 md:hidden w-full h-full">
        <UiSkeleton className="w-[100px] h-[100px] flex-shrink-0" />
        <UiSkeleton className="w-full h-full" />
      </div>
      <UiSkeleton className="w-full h-[140px] max-md:h-full" />
    </div>
  </div>
);

export const LoadingSkeleton = () => {
  return (
    <div className="p-20 max-md:p-2">
      <div className="space-y-4">
        {[1, 2, 3].map((item) => {
          return <SkeletonItem key={item} />;
        })}
      </div>
    </div>
  );
};
