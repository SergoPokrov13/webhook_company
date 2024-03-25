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
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "crm.item.list",
      {
        entityTypeId: 180,
        filter: {
          "@stageId": ["DT180_18:SUCCESS"],
          "@ufCrm12_1709726639": [id],
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
        ],
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

export function agreementFields() {
  return new Promise((resolve, reject) => {
    BX24.callMethod(
      "crm.item.fields",
      {
        entityTypeId: 180,
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
        IBLOCK_ID: "36",
        FILTER: {
          "PROPERTY_218": arr,
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
  return new Promise(() => {
    BX24.callMethod(
      "lists.element.get",
      {
        'IBLOCK_TYPE_ID': 'lists',
        'IBLOCK_ID': '36',
        'ELEMENT_ID': id
      },
      function (result) {
        if (result.error())
          console.error(result.error());
        else{
          let filesId = Object.values(result.data()[0]['PROPERTY_216'])[0]
          for (const key in filesId) {
            BX24.callMethod(
              "disk.attachedObject.get",
              {
                id: filesId[key]
              },
              function (result) {
                if (result.error())
                  console.error(result.error());
                else
                  console.dir(result.data()['OBJECT_ID']);
              }
            );
          }
          
        }
        
      }
    );
  });
}


