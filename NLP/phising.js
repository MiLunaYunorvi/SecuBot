const { NlpManager } = require('node-nlp');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const {xdr_options} = require('../portafolio/xdr')
const {Umbrella_options} = require('../portafolio/umbrella')
const {duo_options} = require('../portafolio/duo')
const {ise_options} = require('../portafolio/ise')
const {secureendpoint_options} = require('../portafolio/secure_endpoint')
//Importando respuestas
const {respuesta_phishing, respuesta_ddos , respuesta_xdr, respuesta_umbrella, respuesta_duo, respuesta_ise, respuesta_secureendpoint}= require('./respuestas')

const trainModel = async (manager) => {

      phising_training(manager)
      ddos_training(manager)
      xdr_training(manager)
      umbrella_training(manager)
      duo_training(manager)
      ise_training(manager)
      secureendpoint_training(manager)
      // Realizar el entrenamiento del modelo aquí
      await manager.train();
      console.log("ENTRENADO")
};

const phising_training = async(manager) => {
const variations = ['pishing', 'phishing', 'phising', 'fishin', 'fishing','phishig'];
    variations.forEach((variant) => {
      const tokens = tokenizer.tokenize(variant);
      const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
      manager.addDocument('es', sentence, 'intencion.phishing_concepto');
    });
    
    variations.forEach((variant) => {
        const tokens = tokenizer.tokenize(variant);
        const sentence = '¿Qué es el ' + tokens.join(' ') + '?'; // Concatenar la cadena fija con los tokens
        manager.addDocument('es', sentence, 'intencion.phishing_concepto');
    });


  
    variations.forEach((variant) => {
        const tokens = tokenizer.tokenize(variant);
        const token = tokens.join(' '); // Unir todos los tokens en una sola cadena

        manager.addDocument('es', 'Cuáles son las soluciones de seguridad de Cisco específicas para prevenir ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cómo Cisco protege contra ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cuáles son las soluciones de Cisco para ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', 'Cuáles son las soluciones de seguridad de Cisco específicas para prevenir ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cómo Cisco protege contra ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cuáles son las soluciones de Cisco para ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cisco previene el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Qué hace Cisco contra el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cómo ayuda Cisco a prevenir el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', 'Tipos de ataques de ' + token, 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Qué medidas toma Cisco para prevenir el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cuál es la protección de Cisco contra el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', 'Explícame las soluciones de Cisco contra el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cisco ofrece herramientas para combatir el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Qué soluciones de seguridad de Cisco protegen contra el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cuáles son las herramientas de Cisco contra el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cisco tiene tecnologías anti-' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cómo enfrenta Cisco el problema del ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cuáles son las soluciones de Cisco para evitar el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Qué opciones ofrece Cisco para combatir el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Cisco cuenta con protección contra el ' + token + '?', 'intencion.soluciones_phishing');
        manager.addDocument('es', '¿Qué productos de Cisco ayudan a prevenir el ' + token + '?', 'intencion.soluciones_phishing');
    });
  
    // Añade las respuestas para el NLG
    manager.addAnswer('es', 'intencion.soluciones_phishing', respuesta_phishing());
    manager.addAnswer('es', 'intencion.phishing_concepto', 'El phishing es un tipo de ataque cibernético en el que los atacantes se hacen pasar por entidades confiables para obtener información confidencial.');
    //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
    //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
}

