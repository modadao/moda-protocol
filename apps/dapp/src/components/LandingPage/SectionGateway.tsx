import { AnimatedBass } from './AnimatedBass';

export const SectionGateway = () => {
  return (
    <div className="bg-black w-full">
      <div className="bg-black pt-20 pb-5 px-4 flex flex-col md:flex-row md:py-[27px] min-[2100px]:container min-[2100px]:mx-auto">
        <div className="space-y-8 md:order-last md:basis-1/2 md:self-center relative z-30">
          <h1 className="landing-page__section-heading text-white md:max-w-[629px]">
            Header
          </h1>
          <p className="text-white italic font-medium text-xl md:max-w-[629px]">
            Content
          </p>
          <p className="text-white italic text-2xl font-extrabold leading-tight md:max-w-[629px]">
            Content
          </p>
        </div>
        <div className="relative h-[333px] md:h-[680px] md:basis-1/2 mt-[-40px] md:mt-0 flex justify-center md:block">
          <div className="h-full relative w-[400px] md:w-full md:[clip-path:inset(0px_-400px_0px_20px)]">
            <AnimatedBass />
          </div>
        </div>
      </div>
    </div>
  );
};
