interface PurchaseTypeToggleProps {
  isCreditCard: boolean;
  setIsCreditCard: (isCreditCard: boolean) => void;
}

const selected = 'bg-black text-white w-1/2 text-center p-1 rounded-md';
const unselected = 'bg-white text-black w-1/2 text-center p-1 rounded-md';

export const PurchaseTypeToggle = (props: PurchaseTypeToggleProps) => {
  const { isCreditCard, setIsCreditCard } = props;
  return (
    <div className="flex hover:cursor-pointer border border-black rounded-md text-lg font-bold italic p-[2px]">
      <button
        type="button"
        className={isCreditCard ? selected : unselected}
        onClick={() => setIsCreditCard(true)}
      >
        Credit Card
      </button>
      <button
        type="button"
        className={!isCreditCard ? selected : unselected}
        onClick={() => setIsCreditCard(false)}
      >
        Crypto
      </button>
    </div>
  );
};
