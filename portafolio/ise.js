const solucion = 'ise'

const my_ise_options = { 
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

const ise_options = {
        'CISCO ISE' : 'Seguridad en el acceso basado en polìticas.',
        '🤔 ¿QUÉ ES?:': `
        Es una solución integral de gestión de identidad y acceso (IAM) que proporciona una amplia gama de funcionalidades
    `,
        '🌟 FUNCIONALIDADES': `
            1- Autenticación: Cisco ISE autentica usuarios y dispositivos.
            2- Autorización: Cisco ISE puede autorizar a usuarios y dispositivos para acceder a recursos de red basados en su identidad, rol y ubicación.
            3- Cumplimiento de políticas: Cisco ISE aplica políticas de seguridad.
            4- Provisionamiento de dispositivos: Cisco ISE puede proveer a los dispositivos con políticas y configuraciones de seguridad.
            6- Cumplimiento normativo: Cisco ISE puede ayudar a las organizaciones a cumplir con regulaciones de la industria.
        

        ` ,
        '🤓RECURSOS' : `
        - ISE Zero Trust Workplace BDM: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/ISE/Cisco+Identity+Services+Engine+(ISE)+Zero+Trust+Workplace+BDM.pdf
        - Total Economic Impact ISE: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/ISE/Total+Economic+Impact+ISE.pdf
    `,
}     


const ise = (bot) => {
    let mensaje = ''
    let header = `Seleccionaste ${solucion}. Estos son los recursos disponibles: \n\n\n`
   
    Object.entries(ise_options).map(([key,value])=>{
        mensaje = mensaje + `\n **${key}**: ${value}\n`
    })
    let footer = `También puedes consultar por: "Casos de uso de ${solucion}`;
    mensaje = header + mensaje + footer,
    bot.say("markdown", mensaje)
    
}

module.exports = {ise, ise_options}