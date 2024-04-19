const GOLOVNOY = "UF_CRM_1713469133";
const DOCHERNIY = "UF_CRM_1713278591";

const axios = require("axios");
const webhook = `https://itr24.bitrix24.ru/rest/1/9fw61yqqc6se2xeq/`;
let object = {};
let arr = [];
let newArr = [];
CompanyGetList(0);
async function addDocher(object) {
  console.log(object);
}

async function CompanyGetList(lastId) {
  // console.log(lastId, "lastId");
  let { data } = await axios.get(webhook + "crm.company.list", {
    params: {
      order: { ID: "ASC" },
      filter: { ">ID": lastId },
      select: ["ID", GOLOVNOY],
      start: -1,
    },
  });
  if (data.result.length > 0) {
    data.result.map((i) => {
      if (i[GOLOVNOY]) {
        object = { glav: i[GOLOVNOY], docher: i.ID };
        arr.push(object);
      }
    });
    lastId = data.result.at(-1)["ID"];
    // await addDocher(object);
    CompanyGetList(lastId);
  } else {
    arr.map((item) => {
      if (newArr.length > 1) {
        newArr.map((element) => {
          // console.log(element.glav, item.glav)
          if (element.glav == item.glav) {
            // тут нужно удалить предыдущий элемент массива у которого такое же значение glav
            console.log(newArr);
            object = { glav: item.glav, docher: [item.docher, element.docher] };
            console.log(object);
            newArr.push(object);
          }
        });
      } else {
        newArr.push(item);
      }
    });
    console.log(arr,newArr, "finish");
  }
}

