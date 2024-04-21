const axios = require("axios");
const webhook = `https://b24.schtandart.com/rest/2516/poigumi6wtbwboxw/`;
let resaultCompany = [];

CompanyGetList(0);

async function addSecondCompany(arr) {
  console.log(arr[0]);
  // arr.map((element) => {
    // console.log(arr[0].mainCompany, arr[0].secondCompany);
    // axios.get(webhook + "crm.company.update", {
    //   params: {
    //     id: arr[0].mainCompany,
    //     fields: {
    //       "UF_CRM_1713714654": arr[0].secondCompany,
    //     },
    //   },
    // });
  // });
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
      filter: { ">ID": lastId, "!UF_CRM_1652945793": "" },
      select: ["ID", "UF_CRM_1652945793"],
      start: -1,
    },
  });
  if (data.result.length > 0) {
    lastId = data.result.at(-1)["ID"];
    for (key in data.result) {
      parserArr(data.result[key].UF_CRM_1652945793, data.result[key].ID);
    }
    CompanyGetList(lastId);
    console.log(data.result);
  } else {
    addSecondCompany(resaultCompany);
    console.log("finish");
  }
}
