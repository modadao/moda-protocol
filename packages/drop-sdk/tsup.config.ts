import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  format: ['cjs', 'esm'],
  entry: {
    index: 'src/index.ts',
  },
});
