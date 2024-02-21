'use client';

export const ReleaseStatusTag = () => {
  const releaseStatus = 'SOLD OUT';

  return (
    <>
      {releaseStatus && (
        <div
          className={`opacity-90 italic text-black mb-1 self-start whitespace-nowrap w-fit rounded text-xs px-2 py-1 leading-clamped ${
            releaseStatus === 'SOLD OUT' ? 'bg-[#ff7b80]' : 'bg-[#a8e6c5]'
          }`}
        >
          {releaseStatus}
        </div>
      )}
    </>
  );
};
