# 🌍 Geolocalización en Notificaciones de Telegram

## 📋 Descripción

Se ha implementado un sistema de geolocalización que detecta automáticamente la región del usuario cuando agrega productos a favoritos, enviando esta información a través de notificaciones de Telegram.

## 🚀 Funcionalidades Implementadas

### 1. Detección Automática de Región
- **Servicio utilizado**: ipapi.co (gratuito y confiable)
- **Información obtenida**:
  - País con bandera emoji
  - Ciudad
  - Región/Estado
  - Código de país (ISO)
  - Dirección IP

### 2. Países Soportados con Banderas
- 🇨🇱 Chile
- 🇵🇪 Perú
- 🇨🇴 Colombia
- 🇦🇷 Argentina
- 🇲🇽 México
- 🇪🇨 Ecuador
- 🇧🇴 Bolivia
- 🇺🇾 Uruguay
- 🇵🇾 Paraguay
- 🇻🇪 Venezuela
- 🇧🇷 Brasil
- 🇺🇸 Estados Unidos
- 🇪🇸 España
- 🇫🇷 Francia
- 🇩🇪 Alemania
- 🇮🇹 Italia
- 🇬🇧 Reino Unido
- 🇨🇦 Canadá
- 🌍 Otros países (bandera genérica)

## 📨 Formato de Notificación Mejorado

Las notificaciones de Telegram ahora incluyen:

```
🟢 Producto añadido a favoritos

📦 Producto: "Nombre del Producto"
⏰ Hora: DD/MM/YYYY HH:MM
🌐 Origen: Tienda Web
🇨🇱 Región: Chile
🏙️ Ciudad: Santiago
🌎 IP: XXX.XXX.XXX.XXX

🛍️ Acción realizada desde Chile
```

## 🔧 Funciones Implementadas

### `getLocationFromIP()`
- Obtiene información de geolocalización basada en IP
- Manejo de errores robusto
- Valores por defecto en caso de fallo

### `sendTelegramNotification()` (Mejorada)
- Incluye detección automática de región
- Mensaje enriquecido con información geográfica
- Retorna información de ubicación en la respuesta

### `sendRegionStats()` (Nueva)
- Envía estadísticas detalladas de la región actual
- Útil para análisis y debugging
- Información completa de geolocalización

## 🧪 Componente de Prueba

Se ha actualizado `TelegramTest.astro` con:
- Nuevo botón "🌍 Enviar Estadísticas de Región"
- Visualización de información de región en resultados
- Pruebas completas de funcionalidad

## 📊 Beneficios

1. **Análisis de Mercado**: Conocer de qué países/regiones provienen los usuarios
2. **Segmentación**: Identificar mercados principales (Chile, Perú, Colombia, etc.)
3. **Personalización**: Posibilidad de adaptar contenido por región
4. **Estadísticas**: Datos valiosos para toma de decisiones
5. **Seguridad**: Monitoreo de actividad por ubicación

## 🔒 Consideraciones de Privacidad

- Solo se obtiene información de IP pública
- No se almacena información personal
- Servicio externo confiable (ipapi.co)
- Manejo seguro de errores

## 🚀 Uso

### Automático
Cada vez que un usuario agrega un producto a favoritos, se envía automáticamente la notificación con información de región.

### Manual (Pruebas)
1. Ir a la página con el componente `TelegramTest`
2. Hacer clic en "🌍 Enviar Estadísticas de Región"
3. Revisar el chat de Telegram para ver la información

## 🔧 Configuración

No requiere configuración adicional. La funcionalidad se activa automáticamente con las credenciales de Telegram existentes.

## 📝 Archivos Modificados

- `src/utils/telegram.js` - Funciones principales
- `src/components/tienda/ui/TelegramTest.astro` - Componente de prueba
- `src/components/tienda/ui/FavoriteButton.astro` - Sin cambios (usa automáticamente la nueva funcionalidad)

## 🌟 Próximas Mejoras

- Almacenamiento local de estadísticas
- Dashboard de análisis de regiones
- Notificaciones personalizadas por país
- Integración con Google Analytics