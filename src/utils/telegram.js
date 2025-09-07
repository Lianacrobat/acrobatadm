// Telegram notification utility
import { handleError, handleAsyncError } from "./errorHandler.js";

// Función para obtener información de geolocalización basada en IP
async function getLocationFromIP() {
  try {
    // Usar ipapi.co que es gratuito y confiable
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AcrobatApp/1.0)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    
    // Mapear códigos de país a nombres en español y banderas
    const countryMap = {
      'AF': { name: 'Afganistán', flag: '🇦🇫' },
      'AX': { name: 'Islas Åland', flag: '🇦🇽' },
      'AL': { name: 'Albania', flag: '🇦🇱' },
      'DZ': { name: 'Argelia', flag: '🇩🇿' },
      'AS': { name: 'Samoa Americana', flag: '🇦🇸' },
      'AD': { name: 'Andorra', flag: '🇦🇩' },
      'AO': { name: 'Angola', flag: '🇦🇴' },
      'AI': { name: 'Anguila', flag: '🇦🇮' },
      'AQ': { name: 'Antártida', flag: '🇦🇶' },
      'AG': { name: 'Antigua y Barbuda', flag: '🇦🇬' },
      'AR': { name: 'Argentina', flag: '🇦🇷' },
      'AM': { name: 'Armenia', flag: '🇦🇲' },
      'AW': { name: 'Aruba', flag: '🇦🇼' },
      'AU': { name: 'Australia', flag: '🇦🇺' },
      'AT': { name: 'Austria', flag: '🇦🇹' },
      'AZ': { name: 'Azerbaiyán', flag: '🇦🇿' },
      'BS': { name: 'Bahamas', flag: '🇧🇸' },
      'BH': { name: 'Baréin', flag: '🇧🇭' },
      'BD': { name: 'Bangladés', flag: '🇧🇩' },
      'BB': { name: 'Barbados', flag: '🇧🇧' },
      'BY': { name: 'Bielorrusia', flag: '🇧🇾' },
      'BE': { name: 'Bélgica', flag: '🇧🇪' },
      'BZ': { name: 'Belice', flag: '🇧🇿' },
      'BJ': { name: 'Benín', flag: '🇧🇯' },
      'BM': { name: 'Bermudas', flag: '🇧🇲' },
      'BT': { name: 'Bután', flag: '🇧🇹' },
      'BO': { name: 'Bolivia', flag: '🇧🇴' },
      'BQ': { name: 'Bonaire, San Eustaquio y Saba', flag: '🇧🇶' },
      'BA': { name: 'Bosnia y Herzegovina', flag: '🇧🇦' },
      'BW': { name: 'Botsuana', flag: '🇧🇼' },
      'BV': { name: 'Isla Bouvet', flag: '🇧🇻' },
      'BR': { name: 'Brasil', flag: '🇧🇷' },
      'IO': { name: 'Territorio Británico del Océano Índico', flag: '🇮🇴' },
      'BN': { name: 'Brunéi', flag: '🇧🇳' },
      'BG': { name: 'Bulgaria', flag: '🇧🇬' },
      'BF': { name: 'Burkina Faso', flag: '🇧🇫' },
      'BI': { name: 'Burundi', flag: '🇧🇮' },
      'CV': { name: 'Cabo Verde', flag: '🇨🇻' },
      'KH': { name: 'Camboya', flag: '🇰🇭' },
      'CM': { name: 'Camerún', flag: '🇨🇲' },
      'CA': { name: 'Canadá', flag: '🇨🇦' },
      'KY': { name: 'Islas Caimán', flag: '🇰🇾' },
      'CF': { name: 'República Centroafricana', flag: '🇨🇫' },
      'TD': { name: 'Chad', flag: '🇹🇩' },
      'CL': { name: 'Chile', flag: '🇨🇱' },
      'CN': { name: 'China', flag: '🇨🇳' },
      'CX': { name: 'Isla de Navidad', flag: '🇨🇽' },
      'CC': { name: 'Islas Cocos', flag: '🇨🇨' },
      'CO': { name: 'Colombia', flag: '🇨🇴' },
      'KM': { name: 'Comoras', flag: '🇰🇲' },
      'CG': { name: 'Congo', flag: '🇨🇬' },
      'CD': { name: 'República Democrática del Congo', flag: '🇨🇩' },
      'CK': { name: 'Islas Cook', flag: '🇨🇰' },
      'CR': { name: 'Costa Rica', flag: '🇨🇷' },
      'CI': { name: 'Costa de Marfil', flag: '🇨🇮' },
      'HR': { name: 'Croacia', flag: '🇭🇷' },
      'CU': { name: 'Cuba', flag: '🇨🇺' },
      'CW': { name: 'Curazao', flag: '🇨🇼' },
      'CY': { name: 'Chipre', flag: '🇨🇾' },
      'CZ': { name: 'Chequia', flag: '🇨🇿' },
      'DK': { name: 'Dinamarca', flag: '🇩🇰' },
      'DJ': { name: 'Yibuti', flag: '🇩🇯' },
      'DM': { name: 'Dominica', flag: '🇩🇲' },
      'DO': { name: 'República Dominicana', flag: '🇩🇴' },
      'EC': { name: 'Ecuador', flag: '🇪🇨' },
      'EG': { name: 'Egipto', flag: '🇪🇬' },
      'SV': { name: 'El Salvador', flag: '🇸🇻' },
      'GQ': { name: 'Guinea Ecuatorial', flag: '🇬🇶' },
      'ER': { name: 'Eritrea', flag: '🇪🇷' },
      'EE': { name: 'Estonia', flag: '🇪🇪' },
      'SZ': { name: 'Esuatini', flag: '🇸🇿' },
      'ET': { name: 'Etiopía', flag: '🇪🇹' },
      'FK': { name: 'Islas Malvinas', flag: '🇫🇰' },
      'FO': { name: 'Islas Feroe', flag: '🇫🇴' },
      'FJ': { name: 'Fiyi', flag: '🇫🇯' },
      'FI': { name: 'Finlandia', flag: '🇫🇮' },
      'FR': { name: 'Francia', flag: '🇫🇷' },
      'GF': { name: 'Guayana Francesa', flag: '🇬🇫' },
      'PF': { name: 'Polinesia Francesa', flag: '🇵🇫' },
      'TF': { name: 'Tierras Australes y Antárticas Francesas', flag: '🇹🇫' },
      'GA': { name: 'Gabón', flag: '🇬🇦' },
      'GM': { name: 'Gambia', flag: '🇬🇲' },
      'GE': { name: 'Georgia', flag: '🇬🇪' },
      'DE': { name: 'Alemania', flag: '🇩🇪' },
      'GH': { name: 'Ghana', flag: '🇬🇭' },
      'GI': { name: 'Gibraltar', flag: '🇬🇮' },
      'GR': { name: 'Grecia', flag: '🇬🇷' },
      'GL': { name: 'Groenlandia', flag: '🇬🇱' },
      'GD': { name: 'Granada', flag: '🇬🇩' },
      'GP': { name: 'Guadalupe', flag: '🇬🇵' },
      'GU': { name: 'Guam', flag: '🇬🇺' },
      'GT': { name: 'Guatemala', flag: '🇬🇹' },
      'GG': { name: 'Guernsey', flag: '🇬🇬' },
      'GN': { name: 'Guinea', flag: '🇬🇳' },
      'GW': { name: 'Guinea-Bisáu', flag: '🇬🇼' },
      'GY': { name: 'Guyana', flag: '🇬🇾' },
      'HT': { name: 'Haití', flag: '🇭🇹' },
      'HM': { name: 'Islas Heard y McDonald', flag: '🇭🇲' },
      'VA': { name: 'Ciudad del Vaticano', flag: '🇻🇦' },
      'HN': { name: 'Honduras', flag: '🇭🇳' },
      'HK': { name: 'Hong Kong', flag: '🇭🇰' },
      'HU': { name: 'Hungría', flag: '🇭🇺' },
      'IS': { name: 'Islandia', flag: '🇮🇸' },
      'IN': { name: 'India', flag: '🇮🇳' },
      'ID': { name: 'Indonesia', flag: '🇮🇩' },
      'IR': { name: 'Irán', flag: '🇮🇷' },
      'IQ': { name: 'Irak', flag: '🇮🇶' },
      'IE': { name: 'Irlanda', flag: '🇮🇪' },
      'IM': { name: 'Isla de Man', flag: '🇮🇲' },
      'IL': { name: 'Israel', flag: '🇮🇱' },
      'IT': { name: 'Italia', flag: '🇮🇹' },
      'JM': { name: 'Jamaica', flag: '🇯🇲' },
      'JP': { name: 'Japón', flag: '🇯🇵' },
      'JE': { name: 'Jersey', flag: '🇯🇪' },
      'JO': { name: 'Jordania', flag: '🇯🇴' },
      'KZ': { name: 'Kazajistán', flag: '🇰🇿' },
      'KE': { name: 'Kenia', flag: '🇰🇪' },
      'KI': { name: 'Kiribati', flag: '🇰🇮' },
      'KP': { name: 'Corea del Norte', flag: '🇰🇵' },
      'KR': { name: 'Corea del Sur', flag: '🇰🇷' },
      'KW': { name: 'Kuwait', flag: '🇰🇼' },
      'KG': { name: 'Kirguistán', flag: '🇰🇬' },
      'LA': { name: 'Laos', flag: '🇱🇦' },
      'LV': { name: 'Letonia', flag: '🇱🇻' },
      'LB': { name: 'Líbano', flag: '🇱🇧' },
      'LS': { name: 'Lesoto', flag: '🇱🇸' },
      'LR': { name: 'Liberia', flag: '🇱🇷' },
      'LY': { name: 'Libia', flag: '🇱🇾' },
      'LI': { name: 'Liechtenstein', flag: '🇱🇮' },
      'LT': { name: 'Lituania', flag: '🇱🇹' },
      'LU': { name: 'Luxemburgo', flag: '🇱🇺' },
      'MO': { name: 'Macao', flag: '🇲🇴' },
      'MG': { name: 'Madagascar', flag: '🇲🇬' },
      'MW': { name: 'Malaui', flag: '🇲🇼' },
      'MY': { name: 'Malasia', flag: '🇲🇾' },
      'MV': { name: 'Maldivas', flag: '🇲🇻' },
      'ML': { name: 'Malí', flag: '🇲🇱' },
      'MT': { name: 'Malta', flag: '🇲🇹' },
      'MH': { name: 'Islas Marshall', flag: '🇲🇭' },
      'MQ': { name: 'Martinica', flag: '🇲🇶' },
      'MR': { name: 'Mauritania', flag: '🇲🇷' },
      'MU': { name: 'Mauricio', flag: '🇲🇺' },
      'YT': { name: 'Mayotte', flag: '🇾🇹' },
      'MX': { name: 'México', flag: '🇲🇽' },
      'FM': { name: 'Micronesia', flag: '🇫🇲' },
      'MD': { name: 'Moldavia', flag: '🇲🇩' },
      'MC': { name: 'Mónaco', flag: '🇲🇨' },
      'MN': { name: 'Mongolia', flag: '🇲🇳' },
      'ME': { name: 'Montenegro', flag: '🇲🇪' },
      'MS': { name: 'Montserrat', flag: '🇲🇸' },
      'MA': { name: 'Marruecos', flag: '🇲🇦' },
      'MZ': { name: 'Mozambique', flag: '🇲🇿' },
      'MM': { name: 'Myanmar', flag: '🇲🇲' },
      'NA': { name: 'Namibia', flag: '🇳🇦' },
      'NR': { name: 'Nauru', flag: '🇳🇷' },
      'NP': { name: 'Nepal', flag: '🇳🇵' },
      'NL': { name: 'Países Bajos', flag: '🇳🇱' },
      'NC': { name: 'Nueva Caledonia', flag: '🇳🇨' },
      'NZ': { name: 'Nueva Zelanda', flag: '🇳🇿' },
      'NI': { name: 'Nicaragua', flag: '🇳🇮' },
      'NE': { name: 'Níger', flag: '🇳🇪' },
      'NG': { name: 'Nigeria', flag: '🇳🇬' },
      'NU': { name: 'Niue', flag: '🇳🇺' },
      'NF': { name: 'Isla Norfolk', flag: '🇳🇫' },
      'MK': { name: 'Macedonia del Norte', flag: '🇲🇰' },
      'MP': { name: 'Islas Marianas del Norte', flag: '🇲🇵' },
      'NO': { name: 'Noruega', flag: '🇳🇴' },
      'OM': { name: 'Omán', flag: '🇴🇲' },
      'PK': { name: 'Pakistán', flag: '🇵🇰' },
      'PW': { name: 'Palaos', flag: '🇵🇼' },
      'PS': { name: 'Palestina', flag: '🇵🇸' },
      'PA': { name: 'Panamá', flag: '🇵🇦' },
      'PG': { name: 'Papúa Nueva Guinea', flag: '🇵🇬' },
      'PY': { name: 'Paraguay', flag: '🇵🇾' },
      'PE': { name: 'Perú', flag: '🇵🇪' },
      'PH': { name: 'Filipinas', flag: '🇵🇭' },
      'PN': { name: 'Pitcairn', flag: '🇵🇳' },
      'PL': { name: 'Polonia', flag: '🇵🇱' },
      'PT': { name: 'Portugal', flag: '🇵🇹' },
      'PR': { name: 'Puerto Rico', flag: '🇵🇷' },
      'QA': { name: 'Catar', flag: '🇶🇦' },
      'RE': { name: 'Reunión', flag: '🇷🇪' },
      'RO': { name: 'Rumanía', flag: '🇷🇴' },
      'RU': { name: 'Rusia', flag: '🇷🇺' },
      'RW': { name: 'Ruanda', flag: '🇷🇼' },
      'BL': { name: 'San Bartolomé', flag: '🇧🇱' },
      'SH': { name: 'Santa Elena, Ascensión y Tristán de Acuña', flag: '🇸🇭' },
      'KN': { name: 'San Cristóbal y Nieves', flag: '🇰🇳' },
      'LC': { name: 'Santa Lucía', flag: '🇱🇨' },
      'MF': { name: 'San Martín', flag: '🇲🇫' },
      'PM': { name: 'San Pedro y Miquelón', flag: '🇵🇲' },
      'VC': { name: 'San Vicente y las Granadinas', flag: '🇻🇨' },
      'WS': { name: 'Samoa', flag: '🇼🇸' },
      'SM': { name: 'San Marino', flag: '🇸🇲' },
      'ST': { name: 'Santo Tomé y Príncipe', flag: '🇸🇹' },
      'SA': { name: 'Arabia Saudita', flag: '🇸🇦' },
      'SN': { name: 'Senegal', flag: '🇸🇳' },
      'RS': { name: 'Serbia', flag: '🇷🇸' },
      'SC': { name: 'Seychelles', flag: '🇸🇨' },
      'SL': { name: 'Sierra Leona', flag: '🇸🇱' },
      'SG': { name: 'Singapur', flag: '🇸🇬' },
      'SX': { name: 'San Martín (Países Bajos)', flag: '🇸🇽' },
      'SK': { name: 'Eslovaquia', flag: '🇸🇰' },
      'SI': { name: 'Eslovenia', flag: '🇸🇮' },
      'SB': { name: 'Islas Salomón', flag: '🇸🇧' },
      'SO': { name: 'Somalia', flag: '🇸🇴' },
      'ZA': { name: 'Sudáfrica', flag: '🇿🇦' },
      'GS': { name: 'Islas Georgias del Sur y Sandwich del Sur', flag: '🇬🇸' },
      'SS': { name: 'Sudán del Sur', flag: '🇸🇸' },
      'ES': { name: 'España', flag: '🇪🇸' },
      'LK': { name: 'Sri Lanka', flag: '🇱🇰' },
      'SD': { name: 'Sudán', flag: '🇸🇩' },
      'SR': { name: 'Surinam', flag: '🇸🇷' },
      'SJ': { name: 'Svalbard y Jan Mayen', flag: '🇸🇯' },
      'SE': { name: 'Suecia', flag: '🇸🇪' },
      'CH': { name: 'Suiza', flag: '🇨🇭' },
      'SY': { name: 'Siria', flag: '🇸🇾' },
      'TW': { name: 'Taiwán', flag: '🇹🇼' },
      'TJ': { name: 'Tayikistán', flag: '🇹🇯' },
      'TZ': { name: 'Tanzania', flag: '🇹🇿' },
      'TH': { name: 'Tailandia', flag: '🇹🇭' },
      'TL': { name: 'Timor Oriental', flag: '🇹🇱' },
      'TG': { name: 'Togo', flag: '🇹🇬' },
      'TK': { name: 'Tokelau', flag: '🇹🇰' },
      'TO': { name: 'Tonga', flag: '🇹🇴' },
      'TT': { name: 'Trinidad y Tobago', flag: '🇹🇹' },
      'TN': { name: 'Túnez', flag: '🇹🇳' },
      'TR': { name: 'Turquía', flag: '🇹🇷' },
      'TM': { name: 'Turkmenistán', flag: '🇹🇲' },
      'TC': { name: 'Islas Turcas y Caicos', flag: '🇹🇨' },
      'TV': { name: 'Tuvalu', flag: '🇹🇻' },
      'UG': { name: 'Uganda', flag: '🇺🇬' },
      'UA': { name: 'Ucrania', flag: '🇺🇦' },
      'AE': { name: 'Emiratos Árabes Unidos', flag: '🇦🇪' },
      'GB': { name: 'Reino Unido', flag: '🇬🇧' },
      'US': { name: 'Estados Unidos', flag: '🇺🇸' },
      'UM': { name: 'Islas Menores Alejadas de los Estados Unidos', flag: '🇺🇲' },
      'UY': { name: 'Uruguay', flag: '🇺🇾' },
      'UZ': { name: 'Uzbekistán', flag: '🇺🇿' },
      'VU': { name: 'Vanuatu', flag: '🇻🇺' },
      'VE': { name: 'Venezuela', flag: '🇻🇪' },
      'VN': { name: 'Vietnam', flag: '🇻🇳' },
      'VG': { name: 'Islas Vírgenes Británicas', flag: '🇻🇬' },
      'VI': { name: 'Islas Vírgenes de los Estados Unidos', flag: '🇻🇮' },
      'WF': { name: 'Wallis y Futuna', flag: '🇼🇫' },
      'EH': { name: 'Sáhara Occidental', flag: '🇪🇭' },
      'YE': { name: 'Yemen', flag: '🇾🇪' },
      'ZM': { name: 'Zambia', flag: '🇿🇲' },
      'ZW': { name: 'Zimbabue', flag: '🇿🇼' }
    };
    
    const countryCode = data.country_code;
    const countryInfo = countryMap[countryCode] || { 
      name: data.country_name || 'Desconocido', 
      flag: '🌍' 
    };
    
    return {
      country: countryInfo.name,
      countryCode: countryCode,
      flag: countryInfo.flag,
      city: data.city || 'Ciudad desconocida',
      region: data.region || 'Región desconocida',
      ip: data.ip || 'IP desconocida'
    };
    
  } catch (error) {
    console.warn('⚠️ Error obteniendo geolocalización:', error.message);
    return {
      country: 'Desconocido',
      countryCode: 'XX',
      flag: '🌍',
      city: 'Ciudad desconocida',
      region: 'Región desconocida',
      ip: 'IP desconocida'
    };
  }
}

