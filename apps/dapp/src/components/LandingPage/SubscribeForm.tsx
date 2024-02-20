'use client';

export const SubscribeForm = () => {
  return (
    <div className="md:min-w-[484px] h-[56px] flex flex-col mb-14">
      <div className="italic font-bold text-sm">Stay In The Loop</div>
      <iframe
        src="https://embeds.beehiiv.com/33acdd28-8ead-4aa6-95df-91cb3fd386dc?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        title="EmailSubscription"
      />
    </div>
  );
};
