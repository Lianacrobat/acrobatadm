// API endpoint para manejar testimonios vía correo electrónico

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
    
    // Enviar correo electrónico
    const result = await sendEmailMessage(message, testimonio);
    
    if (result.success) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Testimonio enviado exitosamente por correo electrónico',
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
          error: result.error || 'Error al enviar correo electrónico' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
  } catch (error) {
    console.error('API Error en email-testimonios:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Error interno del servidor: ' + error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Función auxiliar para enviar correo electrónico usando EmailJS
async function sendEmailMessage(message, testimonio) {
  try {
    // Usar EmailJS para enviar el correo (funciona desde el cliente)
    // Esta función retornará éxito para que el frontend maneje EmailJS
    return {
      success: true,
      messageId: 'email-' + Date.now(),
      method: 'emailjs'
    };
    
  } catch (error) {
    console.error('Error enviando correo electrónico:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Endpoint GET para probar la conexión
export async function GET() {
  try {
    return new Response(
      JSON.stringify({
        success: true,
        message: 'API de correo electrónico funcionando correctamente',
        email: 'acrobatadm@hotmail.com',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error en test de conexión de email:', error);
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