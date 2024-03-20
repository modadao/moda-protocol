import { CreateReleaseData } from '@/types';
import { UiInput } from '@/ui/UiInput';
import { UiTextarea } from '@/ui/UiTextarea';
import { useFormContext } from 'react-hook-form';
import GenreSelect from './GenreSelect';

export default function CreateReleaseForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateReleaseData>();
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-[350px]">
      <UiInput
        {...register('releaseName')}
        label="Release Name"
        className="w-[350px]"
        errorMessage={errors.releaseName?.message}
      />
      <UiTextarea
        {...register('releaseDescription')}
        label="Release Description"
        className="w-[350px]"
        errorMessage={errors.releaseDescription?.message}
      />
      <GenreSelect />
      <UiInput
        {...register('royaltyAmount', { valueAsNumber: true, min: 0, max: 20 })}
        label="Resale Royalty < 20%"
        className="w-[350px]"
        errorMessage={errors.royaltyAmount?.message}
        type="number"
      />
      <UiInput
        {...register('totalSupply')}
        label="Total Supply"
        className="w-[350px]"
        errorMessage={errors.totalSupply?.message}
      />
    </div>
  );
}
