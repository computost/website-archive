param location string = resourceGroup().location

resource site 'Microsoft.Web/staticSites@2022-09-01' = {
  name: 'stapp-computost-website'
  location: location
}
