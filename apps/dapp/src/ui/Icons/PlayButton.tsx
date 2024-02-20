type PlayButtonProps = React.SVGProps<SVGSVGElement>;

export const PlayButton = (props: PlayButtonProps) => {
  return (
    <svg
      width="143"
      height="143"
      viewBox="0 0 143 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Play</title>
      <circle
        cx="71.0569"
        cy="71.0567"
        r="52.0896"
        transform="rotate(62.1742 71.0569 71.0567)"
        fill="white"
        fillOpacity="0.9"
      />
      <circle
        cx="71.0569"
        cy="71.0567"
        r="52.0896"
        transform="rotate(62.1742 71.0569 71.0567)"
        stroke="url(#paint0_linear_1911_568)"
      />
      <circle
        cx="71.0569"
        cy="71.0567"
        r="52.0896"
        transform="rotate(62.1742 71.0569 71.0567)"
        stroke="url(#paint1_linear_1911_568)"
      />
      <circle cx="70.8418" cy="71" r="43.5" fill="white" fillOpacity="0.12" />
      <circle
        cx="70.8418"
        cy="71"
        r="43.5"
        stroke="url(#paint2_linear_1911_568)"
      />
      <circle
        cx="70.8418"
        cy="71"
        r="43.5"
        stroke="url(#paint3_linear_1911_568)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.8418 58V86L87.8418 71.0791L59.8418 58Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1911_568"
          x1="71.0569"
          y1="18.4671"
          x2="71.0569"
          y2="123.646"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CECECE" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1911_568"
          x1="71.0569"
          y1="18.4671"
          x2="71.0569"
          y2="123.646"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.38" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1911_568"
          x1="70.8418"
          y1="27"
          x2="70.8418"
          y2="115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CECECE" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1911_568"
          x1="70.8418"
          y1="27"
          x2="70.8418"
          y2="115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0.38" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