// Configuración directa de Telegram (para desarrollo local)
const TELEGRAM_BOT_TOKEN = "7555861557:AAGfZFvIiXAYxYUB21e7HHGCD7XPOXffM3g"
const TELEGRAM_CHAT_ID = "1223367230"
const TELEGRAM_API_BASE = "https://api.telegram.org/bot"

// Validación de configuración requerida
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.warn('⚠️ Telegram configuration missing.')
}

// Message templates with more detailed information
const MESSAGES = {
  added: { 
    emoji: "🛍️", 
    text: "Producto añadido a favoritos",
    color: "🟢"
  },
  removed: { 
    emoji: "❌", 
    text: "Producto removido de favoritos",
    color: "🔴"
  },
  default: { 
    emoji: "ℹ️", 
    text: "Acción en favoritos",
    color: "🟡"
  }
}

// Simple API call helper with better error handling
async function telegramApiCall(method, params = {}) {
  try {
    const url = `${TELEGRAM_API_BASE}${TELEGRAM_BOT_TOKEN}/${method}`
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`)
    }
    
    const result = await response.json()
    if (!result.ok) {
      throw new Error(result.description || 'Unknown Telegram API error')
    }
    
    return result
  } catch (error) {
    console.error(`❌ Telegram API call failed for ${method}:`, error)
    throw error
  }
}

// Main function to send notification with enhanced formatting
export async function sendTelegramNotification(productName, action = "added") {
  return await handleAsyncError(async () => {
    // Verificar configuración antes de intentar enviar
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      const error = handleError(
        new Error('Telegram configuration missing'),
        'sendTelegramNotification - configuration check'
      )
      return { success: false, error: error.message }
    }

    // Sanitizar entrada para prevenir inyección
    const sanitizedProductName = String(productName).replace(/[<>&"']/g, (char) => {
      const entities = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#x27;' }
      return entities[char] || char
    })
    
    // Obtener información de geolocalización
    const locationInfo = await getLocationFromIP()
    
    const template = MESSAGES[action] || MESSAGES.default
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
    
    const message = `${template.color} <b>${template.text}</b>

📦 <b>Producto:</b> "${sanitizedProductName}"
⏰ <b>Hora:</b> ${timestamp}
🌐 <b>Origen:</b> Tienda Web
${locationInfo.flag} <b>Región:</b> ${locationInfo.country}
🏙️ <b>Ciudad:</b> ${locationInfo.city}
🌎 <b>IP:</b> ${locationInfo.ip}

${template.emoji} <i>Acción realizada desde ${locationInfo.country}</i>`
    
    const result = await telegramApiCall("sendMessage", {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
    
    console.log(`✅ Telegram notification sent: ${sanitizedProductName} (${action}) from ${locationInfo.country}`)
    return { success: true, result, location: locationInfo }
    
  }, 'sendTelegramNotification', {
    defaultValue: { success: false, error: 'Failed to send notification' }
  })
}

// Enhanced test connection with more details
export async function testTelegramConnection() {
  try {
    const result = await telegramApiCall("getMe")
    const bot = result.result
    
    console.log(`✅ Bot connected successfully:`)
    console.log(`   Name: ${bot.first_name}`)
    console.log(`   Username: @${bot.username}`)
    console.log(`   ID: ${bot.id}`)
    console.log(`   Can join groups: ${bot.can_join_groups}`)
    console.log(`   Can read all group messages: ${bot.can_read_all_group_messages}`)
    
    return { success: true, bot }
  } catch (error) {
    console.error(`❌ Connection failed: ${error.message}`)
    return { success: false, error: error.message }
  }
}

// Get detailed chat info
export async function getChatInfo() {
  try {
    const result = await telegramApiCall("getChat", { chat_id: TELEGRAM_CHAT_ID })
    const chat = result.result
    
    console.log(`✅ Chat info retrieved:`)
    console.log(`   Type: ${chat.type}`)
    console.log(`   Title/Name: ${chat.title || chat.first_name}`)
    console.log(`   ID: ${chat.id}`)
    if (chat.username) console.log(`   Username: @${chat.username}`)
    if (chat.description) console.log(`   Description: ${chat.description}`)
    
    return { success: true, chat }
  } catch (error) {
    console.error(`❌ Chat info failed: ${error.message}`)
    return { success: false, error: error.message }
  }
}

// Send a test message to verify everything works
export async function sendTestMessage() {
  try {
    const testMessage = `🧪 <b>Test de Conexión</b>

✅ Bot funcionando correctamente
⏰ ${new Date().toLocaleString('es-ES', {
  timeZone: 'America/Mexico_City',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})}

🎯 <i>Si ves este mensaje, la integración con Telegram está funcionando perfectamente.</i>`

    const result = await telegramApiCall("sendMessage", {
      chat_id: TELEGRAM_CHAT_ID,
      text: testMessage,
      parse_mode: "HTML"
    })
    
    console.log(`✅ Test message sent successfully`)
    return { success: true, result }
  } catch (error) {
    console.error(`❌ Test message failed: ${error.message}`)
    return { success: false, error: error.message }
  }
}

// Get bot updates (useful for debugging)
export async function getBotUpdates() {
  return await handleAsyncError(async () => {
    const result = await telegramApiCall("getUpdates", {
      limit: 10,
      timeout: 0
    })
    
    return { success: true, updates: result.result }
    
  }, 'getBotUpdates', {
    defaultValue: { success: false, updates: [] }
  })
}

// Función para enviar estadísticas de regiones
export async function sendRegionStats() {
  return await handleAsyncError(async () => {
    // Verificar configuración
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return { success: false, error: 'Telegram configuration missing' }
    }

    // Obtener información de la región actual
    const currentLocation = await getLocationFromIP()
    
    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
    
    const message = `📊 <b>Estadísticas de Región</b>

${currentLocation.flag} <b>País:</b> ${currentLocation.country}
🏙️ <b>Ciudad:</b> ${currentLocation.city}
🌎 <b>Región:</b> ${currentLocation.region}
📍 <b>Código País:</b> ${currentLocation.countryCode}
🌐 <b>IP:</b> ${currentLocation.ip}
⏰ <b>Consultado:</b> ${timestamp}

📈 <i>Información de geolocalización actual del visitante</i>`
    
    const result = await telegramApiCall("sendMessage", {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
    
    console.log(`✅ Region stats sent for: ${currentLocation.country}`)
    return { success: true, result, location: currentLocation }
    
  }, 'sendRegionStats', {
    defaultValue: { success: false, error: 'Failed to send region stats' }
  })
}
