param repositoryUrl string
@secure()
param repositoryToken string
param location string = resourceGroup().location

resource site 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'stapp-computost-website'
  location: location
  sku: {
    tier: 'Free'
    name: 'Free'
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: 'main'
    repositoryToken: repositoryToken
  }
}
