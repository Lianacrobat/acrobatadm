# Configuración de EmailJS para Testimonios

## Pasos para configurar el envío de correos electrónicos

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu correo electrónico

### 2. Configurar el servicio de correo
1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de correo (Gmail, Outlook, etc.)
4. Configura las credenciales de tu correo `acrobatadm@hotmail.com`
5. Anota el **Service ID** generado

### 3. Crear plantilla de correo
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura la plantilla con los siguientes campos:
   - **To Email**: {{to_email}}
   - **From Name**: {{from_name}}
   - **Subject**: {{subject}}
   - **Message**: {{message}}

#### Plantilla sugerida:
```
Asunto: {{subject}}

De: {{from_name}}

{{message}}

---
Detalles del testimonio:
Nombre: {{nombre}}
Instagram: {{instagram}}
Cargo: {{cargo}}
Empresa: {{empresa}}
País: {{pais}}
Fecha de compra: {{fecha_compra}}

Testimonio:
{{testimonio}}
```

4. Anota el **Template ID** generado

### 4. Obtener clave pública
1. Ve a "Account" > "General"
2. Copia tu **Public Key**

### 5. Actualizar el código
En el archivo `src/pages/testimonios.astro`, reemplaza:

```javascript
// Línea ~552
emailjs.init("YOUR_PUBLIC_KEY"); // Reemplazar con tu clave pública

// Líneas ~756-757
const result = await emailjs.send(
    'YOUR_SERVICE_ID', // Reemplazar con tu Service ID
    'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID
    templateParams
);
```

### 6. Configuración de Telegram (ya funcional)
El sistema de Telegram ya está configurado y funcionando con:
- Token del bot desde `.env`
- Chat ID desde `.env`
- API endpoint en `/api/telegram-testimonios`

### 7. Pruebas
1. Completa el formulario de testimonios
2. Prueba cada método de envío:
   - WhatsApp (abre enlace directo)
   - Telegram (envía via API)
   - Correo (requiere configuración EmailJS)

## Notas importantes
- El servicio gratuito de EmailJS permite 200 correos por mes
- Para mayor volumen, considera un plan de pago
- Mantén seguras tus credenciales
- El sistema de Telegram ya está completamente funcional

## Solución de problemas
- Si EmailJS no funciona, los usuarios pueden usar WhatsApp o Telegram
- Verifica que las credenciales estén correctamente configuradas
- Revisa la consola del navegador para errores específicos