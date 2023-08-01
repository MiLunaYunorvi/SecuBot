const Umbrella_options = { 
    '¿Qué es': 'Seguridad en la nube, TODO en UNO.',
    'Funciones': 
    `
        - Protección DNS:  Bloquea amenazas en la capa DNS y evita el acceso a sitios web maliciosos.
        - Cloud Delivered Firewall: Protege tus redes y aplicaciones en la nube con un firewall seguro entregado desde la nube.
        - Secure Web Gateway: Filtra el tráfico web, bloquea malware y protege contra contenido no deseado con una puerta de enlace web segura.
        - CASB (Cloud Access Security Broker): Asegura tus aplicaciones y datos en la nube con políticas de seguridad y protección de acceso. Protección integral contra amenazas.
        `,
    'Info': `
        - Implementación sencilla y ahorro de recursos, producto nativo de la nube.
        - Soporte de expertos en amenazas con Cisco Talos.

    `,
    'Recursos importantes' : `
        - Umbrella at a glance: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/UMBRELLA/Umbrella+at+glance.pdf
        - Umbrella Sales Play: https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/UMBRELLA/Umbrella+Sales+Play.pdf
    `,
    'Ordering guide': 'https://www.cisco.com/c/en/us/products/collateral/security/umbrella/umbrella-og.html',
     }

const umbrella = (bot) => {
    let mensaje = ''
    let header = 'Seleccionaste Umbrella. Estos son los recursos disponibles: \n\n\n'
    mensaje = mensaje + header,
    Object.entries(Umbrella_options).map(([key,value])=>{
        mensaje = mensaje + `**${key}**: ${value}\n\n\n`
    })
    let footer = 'También puedes probar con: "Licencias de Umbrella", "Umbrella Licenciamiento"..';
    mensaje = mensaje  + footer;
    bot.say("markdown", mensaje)
    
}

module.exports = {umbrella, Umbrella_options}