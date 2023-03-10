import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    coverage: {
      excludeNodeModules: true,
      extension: ['.ts']
    }
  }
});
