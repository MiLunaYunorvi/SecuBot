const duo_myoptions = { 
    '¿Qué es': 'Zero Trust aplicado al acceso, asegura toda la fuerza de trabajo esten donde esten.',
    'Funciones': 
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
    'Ordering guide': 'https://www.cisco.com/c/en/us/products/collateral/security/umbrella/umbrella-og.html',
     }

const duo_options = {
    'Cisco DUO:': 'Seguridad de la identidad',
    '🌟FUNCIONES:': `
        **1- Protección de acceso:** protege el acceso a aplicaciones críticas, datos y sistemas.
        **2- Opciones de autenticación segura:** Ofrece autenticación resistente al phishing con opciones de Autenticación sin contraseña y Autenticación de múltiples factores (MFA).
        **3- SSO (Inicio de sesión único):** Permite a los usuarios acceder a múltiples aplicaciones con un solo inicio de sesión, mejorando la comodidad y la seguridad.
        **4- Políticas de acceso adaptativas:** Permite establecer políticas de acceso basadas en el contexto y el comportamiento del usuario
        **5- Construye una estrategia de confianza cero:** Ayuda a las organizaciones a implementar una estrategia de basada en confianza. 
    `,
    '🤓RECURSOS' : `
        - DUO Sales: https://drive.google.com/file/d/1YMF0r2avOh48cn-YiaXIKfc9aKoJpmbB/view?usp=sharing
        - DUO At a Glance: https://drive.google.com/file/d/1tSC_maDHY2U6te7XuzhZs9JfSQlgyfTw/view?usp=sharing
    `,
}   

const duo = (bot) => {
    let mensaje = ''
    let header = 'Seleccionaste **CISCO DUO**. Estos son los recursos disponibles: \n\n\n'
    
    Object.entries(duo_options).map(([key,value])=>{
        mensaje = mensaje + `\n **${key}**: ${value}\n`
    })
    
    let footer = 'También puedes probar con: "Licencias de Duo", "Opciones de MFA de DUO"..';
    mensaje = header + mensaje  + footer;
    bot.say("markdown", mensaje)
    
}

module.exports = {duo, duo_options}