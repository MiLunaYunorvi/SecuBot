const ransomware_options = { 
    '💀 ATAQUE': '**RANSOMWARE**',
    '🤔 ¿QUÉ ES?': 'Tipo de malware que cifra los archivos y luego exije un rescate para restaurar los accesos o descifrar datos, basicamente es una extorsión de criptomonedas lo que dificulta el rastreo y no existe garantía de resolución por parte de los atacantes.',
    '🛡️ CISCO CONTRA EL RAMSOMWARE': 
    `   
        - Protección contra ransomware en correos electrónico con **Cisco Secure Email**.
        - Protección contra ransomware en la web. 
        La mayoría de los ataques de ransomware utilizan DNS con **Cisco Umbrella** protegemos la capa DNS. 
        - Protección contra ransomware en endpoints. 
        **Cisco Secure Endpoint** detecta el ransomware en tiempo real. 
        - Investigación y respuesta ante ransomware
        **Cisco XDR** permite reducir drásticamente el tiempo de permanencia de las amenazas y tareas manuales.
        - Protección contra ransomware en el acceso
        **Cisco Duo** evita que usen credenciales robadas para establecer una base, moverse lateralmente y propagar ransomware. 

        `,
    
     }

const ransomware = (bot) => {
    let mensaje = ''
    let header = 'Seleccionaste **RANSOMWARE**. Estos son soluciones que puedes posicionar: \n\n\n'
    mensaje = mensaje + header,
    Object.entries(ransomware_options).map(([key,value])=>{
        mensaje = mensaje + `\n **${key}**: ${value}\n `
    })
    bot.say("markdown", mensaje)
    
}

module.exports = {ransomware}


