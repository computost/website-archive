targetScope = 'subscription'

param location string = 'centralus'

resource resourceGroup 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: 'rg-computost-website'
  location: location
}

module identity 'identity.bicep' = {
  name: 'computost-website-identity'
  scope: resourceGroup
  params: {
    location: location
  }
}
