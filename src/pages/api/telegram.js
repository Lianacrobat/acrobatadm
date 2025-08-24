// API endpoint para manejar notificaciones de Telegram
import { sendTelegramNotification, testTelegramConnection } from '../../utils/telegram.js';

export async function POST({ request }) {
  try {
    const { productName, action } = await request.json();
    
    if (!productName) {
      return new Response(
        JSON.stringify({ success: false, error: 'Product name is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    const result = await sendTelegramNotification(productName, action || 'added');
    
    return new Response(
      JSON.stringify(result),
      { 
        status: result.success ? 200 : 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET() {
  try {
    const result = await testTelegramConnection();
    
    return new Response(
      JSON.stringify(result),
      { 
        status: result.success ? 200 : 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Test connection error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}