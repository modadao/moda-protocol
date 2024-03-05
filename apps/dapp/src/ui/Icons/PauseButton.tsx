interface PauseButtonProps {
  className?: string;
  className_Icon?: string;
  onClick: () => void;
  fill?: string;
}

export const PauseButton = ({
  className,
  className_Icon,
  onClick,
  fill,
}: PauseButtonProps) => {
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
          <title>Pause</title>
          <rect width="4" height="16" x="6" y="4" />
          <rect width="4" height="16" x="14" y="4" />
        </svg>
      </button>
    </div>
  );
};
