interface TwitterIconProps {
  className?: string;
}

export const TwitterIcon = ({ className }: TwitterIconProps) => {
  return (
    <svg
      className={className}
      width="16"
      height="16.36"
      viewBox="0 0 16 16.36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Twitter</title>
      <path
        d="M9.522 6.924 15.479 0h-1.412L8.895 6.012 4.764 0H0l6.247 9.091L0 16.352h1.412l5.462 -6.348 4.362 6.348H16L9.522 6.924ZM7.589 9.171l-0.632 -0.905L1.92 1.063h2.168l4.064 5.814 0.632 0.905 5.283 7.557h-2.168l-4.311 -6.167Z"
        fill={'black'}
      />
    </svg>
  );
};
