import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/client.ts',
    'src/server.ts',
    'src/admin.ts',
    'src/types.ts'
  ],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false
});
