var framework = require("webex-node-bot-framework");
const {umbrella} = require('./umbrella')
const {duo} = require('./duo')
const {insertarDatos} = require('../save_data/sheet')
const {xdr} = require('./xdr')
const {almacenarDatosEnServidor} = require('../save_data/db_save')

const soluciones_obj = {'S1':'Umbrella', 'S2': 'DUO', 'S3': 'Secure Endpoint', 'S4':'ISE', 'S5':'XDR'}

var userOptions = {};

const portafolio_llamada = async (bot,trigger) => {
    let mensaje = ''
    

    Object.entries(soluciones_obj).map(([key,value])=>{
      mensaje = mensaje + `**${key}**. ${value}\n` })

    let header ='**¡Hola!** ¿Puedo ayudarte alguna de las siguientes soluciones del portafolio?\n\n\n';
    let footer = '\n\n\nEscribe tu selección 😃 \n Ejemplo: Si quieres ayuda con DUO, ingresa "S2" o "DUO" ';

    mensaje = header + '\n\n'+ mensaje + '\n' + footer + '\n\n';
    await bot.say("markdown", mensaje)


    
}

const portafolio_opciones = async (bot,trigger) => {
    let actualselectedOption = trigger.message.text;
    console.log(actualselectedOption)
    if ( actualselectedOption.toLowerCase() == 's1' || actualselectedOption.toLowerCase() == "umbrella" ) {
      umbrella(bot)
      almacenarDatosEnServidor('umbrella')
      // Realizar acciones para la opción 1
    } else if (actualselectedOption.toLowerCase() == 's2' || actualselectedOption.toLowerCase() == "duo") {
      duo(bot)
      almacenarDatosEnServidor('duo')
      // Realizar acciones para la opción 2
    } else if (actualselectedOption.toLowerCase() == 's5' || actualselectedOption.toLowerCase() == "xdr"){
      xdr(bot)
      almacenarDatosEnServidor('xdr')
    }

}



module.exports = {portafolio_opciones, portafolio_llamada};

// framework.hears(/^(1|2)$/, async (bot, trigger) => {

//   });