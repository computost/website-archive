# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Setup

This section is only required for the initial deployment of this website and is currently maintained for historical documentation. A few steps need to be manually carried out in order to fully provision this static website.

### Azure

This project includes the files necessary to create preliminary resources before deploying the static web app and other auxiliary resources.

1. Manually run a Bicep deployment using [.github/bicep/setup.bicep](./.github/bicep/setup.bicep). Open the deployment overview page in a browser.
2. From the GitHub repository, go to Settings → Environments, and create a new environment with the name _prod_. Create the following environment secrets:
   - **AZURE_CLIENT_ID**: ID of the `id-computost-website-deployment-service` managed identity
   - **AZURE_SUBSCRIPTION_ID**: Can be found from the overview of the managed identity
   - **AZURE_TENANT_ID**: Can be found from the JSON view of the managed identity

### Custom Domains

Currently, end-to-end automation for creating custom domains for Static Web Apps is unsupported. After the site is provisioned, manually carry out the steps described in the articles below:

- [Set up a custom domain in Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/custom-domain-external)
- [Set up an apex domain in Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/apex-domain-external)
