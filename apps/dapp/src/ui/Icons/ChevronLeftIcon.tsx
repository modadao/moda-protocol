interface ChevronLeftIconProps {
  color?: string;
  className?: string;
}

export const ChevronLeftIcon = ({
  color = 'black',
  className,
}: ChevronLeftIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Chevron Left</title>
      <path d="m15 18-6-6 6-6" fill={color} />
    </svg>
  );
};
