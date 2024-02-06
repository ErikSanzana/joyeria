import express from "express";
/* Crear un nuevo servidor de aplicaciones Express.
Definir rutas para tu aplicación web, especificando qué funciones se deben llamar cuando se accede a una URL específica.
Usar middleware para procesar solicitudes y respuestas.
Escuchar solicitudes HTTP en un puerto específico. */
import { logger } from "logger-express";
/* Por lo tanto, al importar logger de logger-express, el código 
puede utilizar este middleware para registrar automáticamente los detalles de todas las solicitudes HTTP que llegan al servidor Express */
import cors from "cors";
/* CORS es el acrónimo de Cross-Origin Resource Sharing (Compartición de Recursos de Origen Cruzado). Es un mecanismo que permite que muchos recursos 
(por ejemplo, fuentes, JavaScript, etc.) en una página web sean solicitados desde otro dominio fuera del dominio de la página web de origen. */
import dotenv from "dotenv";
/* cargar variables de entorno izi */
import { db, PORT } from "./config/postgress.js";
import { router } from "./app/routes/joyeriaRoutes.js";
dotenv.config();
const app = express();

const loggerOption = {
  logToFile: true, 
  colorize: true, 
  infoColor: "yellow", 
  errorColor: "red",
};
/* cuidado con el orden no puedes llamar sin antes declarar */

app.use(cors());
app.use(logger(loggerOption));
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message + "fallo ",
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("crash!!! ☠ ☠", error);
  } else {
    console.log(
      ` http://${db.host}:${PORT}   conectado de manera exitosa`
    );
  }
});