const ddos_training = async(manager) => {
  const variations = ['DDoS','ddos','Ddos', 'DDOS', 'DDoS attack', 'Distributed Denial of Service', 'Denial of Service', 'DoS', 'DOS', 'DoS attack', 'Denegación de Servicio', 'Ataque de denegación de servicio'];

    variations.forEach((variant) => {
      const tokens = tokenizer.tokenize(variant);
      const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
      manager.addDocument('es', sentence, 'intencion.ddos_concepto');
    });
    
    variations.forEach((variant) => {
        const tokens = tokenizer.tokenize(variant);
        const token = tokens.join(' ');

        manager.addDocument('es', 'Qué es ' + token + '?' , 'intencion.ddos_concepto');
        manager.addDocument('es', 'Qué es un ataque' + token + '?' , 'intencion.ddos_concepto');
        manager.addDocument('es', 'Qué significa ' + token + '?' , 'intencion.ddos_concepto');
        manager.addDocument('es', 'Qué es un ataque' + token + '?', 'intencion.ddos_concepto');
        manager.addDocument('es', 'Explícame un' + token + '.', 'intencion.ddos_concepto');
        manager.addDocument('es', 'Qué significa' + token + '?', 'intencion.ddos_concepto');
        manager.addDocument('es', 'Cuéntame sobre los ataques de denegación de servicio distribuido' + token + '.', 'intencion.ddos_concepto');
        manager.addDocument('es', '¿En qué consiste un ataque' + token + '?', 'intencion.ddos_concepto');
        manager.addDocument('es', '¿Cómo funciona un ataque' + token + '?', 'intencion.ddos_concepto');
        manager.addDocument('es', 'Dime sobre los ataques que colapsan los servidores' + token + '.', 'intencion.ddos_concepto');
        manager.addDocument('es', '¿Qué puedes decirme sobre los ataques' + token + '?', 'intencion.ddos_concepto');
        manager.addDocument('es', 'Explica brevemente qué son los ataques de denegación de servicio' + token + '.', 'intencion.ddos_concepto');
        manager.addDocument('es', 'Cuéntame sobre los ataques que inundan un sitio web' + token + '.', 'intencion.ddos_concepto');
    });


  
    variations.forEach((variant) => {
        const tokens = tokenizer.tokenize(variant);
        const token = tokens.join(' '); // Unir todos los tokens en una sola cadena

        manager.addDocument('es', 'Cuáles son las soluciones de seguridad de Cisco específicas para prevenir ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cómo Cisco protege contra ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cuáles son las soluciones de Cisco para ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', 'Cuáles son las soluciones de seguridad de Cisco específicas para prevenir ' + token + '?', 'intencion.soluciones_ddosg');
        manager.addDocument('es', '¿Cómo Cisco protege contra ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cuáles son las soluciones de Cisco para ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cisco previene el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Qué hace Cisco contra el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cómo ayuda Cisco a prevenir el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', 'Tipos de ataques de ' + token, 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Qué medidas toma Cisco para prevenir el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cuál es la protección de Cisco contra el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', 'Explícame las soluciones de Cisco contra el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cisco ofrece herramientas para combatir el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Qué soluciones de seguridad de Cisco protegen contra el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cuáles son las herramientas de Cisco contra el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cisco tiene tecnologías anti-' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cómo enfrenta Cisco el problema del ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cuáles son las soluciones de Cisco para evitar el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Qué opciones ofrece Cisco para combatir el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Cisco cuenta con protección contra el ' + token + '?', 'intencion.soluciones_ddos');
        manager.addDocument('es', '¿Qué productos de Cisco ayudan a prevenir el ' + token + '?', 'intencion.soluciones_ddos');
    });
  
    // Añade las respuestas para el NLG
    manager.addAnswer('es', 'intencion.soluciones_ddos', respuesta_ddos());
    manager.addAnswer('es', 'intencion.ddos_concepto', respuesta_ddos());
    //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
    //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
}

