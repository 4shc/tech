// jwt segunda parte !TERMINAR

/* 
// VERIFICACION
const verificacion = express.Router();

verificacion.use((req, res, next) => {
  let token = req.headers['access-token'] || req.headers['authorization'];
  console.log(token);
});

app.get('/info', verificacion, (req, res) =>{
  res.json({msg: "Token validado "});
});
 */


// Complejidad temporal y espacial 


// Iniciando con el back-end. Trabajamos con MongoDB y Express
// Creando cuenta MongoBD
// Usuario: 4USER
// Contraseña: 4MIn4C_.ON
// mongodb+srv://4USER:4MIn4C_.ON@cluster0.4bxgl6w.mongodb.net/

// Creamos el directorio raíz (Proyecto), y en el directorio para nuestro backend, donde 
// iniciaremos nuestro proyecto node, e instalamos las dependencias necesarias.
// npm init -y
// instalar dependencias mongodb
// npm i express
// npm i mongoose dotenv cors
// npm i -D nodemon // Trae los datos del servidor y los actualiza en tiempo real 