import { ProfileMetadata } from '@/types';
import { UiButton } from '@/ui/UiButton';
import { UiInput } from '@/ui/UiInput';
import { useFormContext } from 'react-hook-form';
import { UiSpinner } from '../../../../ui/UiSpinner';
import { UiTextarea } from '../../../../ui/UiTextarea';
import UploadProfileImage from './UploadProfileImage';

interface ProfileDataFormProps {
  submitData: () => Promise<void>;
  headerText: string;
  subHeaderText: string;
  buttonText: string;
  isLoading?: boolean;
  loadingText?: string;
  isContract?: boolean;
}

export default function ProfileDataForm({
  submitData,
  headerText,
  subHeaderText,
  buttonText,
  isLoading,
  loadingText,
  isContract,
}: ProfileDataFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ProfileMetadata>();

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="flex flex-col items-center justify-center gap-6"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-4xl font-extrabold mt-12 italic">{headerText}</h1>
        <h3 className="text-xl font-bold italic">{subHeaderText}</h3>
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <UiInput
            {...register('name')}
            label="Name"
            errorMessage={errors.name?.message}
          />
          <UiTextarea
            {...register('description')}
            label="About"
            errorMessage={errors.description?.message}
          />
          <UploadProfileImage
            value="image"
            innerText="Upload Profile Pic"
            errorMessage={errors.image?.message}
          />
          <UploadProfileImage
            value="profile.banner"
            innerText="Upload Profile Banner"
            errorMessage={errors.profile?.banner?.message}
          />
        </div>
        <div className="flex flex-col gap-4">
          <UiInput
            {...register('profile.address')}
            label={isContract ? 'Contract Address' : 'EVM Address'}
          />
          <UiInput {...register('profile.spotify')} label="Spotify" />
          <UiInput {...register('profile.instagram')} label="Instagram" />
          <UiInput {...register('profile.twitter')} label="Twitter" />
        </div>
      </div>
      <UiButton className="w-52 h-12 rounded-lg text-lg mt-6" type="submit">
        {isLoading ? <UiSpinner /> : buttonText}
      </UiButton>
      {isLoading && <h3 className="text-xl font-bold italic">{loadingText}</h3>}
    </form>
  );
}