const xdr_training = async(manager) => {
  const variations = ["cisco XDR","Cisco Extended Detection and Response","XDR solution by Cisco","Cisco's XDR offering","XDR platform from Cisco","Cisco's Extended Detection and Response","Cisco Secure XDR","XDR solution provided by Cisco","Cisco XDR capabilities","Cisco's XDR security solution", "Deteccion de incidentes","Respuesta a incidentes","Detección y respuesta a incidentes"];

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
    manager.addDocument('es', sentence, 'intencion.xdr_concepto');
  });
  
  variations.forEach((variant) => {
      const tokens = tokenizer.tokenize(variant);
      const token = tokens.join(' ');

      manager.addDocument('es', 'Qué es ' + token + '?' ,  'intencion.xdr_concepto');
      manager.addDocument('es', 'Qué significa ' + token + '?' ,  'intencion.xdr_concepto');
      manager.addDocument('es', 'Explícame sobre' + token + '.',  'intencion.xdr_concepto');
      manager.addDocument('es', 'Qué significa' + token + '?',  'intencion.xdr_concepto');
      manager.addDocument('es', 'Cuéntame sobre' + token + '.',  'intencion.xdr_concepto');
      manager.addDocument('es', '¿En qué consiste ' + token + '?',  'intencion.xdr_concepto');
      manager.addDocument('es', '¿Cómo funciona ' + token + '?',  'intencion.xdr_concepto');
      manager.addDocument('es', '¿Qué puedes decirme sobre ' + token + '?', 'intencion.xdr_concepto');
      manager.addDocument('es', 'Explica brevemente qué es' + token + '.',  'intencion.xdr_concepto');
  });



  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const xdrLicensesVariations = [
      `Cuales son los niveles de licenciamiento de ${token}?`,
      `Explícame los paquetes de licencias disponibles para ${token}.`,
      `Dime las opciones de licencias que ofrece ${token}.`,
      `Cuáles son los diferentes niveles de XDR que se pueden obtener para ${token}.`,
      `Qué tipos de licencias están disponibles para ${token}.`,
      `Háblame sobre los niveles de licenciamiento de ${token}.`,
      `Qué opciones de licencias tiene ${token} para ofrecer.`,
      `Qué paquetes de licencias ofrece ${token}.`,
      `Cuáles son los niveles de XDR que puedo adquirir para ${token}.`,
      `Dime los diferentes tipos de licencias disponibles para ${token}.`,
    ];
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of xdrLicensesVariations) {
      manager.addDocument('es', question, 'intencion.licencias_xdr');
    }
  });

  const generateXDRResponse = () => {
    let mensaje = '';
    let header = 'Seleccionaste XDR. Estos son los recursos disponibles: \n\n\n';
    let footer = 'También puedes probar con: "Licencias xdr", "XDR Licenciamiento", "Paquetes XDR".';
    mensaje = mensaje + header 
    Object.entries(xdr_options).map(([key, value]) => {
      mensaje = mensaje + `**${key}**: ${value}\n\n\n`;
    });
    mensaje = mensaje  + footer;
    return mensaje;
  };

  // Añade las respuestas para el NLG
  manager.addAnswer('es', 'intencion.xdr_concepto', generateXDRResponse());

  manager.addAnswer('es', 'intencion.licencias_xdr', respuesta_xdr());
  //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
  //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
} 

