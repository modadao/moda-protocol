import { Release } from '@/types';
import { Dialog, DialogContent } from '@/ui/UiDialog';
import { useState } from 'react';
import { CheckoutDetail } from './CheckoutDetail';

interface PurchasePanelProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  release: Release;
}

export const PurchasePanel = (props: PurchasePanelProps) => {
  const [quantity, setQuantity] = useState(1);

  const { isOpen, setIsOpen, release } = props;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="bg-white"
        onPointerDownOutside={(event) => event.preventDefault()}
        onInteractOutside={(event) => event.preventDefault()}
      >
        <div className="mt-2 mb-8 text-xl font-bold italic">Checkout Cart</div>
        <div className="mb-8">
          <CheckoutDetail
            quantity={quantity}
            setQuantity={setQuantity}
            release={release}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
