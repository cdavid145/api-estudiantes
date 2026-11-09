# Imagen base oficial Node.js 18 (versión Alpine, que es muy liviana)
FROM node:18-alpine

# Creamos y nos movemos a la carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de configuración de paquetes
COPY package*.json ./

# Instalamos solo las dependencias necesarias para producción
RUN npm install --production

# Copiamos todo el resto del código fuente de tu API.El primer punto (.) representa el origen: Es nuestra carpeta actual en Windows (la ruta api-estudiantes donde estamos trabajando).
# El segundo punto (.) representa el destino: Es la carpeta interna del contenedor (la que definimos un par de líneas más arriba con WORKDIR /usr/src/app).
COPY . .    

# Le decimos al contenedor que vamos a usar el puerto 3000
EXPOSE 3000

# El comando que ejecutará Docker por defecto para encender la API
CMD ["npm", "start"]