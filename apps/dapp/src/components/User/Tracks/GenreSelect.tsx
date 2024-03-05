import { CreateReleaseData } from '@/types';
import { UiSelect } from '@/ui/UiSelect';
import { useFormContext } from 'react-hook-form';

export default function GenreSelect() {
  const genreOptions = [
    'Rock',
    'Pop',
    'Hip Hop',
    'Jazz',
    'Electronic',
    'Classical',
    'Country',
    'Blues',
    'R&B',
    'Reggae',
    'Folk',
    'Soul',
    'Metal',
    'Punk',
    'Funk',
    'Disco',
    'House',
    'Techno',
    'Indie',
  ];

  const {
    setValue,
    formState: { errors },
    reset,
  } = useFormContext<CreateReleaseData>();

  const setGenre = (genre: string) => {
    setValue('releaseGenre', genre);
    reset({ releaseGenre: '' });
  };

  return (
    <div className="w-full">
      {errors.releaseGenre ? (
        <label className="font-bold italic">
          {errors.releaseGenre?.message}
        </label>
      ) : (
        <label className="font-bold">Genre</label>
      )}
      <UiSelect
        label="Genre"
        placeholder="Select Genre"
        options={genreOptions}
        onValueChange={setGenre}
      />
    </div>
  );
}
