import { CodegenConfig } from "@graphql-codegen/cli";

const url = process.env.GRAFBASE_API_URL as string;
const xApiKey = process.env.GRAFBASE_API_KEY as string;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          "x-api-key": xApiKey,
        },
      },
    },
  ],
  documents: "**/**/*.graphql",
  generates: {
    "./generated/hooks_and_more.ts": {
      plugins: [
        "typescript",
        "typescript-apollo-client-helpers",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withComponent: false,
        withHOC: false,
        withHooks: true,
        withMutationFn: true,
        withResultType: true,
        maybeValue: "T",
        preResolveTypes: true,
      },
    },
  },
};

export default config;
