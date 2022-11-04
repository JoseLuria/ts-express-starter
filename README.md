# TS-Express Starter

Un starter de Express con TypeScript usando JSON Web Token y una base de datos de MongoDB.

**El proyecto incluye:**

- Un router basado en file system.
- Un archivo **_docker-compose.yml_** con una base de datos de mongo.
- Un archivo **_.prettierrc_** con una configuración básica.

## 🚀 ¿Como usar?

Primero clona el repositorio desde GitHub:

```shell
git clone https://github.com/JoseLuria/ts-express-starter.git
```

Muévete a la carpeta del proyecto:

```shell
cd ts-express-starter
```

Instala las dependencias con el siguiente comando:

```shell
npm install
```

Por último, inicia el servidor con el siguiente comando:

```shell
npm run dev
```

## 💾 Configurando la base de datos con Docker (Opcional)

_Para realizar este paso es obligatorio tener [Docker](https://www.docker.com/products/docker-desktop/) instalado, de igual forma puedes usar tu propia base de datos local o de MongoDB Atlas._

Debes usar el siguiente comando para levantar una base de datos de forma local con el archivo **_docker-compose.yml_**:

```shell
docker-compose up -d
```

La base de datos se iniciara en el puerto _27017_ y la información de la base de datos se almacenara en la carpeta mongo.

El string de conexión ya está incluido en el archivo **_.env.example_** y se ve así:

```text
MONGO_URL=mongodb://localhost:27017/databasename
```

🚨 Puedes abrir el archivo **_.env.example_** para ver un ejemplo con todas las variables de entorno, recuerda que debes crear tu propio archivo **_.env_** con tus varibles de entorno.

## 📁 Rutas por file system

El **_router_** de la aplicación funciona usando el file system, para agregar una nueva ruta es necesario crear en archivo con el nombre de dicha ruta en la carpeta de **_router_**.

Por ejemplo, el archivo **_hello.ts_** será representado en el **_router_** con la ruta _https://localhost:4000/api/hello_, para que dicho archivo funcione dentro debe de llevar la siguiente estructura:

```typescript
import { Router, Request, Response } from "express";

const router = Router();

// Los controladores de la ruta
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" })
});

export { router };

```

## ⚙️ Esta aplicación fue construida usando las siguientes tecnologías

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [JSON Web Tokens](https://jwt.io/)
- [Express Validator](https://express-validator.github.io/docs/)
- [MongoDB](https://www.mongodb.com/)

## 📄 Licencia

[MIT](https://opensource.org/licenses/MIT)
