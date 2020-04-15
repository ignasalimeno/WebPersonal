const app = require("./app");
const port = process.env.PORT || 3978;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

app.listen(port);

// mongoose.set("useFindAndModify", false);

// mongoose.connect(
//   `mongodb://${IP_SERVER}:${PORT_DB}/webPersonal`,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, res) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("La conexión fue satisfactoria");

//       app.listen(port, () => {
//         console.log("#######################");
//         console.log("####### API REST ######");
//         console.log("#######################");
//         console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
//       });
//     }
//   }
// );
