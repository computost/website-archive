<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Minimal TypeScript Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal TypeScript starter.

    ```shell
    # create a new Gatsby site using the minimal TypeScript starter
    npm init gatsby -- -ts
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter-ts)

## Setup

This section is only required for the initial deployment of this website and is currently maintained for historical documentation. A few steps need to be manually carried out in order to fully provision this static website.

### Azure

This project includes the files necessary to create preliminary resources before deploying the static web app and other auxiliary resources.

1. Manually run a Bicep deployment using [.github/bicep/setup.bicep](./.github/bicep/setup.bicep). Open the deployment overview page in a browser.
2. From the GitHub repository, go to Settings → Environments, and create a new environment with the name _prod_. Create the following environment secrets:
   - **AZURE_CLIENT_ID**: ID of the `id-computost-website-deployment-service` managed identity
   - **AZURE_SUBSCRIPTION_ID**: Can be found from the overview of the managed identity
   - **AZURE_TENANT_ID**: Can be found from the JSON view of the managed identity

### Porkbun

We have chosen to use [Porkbun](https://porkbun.com) as our domain registrar. After creating a Porkbun account and purchasing our domain, we needed to configure our GitHub repo to be able to authenticate with the Porkbun API.

1. Follow the [steps to generate an API key](https://kb.porkbun.com/article/190-getting-started-with-the-porkbun-api) for the domain.
2. Create new environment secrets in GitHub under the _prod_ environment called **PORKBUN_API_KEY** and **PORKBUN_SECRET_KEY** and paste the keys generated from Porkbun into those secrets.
