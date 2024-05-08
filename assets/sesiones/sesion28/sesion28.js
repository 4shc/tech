// Sesión 28
//En esta cuarta parte vamos a realizar otro backend esta vez con una base de datos relacional. Antes habíamos creado nuestro proyecto con una base de datos no relacional como lo era MongoDb, ahora trabajaremos con un gestor Sql en este caso usaremos Xampp.

// Iniciamos un nuevo proyecto y descargamos nuestras dependencias
// npm init -y
  // npm i express
  // npm i cors sequelize mysql2 
  // Documentación de sequelize sehttps://sequelize.org/docs/v6/core-concepts/model-basics/
  // npm i nodemon -D

// En este proyecto no trabajamos con REQUIRE trabajaremos con módulos, 
// para ello modifica nuestra package.json y antes creamos el directorio y archivo principal  'src/index.js'
/*
  {
    "name": "backend-mysql",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "type": "module", // le especificamos que vamos a trabajar con Módulos y no con require
    "scripts": {
      "start": "nodemon src/index.js" // Modificamos para que inicie nuestra app con nodemon desde nuestra ruta src/index.js
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.19.2",
      "mysql2": "^3.9.6",
      "sequelize": "^6.37.3"
    },
    "devDependencies": {
      "nodemon": "^3.1.0"
    }
  }
  */

// En xampp creamos la base de datos y la tabla 'citas'. 'Sequelize' en su documentación 
// nos recomienda que creemos dos campos adicionales en nuestra base de datos: 
// 'createdAt' y 'updatedAt' de tipo 'date'.


