import {BX24} from "../utils/utils";

export function getCurrentID() {
  return new Promise((resolve, reject) => {
    try {
      BX24.init(function () {
        resolve(BX24.placement.info());
      });
    } catch (err) {
      reject(err);
    }
  });
}

export function taskGet(id) {
  return new Promise((resolve, reject) => {
    BX24.callMethod("crm.item.list",{entityTypeId: 180, "filter": {
      "@stageId": ["DT180_18:SUCCESS"],"@ufCrm12_1709726639": [id]}, "select": ['ufCrm12_1709726438', 'title']},(result) => {
      if (result.error()) {
        reject(result.error());
      } else {
        resolve(result.data());
      }
    });
  });
}

