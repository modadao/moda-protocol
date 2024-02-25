interface PolygonProps {
  className?: string;
}

export const Triangle = ({ className }: PolygonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="33"
      viewBox="0 0 39 33"
      fill="currentColor"
      className={className}
    >
      <title>Triangle</title>
      <path
        d="M0.0525436 5.94615e-05L-1.52588e-05 33.0001L38.1051 33.0001L0.0525436 5.94615e-05Z"
        fill="white"
      />
    </svg>
  );
};
