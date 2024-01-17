import { defineConfig } from '@wagmi/cli';
import { actions, foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: './src/generated.ts',
  contracts: [],
  plugins: [
    actions(),
    foundry({
      project: '../../moda-contracts',
      include: ['Profile.sol/**'],
    }),
    react(),
  ],
});
