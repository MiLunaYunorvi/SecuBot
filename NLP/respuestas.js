const respuesta_phishing = () => {
    const soluciones_phishing = `
        **Cisco Email Security**: Aproximadamente el 96% de ataques de phishing son entregados via email. Cisco Email Security **identifica, bloquea y remedia** amenazas en correo electrónico de forma rápida. 
        - Bloquea el acceso o descarta emails con contenido riesgoso mediante análisis de URL en tiempo real.
        - Analiza archivos desconocidos adjuntos en un sandbox para determinar la reputación del archivo y proceder a entregarlo, bloquearlo o retenerlo (Cisco Secure Malware Analytics)
        - Protege contenido sensible en emails salientes con DLP y encriptación de email.
        
        \n\n\n **Umbrella**: El 20% de participantes de una simulación, hicieron clic en enlaces de phishing. Cisco Umbrella bloquea el acceso al sitio web de phishing, protegiendo así al usuario.
        - La capa de seguridad DNS de Cisco Umbrella protege a los usuarios de acceder a dominios maliciosos, asociados a campañas de phishing, incluso antes de que se haya realizado la conexión.
        - Umbrella SIG va más allá protegiendo usuarios del phishing vía URLs, tráfico encriptado, protocolos y puertos no estándar y más.
        - Despliega la capa de seguridad DNS de Umbrella en 7 minutos. Protege a tu organización del phishing en 7 minutos.
        
        \n\n\n **DUO**: El 13% de los participantes brindaron sus credenciales en las páginas falsas, lo que permitió al atacante obtener acceso a la organización.
        
        `;
    const footer = '\n\n\n *Métricas obtenidas del reporte 2021 Gone Phishing Tournament*';
    const soluciones_phishing_completo = soluciones_phishing  +footer  
    return soluciones_phishing_completo;
}

const respuesta_malware = () => { 
    const malware_options = `
        '💀 ATAQUE': '**MALWARE**',
        '🤔 ¿QUÉ ES?': 'Malware, abreviatura de software malicioso, se refiere a cualquier software intrusivo desarrollado por ciberdelincuentes (a menudo llamados hackers) para robar datos y dañar o destruir computadoras y sistemas informáticos. Ejemplos de malware común incluyen virus, gusanos, troyanos, spyware, adware y ransomware.',
        '🛡️ CISCO CONTRA EL MALWARE': 
           **Cisco Secure Endpoint:** protege en tiempo real contra malware en los endpoints.
            **Cisco Umbrella:** bloquea tráfico malicioso antes de llegar a la red o endpoints.
            **Cisco Email Security:** Bloquea spam, phishing y malware antes de llegar a la bandeja de entrada.
            
        `
    return  malware_options;
}

const respuesta_databreach = () => { 
    const databreach_options = ` 
        '💀 ATAQUE': '**DATA BREACHES**',
        '🤔 ¿QUÉ ES?': 'Es una violación o incidente de seguridad que conduce al robo de datos sensibles o críticos o su exposición a una parte no autorizada. Estos incidentes pueden ser intencionales, como un hackeo de una base de datos, o accidentales, como un empleado que envía por correo electrónico archivos confidenciales al destinatario equivocado.',
        '🛡️ CISCO CONTRA ATAQUES DE DATA BREACH': 
        - **DUO** y la autenticación de dos factores hacen que sea más difícil para los hackers maliciosos comprometer a los usuarios, incluidos aquellos que trabajan de forma remota o por contrato.
         - Cisco incorpora capacidades de DLP (Prevención de pérdida de datos) mediante **Umbrella**.
        `
         
    return  databreach_options;
}

const respuesta_ransomware = () => { 
    const ransomware_options = `
        '💀 ATAQUE': '**RANSOMWARE**',
        '🤔 ¿QUÉ ES?': 'El ransomware es un tipo de software malicioso o malware que encripta los datos de la víctima y luego el atacante exige un rescate. Una vez que se paga el rescate, el atacante envía una clave de descifrado para restaurar el acceso a los datos de la víctima.',
        '🛡️ CISCO CONTRA EL RAMSOMWARE': 
          
            - Protección contra ransomware en correos electrónico con **Cisco Secure Email**.
            - Protección contra ransomware en la web. 
            La mayoría de los ataques de ransomware utilizan DNS con **Cisco Umbrella** protegemos la capa DNS. 
            - Protección contra ransomware en endpoints. 
            **Cisco Secure Endpoint** detecta el ransomware en tiempo real. 
            - Investigación y respuesta ante ransomware
            **Cisco XDR** permite reducir drásticamente el tiempo de permanencia de las amenazas y tareas manuales.
            - Protección contra ransomware en el acceso
            **Cisco Duo** evita que usen credenciales robadas para establecer una base, moverse lateralmente y propagar ransomware. 
    
            
        `
    return  ransomware_options;
}

const respuesta_ddos = () => {
    const soluciones_ddos = ` **Cisco Secure DDoS protection**: A travès de soluciones de Machine Learning y algoritmos basados en comportamiento,puede detectar y mitigar ataques de DDoS de L3/L4 y L7:
        -Eficacia contra ataques DDoS de dia zero, osea ataques nunca antes vistos.
        -Distingue con precisión el tráfico legítimo del malicioso, lo que permite SLA avanzados y maximiza la disponibilidad del servicio.
        -Variedad en opciones de despliegue: En premisas, servicio de nube y modelo hìbrido (https://www.cisco.com/c/dam/en/us/products/collateral/security/secure-ddos-protection-deployment-options.pdf)
    `
    return soluciones_ddos;
}

const respuesta_xdr = () => {
    const licencias_xdr = "La solución XDR consta de 3 niveles de licenciamiento:"
    return licencias_xdr;
}
const respuesta_umbrella = () => {
    const licencias_xdr = "La solución Cisco Umbrella consta de 3 niveles de licenciamiento:"
    return licencias_xdr;
}

const respuesta_duo = (parametro) => {
    var respuesta = ''
    switch (parametro) {
        case 'licencias':
            respuesta = "La solución Cisco DUO💚 consta de 3 niveles de licenciamiento: "
            break;
        case 'opcionesMFA':
            respuesta = "Cisco DUO💚 presenta varias opciones de MFA, menciona aquellas que mejor se adapten al cliente!"
            break;
    }
    return respuesta;
}

const respuesta_ise = (parametro) => {
    var respuesta = ''
    switch (parametro) {
        case 'casos de uso':
            respuesta = "Cisco ISE es vital en los siguientes casos de uso: "
            break;
        //case 'opcionesMFA':
            respuesta = "Cisco DUO💚 presenta varias opciones de MFA, menciona aquellas que mejor se adapten al cliente!"
        //    break;
    }
    return respuesta;
}

const respuesta_secureendpoint = (parametro) => {
    var respuesta = ''
    switch (parametro) {
        case 'compatibilidad':
            respuesta = "Aquí te envío una matriz de funcionalidades por sistema operativo de Secure Endpoint "
            break;
        case 'licencias':
            respuesta = "Cisco Secure Endpoint tiene tres niveles de licenciamiento: "
        //    break;
    }
    return respuesta;
}

module.exports = {respuesta_ransomware ,respuesta_phishing, respuesta_databreach, respuesta_ddos, respuesta_xdr, respuesta_umbrella,respuesta_duo, respuesta_ise, respuesta_secureendpoint, respuesta_malware}