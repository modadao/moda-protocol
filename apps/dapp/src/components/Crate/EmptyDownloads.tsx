import { UiButton } from '@/ui/UiButton';
import { useRouter } from 'next/navigation';

export const EmptyDownloads = () => {
  const router = useRouter();
  return (
    <div className="mt-14 max-md:mt-4 border border-black bg-white md:p-10 max-md:px-[21px] max-md:py-12 grid grid-cols-2 gap-4 rounded">
      <h1 className="text-6xl md:max-w-[500px] font-extrabold max-md:text-4xl max-md:col-span-2 w-full italic max-md:text-center">
        You currently don&#39;t have any downloads.
      </h1>
      <div className="flex flex-col items-center justify-center font-bold italic max-md:col-span-2 w-full max-md:mt-4">
        Your purchases will show up here.
        <UiButton
          intent={'secondary'}
          size={'xsm'}
          className="mt-4 italic"
          onClick={() => {
            router.push('/');
          }}
        >
          View Sale
        </UiButton>
      </div>
    </div>
  );
};
