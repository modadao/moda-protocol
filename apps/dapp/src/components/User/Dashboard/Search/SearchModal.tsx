import { Dialog, DialogContent } from '@/ui/UiDialogModal';
import { Dispatch, SetStateAction } from 'react';
import Search from './Search';

interface SearchModalProps {
  isSearchOpen?: boolean;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SearchModal({
  isSearchOpen,
  setIsSearchOpen,
}: SearchModalProps) {
  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogContent className="bg-whiteBackground h-72 max-w-[620px] shadow-xl">
        <Search />
      </DialogContent>
    </Dialog>
  );
}
