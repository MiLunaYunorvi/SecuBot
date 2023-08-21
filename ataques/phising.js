const phising_myoptions = { 
    'ATAQUE': 'PHISING',
    '¿Qué es?': 'Ataque donde se intenta obtener información confidencial, como contraseñas, información financiera o datos personales, haciéndose pasar por una entidad legítima. A través de correos electrónicos, SMS, enlaces maliciosos o archivos infectados',
    '¿Cómo evitarlo?': 
    `
        - Protección de acceso: Cisco Duo ayuda a las organizaciones a proteger el acceso a aplicaciones críticas, datos y sistemas.
        - Opciones de autenticación segura: Ofrece autenticación resistente al phishing con opciones de Autenticación sin contraseña y Autenticación de múltiples factores (MFA).
        - SSO (Inicio de sesión único): Permite a los usuarios acceder a múltiples aplicaciones con un solo inicio de sesión, mejorando la comodidad y la seguridad.
        - Políticas de acceso adaptativas: Permite establecer políticas de acceso basadas en el contexto y el comportamiento del usuario para adaptarse a diferentes niveles de seguridad.
        - Construye una estrategia de confianza cero: Ayuda a las organizaciones a implementar una estrategia de confianza cero basada en los principios de "Nunca confíes, siempre verifica" y "Aplica el privilegio mínimo".

        `,
    'Caracteristicas resaltantes 🌟': `
        - Visibilidad y control avanzados: Cisco Duo proporciona una visibilidad completa de los dispositivos y usuarios que intentan acceder a los recursos protegidos.
        - Respuestas dinámicas: Cisco DUO no solo verifica el acceso, sino que verifica continuamente la confianza y estado de salud del dispositivo, respondiendo a cambios en el tiempo.
        - Arquitectura de confianza cero: Cisco Duo adopta un enfoque de confianza cero en la seguridad,cada acceso se verifica y autentica individualmente, lo que proporciona un nivel adicional de protección contra amenazas.
        - Protección contra malware: En integración con Secure Endpoint pueden detectar malware y responder automaticamente bloqueando el acceso a endpoints riesgosos mediante políticas.
    `,
    'Recursos importantes 🤓' : `
        - DUO Sales: https://drive.google.com/file/d/1YMF0r2avOh48cn-YiaXIKfc9aKoJpmbB/view?usp=sharing
        - DUO At a Glance: https://drive.google.com/file/d/1tSC_maDHY2U6te7XuzhZs9JfSQlgyfTw/view?usp=sharing
    `,
    
     }

const phising_options = { 
        'ATAQUE': 'PHISING',
        '¿Qué es?': 'El phishing es el envío de comunicaciones fraudulentas que parecen provenir de una fuente legítima y confiable, generalmente a través de correo electrónico y mensajes de texto. El objetivo del atacante es robar dinero, obtener acceso a datos sensibles e información de inicio de sesión o instalar malware en el dispositivo de la víctima. El phishing es un tipo de ciberataque peligroso, dañino y cada vez más común ',
        '🛡️ CISCO CONTRA El PHISHING': 
        `
        - Seguridad en el email: detecta y bloquea emails fraudulentos.
        - Umbrella: evita que un usuario accede a sitios maliciosos.
        `,
         }

const phishing = (bot) => {
    let mensaje = ''
    let header = 'Seleccionaste **PHISING**. Estos son soluciones que puedes posicionar: \n\n\n'
    mensaje = mensaje + header,
    Object.entries(phising_options).map(([key,value])=>{
        mensaje = mensaje + `\n **${key}**: ${value}\n `
    })
    bot.say("markdown", mensaje)
    
}

module.exports = {phishing}


