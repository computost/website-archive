param location string = resourceGroup().location
param repositoryUrl string
param siteName string

resource site 'Microsoft.Web/staticSites@2022-03-01' = {
  name: siteName
  location: location
  sku: {
    tier: 'Free'
    name: 'Free'
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: 'main'
  }
}

output defaultHostname string = site.properties.defaultHostname
