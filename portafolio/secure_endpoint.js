const solucion = 'Secure Endpoint'

const my_secureendpoint_options = { 
    '¿Qué es': 'Cisco Secure Endpoint es un agente ligero para dispositivos Windows, Mac, Linux, Android e iOS. Es una plataforma de protección de puntos finales (EPP) combinada con un software de detección y respuesta de puntos finales (EDR), proporcionando una solución completa de protección para los puntos finales.',
    'Beneficios': 
    `
        • Detectar continuamente malware de forma inmediata y retrospectiva.
        • Registrar la actividad de archivos a lo largo del tiempo para rastrear la propagación y alcance del malware.
        • Acceder a inteligencia global de amenazas(TALOS) para fortalecer las defensas de la red.
        • Obtener visibilidad, contexto y control para detectar Comando y Control.
        • Defenderse contra ramsomware e inyecciones de memoria basadas en la exploits.
        • Proporcionar un EDR basado en la nube con SecureX independiente de un Data Lake (SIEM).
    `,
    'Recursos importantes' : `
        - Secure Endpoint BDM (ppt): https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/Secure+Endpoint+BDM.pptx
        - Top 5 tips para escoger Secure Endpoint: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/Top+5+tips+choosing+Endpoint+Protection.pdf
    `,
    
     }

const secureendpoint_options = {
        '🌟FUNCIONES:': `
        Protege los endpoints, ya sea que estén conectados a una red protegida o navegando por Internet, con capacidades continuas e integradas de **detección, respuesta y remediación**.           
    `,
        '🤔 ¿Es Cisco Endpoint un antivirus?': `
        NO, Cisco Secure Endpoint no es únicamente un antivirus. Sin embargo, incluye capacidades antivirus. Es más que solo una solución antivirus, ya que también proporciona capacidades avanzadas de detección y respuesta en endpoints (EDR), lo que te permite detectar y responder incluso ante las amenazas más sofisticadas.

        ` ,
        '🤓RECURSOS' : `
        - Secure Endpoint BDM (ppt): https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/Secure+Endpoint+BDM.pptx
        - Top 5 tips para escoger Secure Endpoint: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/Top+5+tips+choosing+Endpoint+Protection.pdf
    `,
}     

const secureendpoint = (bot) => {
    let mensaje = ''
    let header = `Seleccionaste ${solucion}. Estos son los recursos disponibles: \n\n\n`
    
    Object.entries(secureendpoint_options).map(([key,value])=>{
        mensaje = mensaje + `\n **${key}**: ${value}\n`
    })
    
    let footer = `También puedes consultar por: "Licencias de ${solucion}" y "Compatibilidad de ${solucion}`;
    mensaje = header + mensaje + footer,
    bot.say("markdown", mensaje)
    
}

module.exports = {secureendpoint, secureendpoint_options}