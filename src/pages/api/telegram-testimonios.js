// API endpoint específica para manejar testimonios vía Telegram
// import { sendTelegramNotification } from '../../utils/telegram.js'; // No necesario

export async function POST({ request }) {
  try {
    const { message, testimonio } = await request.json();
    
    if (!message || !testimonio) {
      return new Response(
        JSON.stringify({ success: false, error: 'Mensaje y datos del testimonio son requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Validar campos obligatorios del testimonio
    const { nombre, cargo, empresa, pais, fechaCompra, testimonio: textoTestimonio } = testimonio;
    
    if (!nombre || !cargo || !empresa || !pais || !fechaCompra || !textoTestimonio) {
      return new Response(
        JSON.stringify({ success: false, error: 'Todos los campos obligatorios deben estar completos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    if (textoTestimonio.length < 50) {
      return new Response(
        JSON.stringify({ success: false, error: 'El testimonio debe tener al menos 50 caracteres' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Enviar mensaje a Telegram usando la utilidad existente
    const result = await sendTelegramMessage(message);
    
    if (result.success) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Testimonio enviado exitosamente a Telegram',
          data: {
            messageId: result.messageId,
            timestamp: new Date().toISOString()
          }
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: result.error || 'Error al enviar mensaje a Telegram' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
  } catch (error) {
    console.error('API Error en telegram-testimonios:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Error interno del servidor: ' + error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Función auxiliar para enviar mensaje a Telegram
async function sendTelegramMessage(message) {
  try {
    // Obtener configuración desde variables de entorno
    const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;
    
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Token de Telegram o Chat ID no configurados');
    }
    
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    const data = await response.json();
    
    if (data.ok) {
      return {
        success: true,
        messageId: data.result.message_id,
        data: data.result
      };
    } else {
      return {
        success: false,
        error: `Error de Telegram API: ${data.description || 'Error desconocido'}`
      };
    }
    
  } catch (error) {
    console.error('Error enviando mensaje a Telegram:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Endpoint GET para probar la conexión
export async function GET() {
  try {
    const testMessage = '🧪 Test de conexión - API de Testimonios\n\nEsta es una prueba de la API de testimonios de Acrobata Demente.';
    const result = await sendTelegramMessage(testMessage);
    
    return new Response(
      JSON.stringify({
        success: result.success,
        message: result.success ? 'Conexión exitosa con Telegram' : 'Error en la conexión',
        error: result.error || null,
        timestamp: new Date().toISOString()
      }),
      { 
        status: result.success ? 200 : 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error en test de conexión:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}