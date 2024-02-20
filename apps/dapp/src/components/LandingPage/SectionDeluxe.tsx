export const SectionDeluxe = () => {
  return (
    <div className="bg-black pb-[121px] pt-[572px] md:py-32 relative bg-drop-pattern bg-repeat-y bg-[length:459px_140px] bg-[80px_0px] md:bg-[60%_0%] ">
      {/* Vertical Line */}
      <div className="md:hidden absolute top-0 left-[59px] h-[497px] bg-line-arrow bg-no-repeat w-4 bg-bottom" />
      <div className="container mx-auto text-white px-4 space-y-4 z-50 relative">
        <h1 className="landing-page__section-heading mb-4.5 max-w-[343px] lg:max-w-none">
          Header
        </h1>
        <p className="italic font-medium leading-relaxed text-lg md:max-w-[400px] lg:max-w-[751px] lg:pb-14">
          Content
        </p>
      </div>
    </div>
  );
};
