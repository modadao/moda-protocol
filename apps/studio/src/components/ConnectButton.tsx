import { ConnectKitButton } from 'connectkit';

export default function ConnectButton() {
  return (
    <div>
      <ConnectKitButton.Custom>
        {({ isConnected, show, address }) => {
          return (
            <button
              type="button"
              onClick={show}
              className=" border border-black p-2 rounded-md shadow-md hover:bg-black w-44 truncate "
            >
              {isConnected ? address : 'Connect Wallet'}
            </button>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
}