const umbrella_training = async(manager) => {
  const variations = ['Cisco Umbrella','Umbrella de Cisco','Umbrella','umbrella','Umbrela','umbrela','UMBRELLA','UmBReLLa','UmbRella','umBReLLa','umbrellA','Umbr3lla'
  ];

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
    manager.addDocument('es', sentence, 'intencion.umbrella_concepto');
  });
  
  variations.forEach((variant) => {
      const tokens = tokenizer.tokenize(variant);
      const token = tokens.join(' ');

      manager.addDocument('es', 'Qué es ' + token + '?' ,  'intencion.umbrella_concepto');
      manager.addDocument('es', 'Qué significa ' + token + '?' ,  'intencion.umbrella_concepto');
      manager.addDocument('es', 'Explícame sobre' + token + '.',  'intencion.umbrella_concepto');
      manager.addDocument('es', 'Qué significa' + token + '?',  'intencion.umbrella_concepto');
      manager.addDocument('es', 'Cuéntame sobre' + token + '.',  'intencion.umbrella_concepto');
      manager.addDocument('es', '¿En qué consiste ' + token + '?',  'intencion.umbrella_concepto');
      manager.addDocument('es', '¿Cómo funciona ' + token + '?',  'intencion.umbrella_concepto');
      manager.addDocument('es', '¿Qué puedes decirme sobre ' + token + '?', 'intencion.umbrella_concepto');
      manager.addDocument('es', 'Explica brevemente qué es' + token + '.',  'intencion.umbrella_concepto');
  });


  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const xdrLicensesVariations = [
      `Cuales son los niveles de licenciamiento de ${token}?`,
      `Explícame los paquetes de licencias disponibles para ${token}.`,
      `Dime las opciones de licencias que ofrece ${token}.`,
      `Cuáles son los diferentes niveles de ${token} que se pueden obtener.`,
      `Qué tipos de licencias están disponibles para ${token}.`,
      `Háblame sobre los niveles de licenciamiento de ${token}.`,
      `Qué opciones de licencias tiene ${token} para ofrecer.`,
      `Qué paquetes de licencias ofrece ${token}.`,
      `Cuáles son los niveles de ${token} que puedo adquirir. `,
      `Dime los diferentes tipos de licencias disponibles para ${token}.`,
    ];
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of xdrLicensesVariations) {
      manager.addDocument('es', question, 'intencion.licencias_umbrella');
    }
  });

  const generateUmbrellaResponse = () => {
    let mensaje = '';
    let header = 'Seleccionaste Umbrella. Estos son los recursos disponibles: \n\n\n';
    let footer = 'También puedes probar con: "Licencias de Umbrella", "Umbrella Licenciamiento"..';
    mensaje = mensaje + header 
    Object.entries(Umbrella_options).map(([key, value]) => {
      mensaje = mensaje + `**${key}**: ${value}\n\n\n`;
    });
    mensaje = mensaje  + footer;
    return mensaje;
  };

  // Añade las respuestas para el NLG
  manager.addAnswer('es', 'intencion.umbrella_concepto', generateUmbrellaResponse());

  manager.addAnswer('es', 'intencion.licencias_umbrella', respuesta_umbrella());
  //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
  //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
} 

