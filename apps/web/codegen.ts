import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3001/graphql',
  documents: ['./**/*.ts'],
  generates: {
    './api/__generated__/': {
      preset: 'client',
      plugins: [],
    }
  },
  ignoreNoDocuments: true,
};

export default config;