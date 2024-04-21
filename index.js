const mainCompany = "UF_CRM_1713469133";
const secondCompany = "UF_CRM_1713278591";
const axios = require("axios");
const webhook = `https://itr24.bitrix24.ru/rest/1/9fw61yqqc6se2xeq/`;
let resaultCompany = [];

CompanyGetList(0);

async function addSecondCompany(arr) {
  console.log(arr);
  arr.map((element) => {
    console.log(element.mainCompany, element.secondCompany);
    axios.get(webhook + "crm.company.update", {
      params: {
        id: element.mainCompany,
        fields: {
          [secondCompany]: element.secondCompany,
        },
      },
    });
  });
}

function parserArr(mCompany, sCompany) {
  let indexMainCompany = resaultCompany.findIndex((item) => {
    return item.mainCompany === mCompany;
  });
  if (indexMainCompany == -1) {
    resaultCompany.push({ mainCompany: mCompany, secondCompany: [sCompany] });
  } else {
    resaultCompany[indexMainCompany].secondCompany.push(sCompany);
  }
}

async function CompanyGetList(lastId) {
  // console.log(lastId, "lastId");
  let { data } = await axios.get(webhook + "crm.company.list", {
    params: {
      order: { ID: "ASC" },
      filter: { ">ID": lastId, "!UF_CRM_1713469133": "" },
      select: ["ID", mainCompany],
      start: -1,
    },
  });
  if (data.result.length > 0) {
    lastId = data.result.at(-1)["ID"];
    for (key in data.result) {
      parserArr(data.result[key].UF_CRM_1713469133, data.result[key].ID);
    }
    CompanyGetList(lastId);
    console.log(data.result);
  } else {
    addSecondCompany(resaultCompany);
    console.log("finish");
  }
}
