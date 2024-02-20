'use client';

import { useCallback, useEffect, useState } from 'react';
import { UiButton } from './UiButton';

interface UiInputCounterProps {
  quantity: number;
  maxQty: number;
  quantityCallback?: (value: number) => void;
}

export const UiInputCounter = ({
  quantityCallback,
  quantity,
  maxQty,
}: UiInputCounterProps) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);

  useEffect(() => {
    quantityCallback?.(inputQuantity);
  }, [inputQuantity, quantityCallback]);

  const handleInput = useCallback(
    (value: number) => {
      if (value > maxQty) return;
      if (value < 1) return;
      setInputQuantity(value);
    },
    [maxQty],
  );

  const handleIncrement = useCallback(
    (prevState: number) => {
      if (prevState >= maxQty) return prevState;
      const newQuantity = prevState + 1;
      return newQuantity;
    },
    [maxQty],
  );

  const handleDecrement = useCallback((prevState: number) => {
    if (prevState === 1) return 1;
    const newQuantity = prevState - 1;
    return newQuantity;
  }, []);

  return (
    <div className="flex items-center bg-white h-12 justify-between">
      <UiButton
        className="border-white"
        size="xsm"
        intent={'secondary'}
        onClick={() => {
          setInputQuantity((prevState) => handleDecrement(prevState));
        }}
      >
        <div className="text-xl">-</div>
      </UiButton>
      <input
        type="text"
        inputMode="numeric"
        value={quantity}
        className="text-center font-bold focus:outline-none text-black w-4"
        onChange={(event) => {
          const value = Number(event.target.value);
          handleInput(value);
        }}
      />
      QT
      <UiButton
        size="xsm"
        className="border-white"
        intent={'secondary'}
        onClick={() => {
          setInputQuantity((prevState) => handleIncrement(prevState));
        }}
      >
        <div className="text-xl">+</div>
      </UiButton>
    </div>
  );
};