//DUO
const duo_training = async(manager) => {

  const solucion = 'duo'

  //cambiar variaciones 
  const variations =  ['Cisco DUO','Duo Security','DUO MFA','DUO Authentication','Cisco MFA','Multi-Factor Authentication','MFA Solution','Cisco Two-Factor Authentication','Cisco Two-Step Verification','DUO Access Control',];

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
    manager.addDocument('es', sentence, `intencion.${solucion}_concepto`);
  });
  
  variations.forEach((variant) => { `intencion.${solucion}_concepto`      
      const tokens = tokenizer.tokenize(variant);
      const token = tokens.join(' ');

      manager.addDocument('es', 'Hablame de' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué es ' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué significa ' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Explícame sobre' + token + '.',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué significa' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Cuéntame sobre' + token + '.',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿En qué consiste ' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿Cómo funciona ' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿Qué puedes decirme sobre ' + token + '?', `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Explica brevemente qué es' + token + '.',  `intencion.${solucion}_concepto`);
  });



  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const xdrLicensesVariations = [
      `Cuales son los niveles de licenciamiento de ${token}?`,
      `Explícame los paquetes de licencias disponibles para ${token}.`,
      `Dime las opciones de licencias que ofrece ${token}.`,
      `Cuáles son los diferentes niveles de ${token} que se pueden obtener.`,
      `Qué tipos de licencias están disponibles para ${token}.`,
      `Háblame sobre los niveles de licenciamiento de ${token}.`,
      `Qué opciones de licencias tiene ${token} para ofrecer.`,
      `Qué paquetes de licencias ofrece ${token}.`,
      `Cuáles son los niveles de ${token} que puedo adquirir. `,
      `Dime los diferentes tipos de licencias disponibles para ${token}.`,
    ];
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of xdrLicensesVariations) {
      manager.addDocument('es', question, `intencion.licencias_${solucion}`);
    }
  });

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const duoMFAoptions = [
      `Cuales son los tipos de MFA disponibles en ${token}?`,
    `Explícame las opciones de MFA ofrecidas por ${token}.`,
    `Dime las diferentes opciones de MFA que ${token} ofrece.`,
    `Cuáles son los tipos de autenticación multifactor que puedo usar en ${token}.`,
    `Qué métodos de MFA están disponibles para ${token}.`,
    `Háblame sobre las opciones de autenticación multifactor de ${token}.`,
    `Qué tipos de MFA ofrece ${token}.`,
    `Cuáles son las opciones de autenticación en dos pasos que ${token} proporciona.`,
    `Dime los diferentes métodos de autenticación multifactor disponibles para ${token}.`,
    `Qué opciones de MFA puedo utilizar en ${token}.`,
    ];
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of duoMFAoptions) {
      manager.addDocument('es', question, `intencion.opcionesMFA_${solucion}`);
    }
  });

  
  

//CAMBIAR LA FUNCION_NOMBRE
  const generateDUOResponse = () => {
    let mensaje = '';
    let header = `Seleccionaste ${solucion.toLocaleUpperCase()}. Estos son los recursos disponibles: \n\n\n`;
    let footer = `También puedes probar con: "Licencias de ${solucion}", "${solucion} Licenciamiento"..`;
    mensaje = mensaje + header 
    //CAMBIAR NOMBRE DE LA OPCION
    Object.entries(duo_options).map(([key, value]) => {
      mensaje = mensaje + `**${key}**: ${value}\n\n\n`;
    });
    mensaje = mensaje  + footer;
    return mensaje;
  };

  // CAMBIAR NOMBRE DE RESPUESTAS
  manager.addAnswer('es', `intencion.${solucion}_concepto`, generateDUOResponse());
  manager.addAnswer('es', `intencion.licencias_${solucion}`, respuesta_duo('licencias'));
  manager.addAnswer('es', `intencion.opcionesMFA_${solucion}`, respuesta_duo('opcionesMFA'));
  
  //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
  //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
} 

//ISE
const ise_training = async(manager) => {

  const solucion = 'ise'

  //cambiar variaciones 
  const variations = ["Cisco ISE","CISCO NAC","Service Identity Engine","Cisco Identity Services Engine","ISE","Identity Services Engine","Cisco NAC","Service ID Engine","Cisco Identity Engine","ISE Security Solution","Cisco Network Access Control","Identity and Access Management Solution"];

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
    manager.addDocument('es', sentence, `intencion.${solucion}_concepto`);
  });
  
  variations.forEach((variant) => { `intencion.${solucion}_concepto`      
      const tokens = tokenizer.tokenize(variant);
      const token = tokens.join(' ');

      manager.addDocument('es', 'Qué es ' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué significa ' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Explícame sobre' + token + '.',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué significa' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Cuéntame sobre' + token + '.',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿En qué consiste ' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿Cómo funciona ' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿Qué puedes decirme sobre ' + token + '?', `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Explica brevemente qué es' + token + '.',  `intencion.${solucion}_concepto`);
  });



  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const iseUseCasesVariations = [
      `Cuales son los casos de uso de ${token}?`,
      `Dime las aplicaciones de ${token}.`,
      `Qué funciones tiene ${token} en una red?`,
      `Cuáles son las utilidades de ${token}?`,
      `Explícame cómo se puede utilizar ${token} en una empresa.`,
      `Qué ventajas ofrece ${token} para la seguridad de una red?`,
      `Háblame sobre los casos de éxito de ${token}.`,
      `Cuáles son las principales implementaciones de ${token}?`,
      `Qué ejemplos de uso de ${token} existen en la industria?`,
      `Dime los beneficios de implementar ${token} en una red.`
    ];
    
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of iseUseCasesVariations) {
      manager.addDocument('es', question, `intencion.usecases_${solucion}`);
    }
  });

  //CAMBIAR LA FUNCION_NOMBRE

  const generateISEResponse = (bot) => {
    let mensaje = ''
    let header = `Seleccionaste ${solucion}. Estos son los recursos disponibles: \n\n\n`
    mensaje = mensaje + header,
    Object.entries(ise_options).map(([key,value])=>{
        mensaje = mensaje + `**${key}**: ${value}\n\n\n`
    })
    let footer = `También puedes consultar por: "Casos de uso de ${solucion}" `;
    mensaje = mensaje  + footer;
    return mensaje;
    
  }



  // CAMBIAR NOMBRE DE RESPUESTAS
  manager.addAnswer('es', `intencion.${solucion}_concepto`, generateISEResponse());
  //manager.addAnswer('es', `intencion.licencias_${solucion}`, respuesta_duo('licencias'));
  manager.addAnswer('es', `intencion.usecases_${solucion}`, respuesta_ise('casos de uso'));
  
  //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
  //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
} 

