import {
  BX24,
  TITLE,
  ID,
  SKAN,
  VIEW,
  DATE_START,
  DATE_END,
  NUMBER,
  TYPE_END,
  DURATION,
  PRICE,
  CONDITION_PRICE,
  ACCOUNTING_CENTERE,
  AD_AGREEMENTS,
  MAIN_AGREEMENT,
  TYPE_DOCUMENT,
} from "../utils/utils";

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

export function agreementList(id) {
  console.log(id)
  let arr = [];
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "crm.item.list",
      {
        entityTypeId: 145,
        filter: {
          "@stageId": ["DT145_10:SUCCESS", "DT145_10:PREPARATION"],
          "@ufCrm6_1702368155": [id], 
        },
        select: [
          TITLE,
          ID,
          SKAN,
          VIEW,
          DATE_START,
          DATE_END,
          NUMBER,
          TYPE_END,
          DURATION,
          PRICE,
          CONDITION_PRICE,
          ACCOUNTING_CENTERE,
          AD_AGREEMENTS,
          MAIN_AGREEMENT,
          TYPE_DOCUMENT,
        ],
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          arr = arr.concat(result.data().items);
          if (result.more()) {
            result.next();
          } else {
            resolve({ items: arr });
          }
        }
      }
    );
  });
}

export function agreementFields() {
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "crm.item.fields",
      {
        entityTypeId: 145,
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          resolve(result.data());
        }
      }
    );
  });
}

export function listGet(arr) {
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "lists.element.get",
      {
        IBLOCK_TYPE_ID: "lists",
        IBLOCK_ID: "116",
        FILTER: {
          PROPERTY_1560: arr,
        },
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          resolve(result.data());
        }
      }
    );
  });
}

export function setIdFile(id) {
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "lists.element.get",
      {
        IBLOCK_TYPE_ID: "lists",
        IBLOCK_ID: "116",
        ELEMENT_ID: id,
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          resolve(Object.values(result.data()[0]["PROPERTY_216"])[0]);
        }
      }
    );
  });
}

export function setID() {
  let arr = [];
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "lists.element.get",
      {
        IBLOCK_TYPE_ID: "lists",
        IBLOCK_ID: "106",
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          arr = arr.concat(result.data());
          if (result.more()) {
            result.next();
          } else {
            resolve({ items: arr });
          }
        }
      }
    );
  });
}

export function addObject(id) {
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "disk.attachedObject.get",
      {
        id: id,
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          resolve(result.data());
        }
      }
    );
  });
}

export function diskGet(id) {
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "disk.file.get",
      {
        id: id,
      },
      (result) => {
        if (result.error()) {
          reject(result.error());
        } else {
          resolve(result.data());
        }
      }
    );
  });
}
