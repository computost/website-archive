param domainName string
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

  resource wwwDomain 'customDomains' = {
    name: 'www.${domainName}'
  }
}

// resource apexDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
//   name: domainName
//   parent: site
//   properties: {
//     validationMethod: 'dns-txt-token'
//   }
// }

output defaultHostname string = site.properties.defaultHostname
// output apexDomainCode string = apexDomain.properties.validationToken
