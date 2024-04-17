const GOLOVNOY = "UF_CRM_1713200303";
const DOCHERNIY = "UF_CRM_1713278591";

fetch("https://itr24.bitrix24.ru/rest/1/9fw61yqqc6se2xeq/crm.company.list.json")
  .then((res) => res.json())
  .then((result) => {
    result.result.map((item) => {
      // console.log(item);
      fetch(
        "https://itr24.bitrix24.ru/rest/1/54eoiyquodgp4a4g/crm.company.get.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: item.ID }),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.result[GOLOVNOY]) {
            let idCompany;
            result.result[GOLOVNOY].map((i) => {
              idCompany = i;
            });
            console.log(idCompany, item.ID);
            fetch(
              "https://itr24.bitrix24.ru/rest/1/54eoiyquodgp4a4g/crm.company.get.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: idCompany }),
              }
            )
              .then((res) => res.json())
              .then((result) => {
                if (result.result[DOCHERNIY].length > 0) {
                  console.log(result.result[DOCHERNIY]);
                } else {
                  fetch(
                    "https://itr24.bitrix24.ru/rest/1/cghla29h9k1053w1/crm.company.update.json",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        id: idCompany,
                        fields: {
                          [DOCHERNIY]: item.ID,
                        },
                      }),
                    }
                  ).then((res) => res.json());
                }
              });
          }
        });
    });
  });

//     if (result.result[GOLOVNOY]) {

//
//             console.log(result.result);

//           });
//       });
//       // console.log(result.result[GOLOVNOY], item.ID);
//     }
//   });
