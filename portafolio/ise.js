const solucion = 'ise'

const ise_options = { 
    '**¿Qué es**': 'Cisco Identity Services Engine (ISE) es una solución de seguridad centralizada que proporciona acceso seguro a la red(NAC) para usuarios y dispositivos. Tenga visibilidad sobre lo que está sucediendo en su red: quién está conectado, mediante qué dispositivo y qué aplicaciones se están ejecutando, todo esto en dispositivos de red cableados, inalámbricos y VPN. Es una herramienta esencial para garantizar la seguridad y control de su red y dispositivos\n\n\n',
    '**Funciones**': 
    `   \n
        • Obtener visibilidad con contexto y control: Conozca quiénes, qué, dónde y cómo se están conectando los dispositivos (por ejemplo, endpoints, dispositivos móviles, cámaras de seguridad, impresoras). Realice un análisis profundo de los dispositivos para garantizar el cumplimiento y reducir el riesgo, **con o sin el uso de agentes.** \n
        • Extender el enfoque zero trust para contener amenazas: La segmentación de red definida por software reduce la superficie de ataque, limita la propagación de ransomware y permite una rápida contención de amenazas. ISE proporciona la base para el control de políticas para SD-Access, integrándose directamente con Cisco DNA Center.\n
        • Plataforma robusta de intercambio de contexto: Recopile gran cantidad de información contextual de diversas fuentes (por ejemplo, administración de dispositivos móviles, almacenes de identidades, etc.) que permiten a ISE prevenir el acceso inapropiado y minimizar la propagación de amenazas en la red.\n
    `,
    '**Recursos importantes**' : `
        - Secure Endpoint BDM (ppt): https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/Secure+Endpoint+BDM.pptx
        - Top 5 tips para escoger Secure Endpoint: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/Top+5+tips+choosing+Endpoint+Protection.pdf
    `,
    
     }

const ise = (bot) => {
    let mensaje = ''
    let header = `Seleccionaste ${solucion}. Estos son los recursos disponibles: \n\n\n`
    mensaje = mensaje + header,
    Object.entries(ise_options).map(([key,value])=>{
        mensaje = mensaje + `**${key}**: ${value}\n\n\n`
    })
    let footer = `También puedes consultar por: "Casos de uso de ${solucion}`;
    mensaje = mensaje  + footer;
    bot.say("markdown", mensaje)
    
}

module.exports = {ise, ise_options}