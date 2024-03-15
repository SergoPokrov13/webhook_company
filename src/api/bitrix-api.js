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
    BX24.callMethod("crm.item.list",{entityTypeId: 180},(result) => {
      if (result.error()) {
        reject(result.error());
      } else {
        resolve(result.data());
      }
    });
  });
}

// export function taskComplete(id) {
//   return new Promise((resolve, reject) => {
//     BX24.callMethod("tasks.task.complete", { taskId: id }, (result) => {
//       if (result.error()) {
//         reject(result.error());
//       } else {
//         resolve(result.data());
//       }
//     });
//   });
// }

// export function taskAside(id) {
//   return new Promise((resolve, reject) => {
//     BX24.callMethod("tasks.task.defer", { taskId: id }, (result) => {
//       if (result.error()) {
//         reject(result.error());
//       } else {
//         resolve(result.data());
//       }
//     });
//   });
// }

