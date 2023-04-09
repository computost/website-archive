const { env } = require("process");

setupPorkbun().catch((error) => {
  console.error(error);
});

async function setupPorkbun() {
  const baseUrl = "https://porkbun.com/api/json/v3";
  const apiKey = env["INPUT_API-KEY"];
  const apiSecretKey = env["INPUT_SECRET-KEY"];
  const defaultHostname = env["INPUT_DEFAULT-HOSTNAME"];
  const domainName = env["INPUT_DOMAIN-NAME"];

  const records = (await execute(`dns/retrieve/${domainName}`)).records;
  let record;

  if ((record = find("CNAME", "*"))) {
    await execute(`dns/delete/${domainName}/${record.id}`);
    console.log("Deleted CNAME *");
  }

  if ((record = find("CNAME", "www"))) {
    if (record.content !== defaultHostname) {
      await execute(`dns/edit/${domainName}/${record.id}`, {
        content: defaultHostname,
      });
      console.log("Updated www CNAME");
    } else {
      console.log("www CNAME does not need to be updated");
    }
  } else {
    await execute(`dns/create/${domainName}`, {
      name: "www",
      type: "CNAME",
      content: defaultHostname,
    });
    console.log("Updated www CNAME");
  }

  function find(type, name) {
    return records.find(
      (record) =>
        record.type === type && record.name === `${name}.${domainName}`
    );
  }

  async function execute(path, object) {
    const response = await fetch(`${baseUrl}/${path}`, {
      method: "POST",
      body: JSON.stringify({
        ...object,
        secretapikey: apiSecretKey,
        apikey: apiKey,
      }),
    });
    if (!response.ok) {
      throw new Error(`${response.status}: ${await response.text()}`);
    }
    return response.json();
  }
}
