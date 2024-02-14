import { ProfileMetadata } from '@/types';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../Ui/Button';
import { Input } from '../../Ui/Input';
import LoadingSpinner from '../../Ui/LoadingSpinner';
import { Textarea } from '../../Ui/Textarea';
import UploadProfileImage from './UploadProfileImage';

interface ProfileDataFormProps {
  submitData: () => Promise<void>;
  headerText: string;
  buttonText: string;
  isLoading?: boolean;
  loadingText?: string;
  isContract?: boolean;
}

export default function ProfileDataForm({
  submitData,
  headerText,
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
      <h1 className="text-4xl font-extrabold mt-12 italic ">{headerText}</h1>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Input
            {...register('name')}
            label="Name"
            errorMessage={errors.name?.message}
          />
          <Textarea
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
          <Input
            {...register('profile.address')}
            label={isContract ? 'Contract Address' : 'EVM Address'}
          />
          <Input {...register('profile.spotify')} label="Spotify" />
          <Input {...register('profile.instagram')} label="Instagram" />
          <Input {...register('profile.twitter')} label="Twitter" />
        </div>
      </div>
      <Button className="w-52 h-12 rounded-lg text-lg mt-6" type="submit">
        {isLoading ? <LoadingSpinner /> : buttonText}
      </Button>
      {isLoading && <h3 className="text-xl font-bold italic">{loadingText}</h3>}
    </form>
  );
}
