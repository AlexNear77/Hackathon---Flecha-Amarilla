# Estructura del Proyecto

Este proyecto sigue una estructura modular y clara para facilitar su desarrollo y mantenimiento. A continuación, se describe el propósito de cada carpeta principal:

## `/controllers`

Esta carpeta contiene los controladores de la aplicación. Los controladores son responsables de manejar la lógica de negocio de las solicitudes HTTP. Cada controlador se encarga de procesar las entradas (requests), interactuar con modelos de datos u otros servicios, y devolver una respuesta (response) al cliente.

## `/db`

Aquí se encuentra la configuración de la base de datos y cualquier script relacionado con la gestión de la base de datos (como migraciones o semillas). Esta estructura ayuda a separar claramente la lógica de la aplicación de la configuración de la base de datos, facilitando cambios o actualizaciones en la misma.

## `/models`

En la carpeta de modelos se definen los esquemas o estructuras de datos de la aplicación. Los modelos representan y definen las estructuras de datos que la aplicación utilizará, usualmente correspondiendo a tablas en una base de datos. Esta capa de abstracción facilita la interacción con la base de datos mediante operaciones de alto nivel.

## `/routes`

Las rutas definen los endpoints de la API o las rutas de la aplicación web y conectan las solicitudes HTTP con los controladores específicos que deben manejarlas. Esta organización permite una fácil navegación y mantenimiento de las rutas disponibles en la aplicación.

## `/server.js`

Este es el punto de entrada de la aplicación, donde se configura el servidor HTTP, se registran los middleware globales y se inicia el servidor para escuchar en un puerto específico. Aquí también se realizan las conexiones iniciales a servicios externos, como bases de datos.

# Cómo Empezar

Instrucciones sobre cómo instalar dependencias, configurar el proyecto y ejecutarlo en un entorno local para desarrollo.

```bash
npm install       # Instala las dependencias
node server.js    # Inicia el servidor en el puerto definido
