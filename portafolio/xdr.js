const xdr_options = { 
    '¿Qué es': 'Cisco XDR es una solución de Detección y Respuesta Extendida que permite a los clientes a detectar, investigar y priorizar incidentes de manera más efectiva con fuentes de telemetría adicionales y perspectivas contextuales. A través de la red, nube, endpoints, email y más.',
    'Beneficios': 
    `   - Detectar las amenazas más sofisticadas: Obtener visibilidad y inteligencia de amenazas accionables con un enfoque  
    multivector y **multi-vendor** optimizado para entornos abiertos.
        - Actuar en lo que realmente importa: Equipa a los equipos de seguridad con una priorización efectiva de amenazas, investigaciones simplificadas y recomendaciones respaldadas por evidencia.
        - Aumentar la productividad: Eliminar el ruido y aliviar la escasez de habilidades con capacidades de automatización para aumentar los recursos de sus equipos de seguridad y obtener un valor óptimo.
        - Construir resiliencia: Cerrar brechas de seguridad y anticipar y prepararse para futuras amenazas. Fortalecerse cada día con mejoras continuas."
        `,
    'Componentes': `
        - XDR Analytics: Provee visibilidad y detcción de amenazas en todos los principales entornos de nube (AWS, Azure, GCP).
        - Telemetry Broker: Permite que los datos de telemetría sean accesibles y utilizables por diferentes herramientas y sistemas, incluso si utilizan protocolos diferentes.
    `,
    'Recursos importantes' : `
        - XDR BDM PPT: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/XDR/Cisco+XDR+BDM.pptx 
        - XDR BDM PDF: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/XDR/Cisco+XDR+BDM.pdf 
        - XDR at Glance: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/XDR/XDR+at+Glance.pdf 
    `,
     }

const xdr = (bot) => {
    let mensaje = ''
    let header = 'Seleccionaste XDR. Estos son los recursos disponibles: \n\n\n'
    let footer = 'También puedes probar con: "Licencias xdr", "XDR Licenciamiento", "Paquetes XDR".'
    mensaje = mensaje + header + footer,
    Object.entries(xdr_options).map(([key,value])=>{
        mensaje = mensaje + `**${key}**: ${value}\n\n\n`
    })
    bot.say("markdown", mensaje)
    
}

module.exports = {xdr, xdr_options}