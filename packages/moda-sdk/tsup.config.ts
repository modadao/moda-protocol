import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  format: ['cjs', 'esm'],
  entry: {
    index: 'src/index.ts',
    core: 'src/core/index.ts',
    metadata: 'src/metadata/index.ts',
    react: 'src/react/index.ts',
    utils: 'src/utils/index.ts',
  },
});
