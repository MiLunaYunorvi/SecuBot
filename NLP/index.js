const { NlpManager } = require('node-nlp');
const {trainModel} = require('./phising');



const processQuestion = async (manager, question) => {
  const response = await manager.process(question);
  console.log(response);
  return response.answer || response.intent;
};

let chatbotInitialized = false;
let chatbotResponseFunc = null;

const initializeChatbot = async () => {
  if (!chatbotInitialized) {
    const manager = new NlpManager({ languages: ['es'],threshold: 0.8});
    await trainModel(manager);
    chatbotResponseFunc = processQuestion.bind(null, manager);
    chatbotInitialized = true;
  }
  
  return chatbotResponseFunc;
};

const initializeAndProcessChatbot = async (pregunta) => {
    const chatbotResponse = await initializeChatbot();
  
    
    const respuesta = await chatbotResponse(pregunta);
  
    console.log(respuesta);
    return respuesta;
  };


//initializeAndProcessChatbot('¿Ataques de phishing?');

module.exports = {initializeAndProcessChatbot}


