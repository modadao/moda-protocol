interface PlayButtonProps {
  className?: string;
  className_Icon?: string;
  onClick: () => void;
  fill?: string;
}

export const PlayButton = ({
  className,
  className_Icon,
  onClick,
  fill,
}: PlayButtonProps) => {
  return (
    <div className={className}>
      <button type="button" onClick={onClick}>
        <svg
          className={className_Icon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={fill || 'none'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <title>Play</title>
          <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
      </button>
    </div>
  );
};
