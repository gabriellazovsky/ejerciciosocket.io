# ejerciciosocket.io

# 📄 Chat con Express y Socket.IO

Este proyecto es un ejemplo completo de chat en tiempo real usando **Node.js**, **Express**, **Socket.IO** y **sessions**. Permite:

- Login de usuarios  
- Acceso al chat solo para usuarios autenticados  
- Mostrar el nombre de usuario en cada mensaje  
- Historial de los últimos mensajes enviados  
- Chats privados entre usuarios  
- Chat disponible en cualquier página del sitio  

---

## 📦 Dependencias

- Node.js v22+  
- express  
- express-session  
- socket.io  
- cookie-parser  
- morgan  
- ejs  
- debug  

Instalación:

```bash
npm install express express-session socket.io cookie-parser morgan ejs debug
```

---

## 📂 Estructura de archivos

```
/bin
  www               # Servidor y Socket.IO
/routes
  index.js          # Login
  chat.js           # Ruta del chat (protegida)
/views
  login.ejs         # Página de login
  chat.ejs          # Página de chat
/public
  chat.js           # Cliente Socket.IO
app.js              # Configuración Express y sesiones
package.json
```

---

## ⚙️ Uso

1. Clonar el repositorio o copiar los archivos  
2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor:

```bash
node ./bin/www
```

4. Abrir en el navegador:

```
http://localhost:3000/
```

5. Iniciar sesión con cualquier nombre de usuario.  
6. Abrir otra pestaña con otro usuario para probar el chat multiusuario.  

---

## 💬 Funcionalidades

### Chat Global

- Todos los usuarios logueados pueden enviar mensajes.  
- Cada mensaje muestra el nombre del usuario.  
- Historial de los últimos 50 mensajes.

### Chat Privado

- Puedes enviar mensajes privados a otro usuario:  
  ```js
  socket.emit('private', { to: 'Usuario', message: 'Hola!' })
  ```

### Chat Flotante

- El chat está siempre disponible en la página donde esté el usuario.  
- Se puede mejorar con CSS para un widget flotante.

### Seguridad

- Solo usuarios autenticados pueden acceder al chat.  
- Se utiliza **express-session** para mantener la sesión.  
- Cada socket obtiene el usuario de la sesión para asegurar mensajes correctos.

---

## 🔧 Personalización

- Cambiar la cantidad de mensajes históricos: `if(messages.length > 50) messages.shift();`  
- Cambiar el secreto de sesión: `secret: 'secreto123'` en `app.js`  
- Agregar rutas adicionales y hacer que el chat sea accesible en todas ellas.  

---

## 📌 Notas

- Este proyecto es un ejemplo educativo y no incluye almacenamiento en base de datos.  
- Para producción, se recomienda usar **Redis o MongoDB** para sesiones y mensajes persistentes.  
