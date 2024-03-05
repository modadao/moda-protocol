import { TrackData } from '@/types';
import { UiButton } from '@/ui/UiButton';
import { UiInput } from '@/ui/UiInput';
import { UiSpinner } from '@/ui/UiSpinner';
import { useFormContext } from 'react-hook-form';
import ArtworkUploader from './ArtworkUploader';
import TrackUploader from './TrackUploader';

interface RegisterTrackFormProps {
  registerTrack: () => Promise<void>;
  isLoading: boolean;
}

export default function RegisterTrackForm({
  registerTrack,
  isLoading,
}: RegisterTrackFormProps) {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useFormContext<TrackData>();
  const { trackImage } = watch();

  return (
    <form
      onSubmit={handleSubmit(registerTrack)}
      className="flex flex-col items-center justify-start gap-4 mt-6"
    >
      <h3 className="text-2xl font-bold italic ">Upload Track</h3>
      <div className="flex flex-col gap-4 mt-2">
        <TrackUploader errorMessage={errors.trackUri?.message} />
        <UiInput
          {...register('trackName')}
          className="w-full placeholder:italic"
          placeholder="Track Name..."
          label="Track Name"
          errorMessage={errors.trackName?.message}
        />
        <ArtworkUploader
          value="trackImage"
          imageUri={trackImage}
          errorMessage={errors.trackImage?.message}
        />
        <UiButton className="h-[39px]" type="submit">
          {isLoading ? <UiSpinner /> : 'Register'}
        </UiButton>
      </div>
    </form>
  );
}
