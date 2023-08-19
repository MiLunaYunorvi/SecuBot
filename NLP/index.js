const { NlpManager } = require('node-nlp');
const { trainModel } = require('./phising');


const processQuestion = async (manager, question) => {
  const response = await manager.process(question);
  let intent = response.intent;
  console.log('RESPUESTA: ', response)
  //console.log(response.answer , intent); 
  return [response.answer || response.intent, intent];
};

let chatbotInitialized = false;
let chatbotResponseFunc = null;
let intent = null;

const initializeChatbot = async () => {
  if (!chatbotInitialized) {
    console.log("ENTRENANDO")
    const manager = new NlpManager({ languages: ['es'], threshold: 0.5});
    await trainModel(manager);
    chatbotResponseFunc = processQuestion.bind(null, manager);
    [intent] = await processQuestion(manager, ''); // Obtener el valor de 'intent' usando processQuestion
    chatbotInitialized = true;
  }
  
  return [chatbotResponseFunc, intent];
};

const initializeAndProcessChatbot = async (pregunta) => {
  const [chatbotResponse, intent] = await initializeChatbot();
  const [respuesta, _intent] = await chatbotResponse(pregunta);
  let url = intent_to_url(_intent)
  console.log('EN SEGUNDA FUNCION: ' , respuesta, url);
  return {respuesta, url ,_intent};
};

const intent_to_url = (intent) => {
  const intent_url_objeto  = {
    'intencion.phishing_concepto' : 'https://secubotbucket.s3.us-east-2.amazonaws.com/phising.jpg',
    'intencion.soluciones_phishing' : 'https://secubotbucket.s3.us-east-2.amazonaws.com/cisco_phising.jpg',
    'intencion.licencias_xdr': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/XDR/paquetes_xdr.png' ,
    'intencion.licencias_umbrella': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/UMBRELLA/umbrella_license.png',
    'intencion.licencias_duo': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/DUO/duo_licenciamiento.png' ,
    'intencion.opcionesMFA_duo': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/DUO/duo_mfa_options.png' ,
    'intencion.usecases_ise': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/ISE/ISE_UseCases.png' ,
    'intencion.licencias_secureendpoint': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/secureEndpoint_license.png' ,
    'intencion.compatibilidad_secureendpoint': 'https://secubotbucket.s3.us-east-2.amazonaws.com/SOLUCIONES/Secure+Endpoint/secureEndpoint_compatibilidad.png',
  }
  return intent_url_objeto[intent]
}

const intent_to_save = (intent) => {
  const intent_to_word_objeto ={
    "intencion.phishing_concepto" : "phishing" ,
    "intencion.soluciones_phishing" : "phishing" ,

    "intencion.ddos_concepto" : "ddos" ,
    "intencion.soluciones_ddos" : "ddos" ,

    "intencion.xdr_concepto" : "xdr" ,
    "intencion.licencias_xdr" : "" ,

    "intencion.umbrella_concepto" : "umbrella" ,
    "intencion.licencias_umbrella" : "umbrella" ,

    "intencion.duo_concepto" : "duo" ,
    "intencion.licencias_duo" : "duo" ,
    "intencion.opcionesMFA_duo" : "duo" ,

    "intencion.ise_concepto" : "ise" ,
    "intencion.usecases_ise" : "ise" ,

    "intencion.secureendpoint_concepto" : "secure endpoint" ,
    "intencion.licencias_secureendpoint" : "secure endpoint" ,
    "intencion.compatibilidad_secureendpoint" : "secure endpoint" ,
  }
  return intent_to_word_objeto[intent]
}

module.exports = { initializeAndProcessChatbot, intent_to_save };

