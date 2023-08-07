var framework = require("webex-node-bot-framework");
const {insertarDatos} = require('../save_data/sheet')
const {phishing} = require('./phising')
const {ransomware} = require('./ransomware')
const {databreach} = require('./databreach')
const {malware} = require('./malware')
const ataques_obj = {'A1':'Phishing', 'A2': 'Ramsomware', 'A3': 'Malware', 'A4': 'Data breach'}
const {almacenarDatosEnServidor} = require('../save_data/db_save')

const ataques_llamada = async (bot,trigger) => {
    let mensaje = ''

    Object.entries(ataques_obj).map(([key,value])=>{
      mensaje = mensaje + `**${key}**. ${value}\n` })

    let header ='**¡Hola!** ¿Puedo mostrarte qué soluciones actuan contra los siguientes ataques?\n\n\n';
    let footer = '\n\n\nEscribe tu selección 😃 \n Ejemplo: Si quiere saber que solución(es) de seguridad posicionar contra con RANSONWARE, ingresa "A2" o "ransomware" ';

    mensaje = header + '\n\n'+ mensaje + '\n' + footer + '\n\n';
    await bot.say("markdown", mensaje)


    
}

const ataques_opciones = async (bot,trigger) => {
    let actualselectedOption = trigger.message.text;
    console.log(actualselectedOption)
    if ( actualselectedOption.toLowerCase() == 'a1' || actualselectedOption.toLowerCase() == "phishing" ) {
      phishing(bot)
      almacenarDatosEnServidor('phishing')
      // Realizar acciones para la opción 1
    } else if (actualselectedOption.toLowerCase() == 'a2' || actualselectedOption.toLowerCase() == "ransomware") {
      ransomware(bot)
      almacenarDatosEnServidor('ransomware')
      // Realizar acciones para la opción 2
    }
    else if (actualselectedOption.toLowerCase() == 'a3' || actualselectedOption.toLowerCase() == "malware") {
      malware(bot)
      almacenarDatosEnServidor('malware')
      // Realizar acciones para la opción 2
    }
    else if (actualselectedOption.toLowerCase() == 'a4' || actualselectedOption.toLowerCase() == "data breach" || actualselectedOption.toLowerCase() == "data breaches" ) {
      databreach(bot)
      almacenarDatosEnServidor('data breach')
      // Realizar acciones para la opción 2
    }

}



module.exports = {ataques_opciones, ataques_llamada};

// framework.hears(/^(1|2)$/, async (bot, trigger) => {

//   });