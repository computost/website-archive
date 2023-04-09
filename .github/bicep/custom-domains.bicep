param domainName string
param siteName string

resource site 'Microsoft.Web/staticSites@2022-03-01' existing = {
  name: siteName

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
// output apexDomainCode string = apexDomain.properties.validationToken
