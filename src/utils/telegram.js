// Telegram notification utility
const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN || "7555861557:AAGfZFvIiXAYxYUB21e7HHGCD7XPOXffM3g"
const TELEGRAM_CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID || "1223367230"
const TELEGRAM_API_BASE = "https://api.telegram.org/bot"

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
  try {
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

📦 <b>Producto:</b> "${productName}"
⏰ <b>Hora:</b> ${timestamp}
🌐 <b>Origen:</b> Tienda Web

${template.emoji} <i>Acción realizada desde la tienda online</i>`
    
    const result = await telegramApiCall("sendMessage", {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
    
    console.log(`✅ Telegram notification sent: ${productName} (${action})`)
    return { success: true, result }
    
  } catch (error) {
    console.error(`❌ Telegram error: ${error.message}`)
    return { success: false, error: error.message }
  }
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
  try {
    const result = await telegramApiCall("getUpdates", { limit: 5 })
    console.log(`✅ Bot updates retrieved:`, result.result)
    return { success: true, updates: result.result }
  } catch (error) {
    console.error(`❌ Get updates failed: ${error.message}`)
    return { success: false, error: error.message }
  }
}
