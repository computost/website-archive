param(
  [Parameter(Mandatory=$true)][string]$ApiKey,
  [Parameter(Mandatory=$true)][string]$SecretKey,
  [Parameter(Mandatory=$true)][string]$DefaultHostname,
  [Parameter(Mandatory=$true)][string]$DomainName
)

$BASE_URL = "https://porkbun.com/api/json/v3"

function Setup-Porkbun
{
  $records = (Invoke-PorkbunApi "dns/retrieve/$DomainName").records
  
  if ($record = Find-RecordByTypeName "CNAME" "*") {
    Invoke-PorkbunApi "dns/delete/$DomainName/$($record.id)"
    Write-Host "Deleted CNAME *"
  }

  if ($record = Find-RecordByTypeName "CNAME" "www") {
    if ($record.content -ne $DefaultHostname) {
      Invoke-PorkbunApi `
        "dns/edit/$DomainName/$($record.id)" `
        @{ content = $DefaultHostname }
      Write-Host "Updated CNAME www"
    } else {
      Write-Host "CNAME www does not need to be updated"
    }
  } else {
    Invoke-PorkbunApi `
      "dns/create/$DomainName" `
      @{
        name = "www"
        type = "CNAME"
        content = $DefaultHostname
      }
    Write-Host "Created CNAME www"
  }
}

function Invoke-PorkbunApi
{
  param (
    [Parameter(Mandatory=$true)][string]$Path,
    [Hashtable]$Contents
  )
  Invoke-RestMethod `
    -Method "POST" `
    -Body (ConvertTo-Json (
      (Merge-Objects `
        @{
          apikey = $ApiKey
          secretapikey = $SecretKey
        } `
        $Contents
      )
    )) `
    -Uri "$BASE_URL/$path"
}

function Merge-Objects
{
  $local:outputObject = @{}
  $args | ForEach-Object {
    if ($_) {
      $object = $_
      $object.Keys | ForEach-Object {
        $local:outputObject[$_] = $object[$_]
      }
    }
  }
  return $local:outputObject
}

function Find-Record
{
  param(
    [Parameter(Mandatory=$true)][ScriptBlock]$condition
  )
  $records |
    where $condition |
    select -First 1 
}

function Find-RecordByTypeName
{
  param(
    [Parameter(Mandatory=$true)][string]$type,
    [Parameter(Mandatory=$true)][string]$name
  )
  Find-Record {
    $_.type -eq $type -and `
    $_.name -eq "$name.$DomainName"
  }
}

Setup-Porkbun | Out-Null
