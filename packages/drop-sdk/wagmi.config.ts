import { defineConfig } from '@wagmi/cli';
import { actions, foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: './src/generated.ts',
  contracts: [],
  plugins: [
    actions({
      overridePackageName: '@wagmi/core',
    }),
    foundry({
      project: '../../moda-contracts',
      include: [
        'Registry.sol/**',
        'CatalogFactory.sol/**',
        'Catalog.sol/**',
        'Management.sol/**',
        'ReleasesFactory.sol/**',
        'Releases.sol/**',
        'OpenReleasesFactory.sol/**',
        'OpenReleases.sol/**',
        'Marketplace.sol/**',
      ],
    }),
    react(),
  ],
});
