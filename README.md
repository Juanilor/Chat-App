# Chat-App


Pasos a seguir para levantar lado del back en la aplicacion..


1- Iniciar node package en carpeta backend (npm init -y)
2- Instalar dependecias a usar (express, jwt, bcrypt,cookie-parser, dotenv,y no se cual mas voy a usar)
3- Acomodar en el package para poder usar modulos, y el watch para que se actualice el servidor solo. 
3.5 - Crear archivo .env, dentro van las variables de entorno (puerto, jwtToken, dbPass, etc.)


4- Levantar servidor con express

4.5 - Instalar Mongoose (me olvide al instalar las otras dependencias)

5- Crear carpetas de Auth (Rutas y Controladores)
5.1 - Creacion de componente sign up 
5.1.2 - Creacion carpeta models y model de User con mongoose 

6- Conexion a base de datos (MongoDB)
6.1 - Creacion carpeta DB y componente connectToDB.js

7- Componente sign Up funcionando 

7.1 - Creacion carpeta Utils y token con jwt para autenticacion y creacion de sesion y cookies

7.2 - Inclusion de cookie al crear usuario 

7.3 - Componente sign Up completo

Creacion componente login

1- Crear ruta y funcion login

2- recuperar username y password del body de la request 

3- creacion de constante user y fijarme si el user ya existe en la base de dato de manera asincrona

4- comparar el password de la request con el del usuario retornado de la base de datos

4.1 - validar si el password y el usuario son correctos.

5- generar token de sesion pasando el id de usuario y la res

6- retornar informacion de usuario requerida

Creacion componente logout

1- retornar de la respuesta la cookie de sesion 

1.1- llevar la edad de la cookie a 0 para que se muera sola

2- retornar mensaje de finalizacion de la sesion