//SECURE ENDPOINT
const secureendpoint_training = async(manager) => {

  const solucion = 'secureendpoint'

  //cambiar variaciones 
  const variations = ["Cisco Secure Endpoint",
  "Endpoint Detection and Response (EDR) de Cisco",
  "Cisco Advanced Malware Protection (AMP)",
  "Solución de protección de endpoints de Cisco",
  "EDR para dispositivos Windows, Mac, Linux, Android e iOS",
  "Seguridad de endpoints con Cisco Secure Endpoint",
  "Cisco Secure Endpoint para la protección completa de endpoints",
  "Endpoint Protection Platform (EPP) de Cisco",
  "Cisco Secure Endpoint: EDR y protección de endpoints combinados",
  "Cisco AMP para la detección y protección de endpoints",
  "Solución integral de seguridad de endpoints de Cisco",
  "Cisco Secure Endpoint: detección y respuesta para endpoints",
  "Endpoint Security de Cisco con EDR incluido",
  "Solución de protección de dispositivos Cisco Secure Endpoint",
  "Cisco Secure Endpoint: seguridad y respuesta ante amenazas de endpoints",
  "Cisco Advanced Malware Protection (AMP)",
  "Protección avanzada contra malware de Cisco",
  "Cisco AMP para la detección y eliminación de malware",
  "Plataforma de protección contra malware de Cisco",
  "Solución de seguridad contra malware de Cisco",
  "Cisco AMP: protección contra amenazas avanzadas",
  "Defensa contra malware con Cisco Advanced Malware Protection",
  "Protección contra malware con Cisco AMP",
  "Solución integral de seguridad contra malware de Cisco",
  "Cisco AMP: detección y protección contra malware"];

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const sentence = tokens.join(' '); // Unir los tokens en una sola cadena
    manager.addDocument('es', sentence, `intencion.${solucion}_concepto`);
  });
  
  variations.forEach((variant) => { 
      `intencion.${solucion}_concepto`      
      const tokens = tokenizer.tokenize(variant);
      const token = tokens.join(' ');

      manager.addDocument('es', 'Qué es ' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué significa ' + token + '?' ,  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Explícame sobre' + token + '.',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Qué significa' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Cuéntame sobre' + token + '.',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿En qué consiste ' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿Cómo funciona ' + token + '?',  `intencion.${solucion}_concepto`);
      manager.addDocument('es', '¿Qué puedes decirme sobre ' + token + '?', `intencion.${solucion}_concepto`);
      manager.addDocument('es', 'Explica brevemente qué es' + token + '.',  `intencion.${solucion}_concepto`);
  });

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const ampLicensesVariations = [
      `Cuales son los niveles de licenciamiento de ${token}?`,
      `Explícame los paquetes de licencias disponibles para ${token}.`,
      `Dime las opciones de licencias que ofrece ${token}.`,
      `Cuáles son los diferentes niveles de ${token} que se pueden obtener.`,
      `Qué tipos de licencias están disponibles para ${token}.`,
      `Háblame sobre los niveles de licenciamiento de ${token}.`,
      `Qué opciones de licencias tiene ${token} para ofrecer.`,
      `Qué paquetes de licencias ofrece ${token}.`,
      `Cuáles son los niveles de ${token} que puedo adquirir. `,
      `Dime los diferentes tipos de licencias disponibles para ${token}.`,
    ];
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of ampLicensesVariations) {
      manager.addDocument('es', question, `intencion.licencias_${solucion}`);
    }
  });

  variations.forEach((variant) => {
    const tokens = tokenizer.tokenize(variant);
    const token = tokens.join(' ');
  
    const secureEndpointCompatibilityQuestions = [
      `¿Qué funciones tiene ${token} en los sistemas operativos?`,
      `Explícame la compatibilidad de ${token} con Windows.`,
      `¿Qué funciones ${token} ofrece para dispositivos Windows?`,
      `¿Cuáles son las capacidades de ${token} en sistemas operativos Mac?`,
      `¿Qué funciones tiene ${token} para dispositivos Mac?`,
      `Dime las características de ${token} para sistemas operativos Linux.`,
      `¿Qué funciones de seguridad ofrece ${token} para Linux?`,
      `Háblame sobre la compatibilidad de ${token} con Android.`,
      `¿Qué funciones de seguridad proporciona ${token} en dispositivos Android?`,
      `¿Cuál es la compatibilidad de ${token} con dispositivos de Apple?`,
      `Explícame las funciones de ${token} en dispositivos iOS.`,
      `¿Qué sistemas operativos son compatibles con ${token}?`,
      `Dime las plataformas de sistemas operativos soportados por ${token}.`,
      `¿Qué dispositivos móviles son compatibles con ${token}?`,
      `Explícame cómo funciona ${token} en diferentes sistemas operativos.`
    ];
    
  
    // Agregar las variantes a la intención 'intencion.licencias_xdr'
    for (const question of secureEndpointCompatibilityQuestions) {
      manager.addDocument('es', question, `intencion.compatibilidad_${solucion}`);
    }
  });

  //CAMBIAR LA FUNCION_NOMBRE

  const generateSecureEndpointResponse = (bot) => {
    let mensaje = ''
    let header = `Seleccionaste ${solucion}. Estos son los recursos disponibles: \n\n\n`
    mensaje = mensaje + header,
    Object.entries(secureendpoint_options).map(([key,value])=>{
        mensaje = mensaje + `**${key}**: ${value}\n\n\n`
    })
    let footer = `También puedes consultar por: "Licencias de ${solucion}" o "Compatibilidad de ${solucion}" o "Funciones de ${solucion} en Linux/Windows,etc`;
    mensaje = mensaje  + footer;
    return mensaje;
    
  }



  // CAMBIAR NOMBRE DE RESPUESTAS
  manager.addAnswer('es', `intencion.${solucion}_concepto`, generateSecureEndpointResponse());
  manager.addAnswer('es', `intencion.licencias_${solucion}`, respuesta_secureendpoint('licencias'));
  manager.addAnswer('es', `intencion.compatibilidad_${solucion}`, respuesta_secureendpoint('compatibilidad'));
  
  //manager.addAnswer('es', 'intencion.pregunta', 'Para prevenir el phishing, es importante ser cauteloso al abrir correos electrónicos y hacer clic en enlaces desconocidos. También se recomienda utilizar autenticación de dos factores y mantener los sistemas y aplicaciones actualizados.');
  //manager.addAnswer('es', 'intencion.ataques', 'Algunos tipos comunes de ataques de phishing incluyen spear phishing, whaling, vishing, smishing y pharming.');
} 

module.exports = {trainModel}


