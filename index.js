//Webex Bot Starter - featuring the webex-node-bot-framework - https://www.npmjs.com/package/webex-node-bot-framework
require("dotenv").config();
var framework = require("webex-node-bot-framework");
var webhook = require("webex-node-bot-framework/webhook");
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(express.static("images"));
var {portafolio_opciones, portafolio_llamada} = require('./portafolio')
var {ataques_opciones, ataques_llamada} = require('./ataques')
const {initializeAndProcessChatbot} = require('./NLP');
const {almacenarDatosEnServidor,obtenerDominio} = require ('./save_data/db_save')
const {intent_to_save} = require('./NLP/index')
require('dotenv').config()
const gateway = "SecuBotLB-1357288323.us-east-2.elb.amazonaws.com"
const publicIP = process.env.PUBLIC_IP
console.log(publicIP)
const config = {
  // webhookUrl: "https://a75a-179-6-14-155.ngrok-free.app",
  token: "NDk0M2E3MDAtZDY1Mi00ZDllLWE5MmUtZmYyYjhmN2U2N2RiNWI3YmRhNzEtZmQw_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",
  // port: 7001,
  webhookUrl: `http://${publicIP}`,
  //token: "NDk5NjFiODItY2IwMS00ZDRlLWE5MDItMWVjY2JkMjU3NThhZjRlYWRlYTUtMjQ4_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",
  port: 80
};
// init framework
var framework = new framework(config);
framework.start();
console.log("Starting framework, please wait...");

framework.on("initialized", () => {
  console.log("framework is all fired up! [Press CTRL-C to quit]");
});

// A spawn event is generated when the framework finds a space with your bot in it
// If actorId is set, it means that user has just added your bot to a new space
// If not, the framework has discovered your bot in an existing space
framework.on("spawn", (bot, id, actorId) => {
  if (!actorId) {
    // don't say anything here or your bot's spaces will get
    // spammed every time your server is restarted
    console.log(
      `While starting up, the framework found our bot in a space called: ${bot.room.title}`
    );
  } else {
    // When actorId is present it means someone added your bot got added to a new space
    // Lets find out more about them..
    var msg =
      "You can say `help` to get the list of words I am able to respond to.";
    bot.webex.people
      .get(actorId)
      .then((user) => {
        msg = `Hello there ${user.displayName}. ${msg}`;
      })
      .catch((e) => {
        console.error(
          `Failed to lookup user details in framwork.on("spawn"): ${e.message}`
        );
        msg = `Hello there. ${msg}`;
      })
      .finally(() => {
        // Say hello, and tell users what you do!
        if (bot.isDirect) {
          bot.say("markdown", msg);
        } else {
          let botName = bot.person.displayName;
          msg += `\n\nDon't forget, in order for me to see your messages in this group space, be sure to *@mention* ${botName}.`;
          bot.say("markdown", msg);
        }
      });
  }
});

// Implementing a framework.on('log') handler allows you to capture
// events emitted from the framework.  Its a handy way to better understand
// what the framework is doing when first getting started, and a great
// way to troubleshoot issues.
// You may wish to disable this for production apps
framework.on("log", (msg) => {
  console.log(msg);
});

// Process incoming messages
// Each hears() call includes the phrase to match, and the function to call if webex mesages
// to the bot match that phrase.
// An optional 3rd parameter can be a help string used by the frameworks.showHelp message.
// An optional fourth (or 3rd param if no help message is supplied) is an integer that
// specifies priority.   If multiple handlers match they will all be called unless the priority
// was specified, in which case, only the handler(s) with the lowest priority will be called

/* On mention with command
ex User enters @botname framework, the bot will write back in markdown
*/


/*PORTAFOLIO*/ 
framework.hears(/^(S|soluciones|portafolio)$/i, async (bot,trigger)=>{
  console.log("Se solicitó portafolio");
  portafolio_llamada(bot,trigger)
},0)


/*OPCION DE PORTAFOLIO*/
framework.hears(/^(S1|S2|S3|S4|S5|umbrella|duo|xdr|ise|secure endpoint)$/i, async (bot,trigger)=>{
  console.log("Se llamo a una solución de portafolio.")
  portafolio_opciones(bot,trigger); 
},1);

/* ATAQUES */
framework.hears(/^(A|ataques|ataque)$/i, async (bot,trigger)=>{
  console.log("Se solicitó ataques");
  ataques_llamada(bot,trigger)
},0)

/*OPCION DE ATAQUES*/
framework.hears(/^(A1|A2|A3|A4|phising|ransomware|malware|data breach|data breaches)$/i, async (bot,trigger)=>{
  console.log("Se llamó a un ataque de la lista.")
  ataques_opciones(bot,trigger); 
},1);





/* On mention with command, using other trigger data, can use lite markdown formatting
ex User enters @botname 'info' phrase, the bot will provide personal details
*/
framework.hears(
  "info",
  (bot, trigger) => {
    console.log("info command received");
    //the "trigger" parameter gives you access to data about the user who entered the command
    let personAvatar = trigger.person.avatar;
    let personEmail = trigger.person.emails[0];
    let personDisplayName = trigger.person.displayName;
    let outputString = `Here is your personal information: \n\n\n **Name:** ${personDisplayName}  \n\n\n **Email:** ${personEmail} \n\n\n **Avatar URL:** ${personAvatar}`;
    bot.say("markdown", outputString);
  },
  "**info**: (get your personal details)",
  0
);

/* On mention with bot data 
ex User enters @botname 'space' phrase, the bot will provide details about that particular space
*/
framework.hears(
  "space",
  (bot) => {
    console.log("space. the final frontier");
    let roomTitle = bot.room.title;
    let spaceID = bot.room.id;
    let roomType = bot.room.type;

    let outputString = `The title of this space: ${roomTitle} \n\n The roomID of this space: ${spaceID} \n\n The type of this space: ${roomType}`;

    console.log(outputString);
    bot
      .say("markdown", outputString)
      .catch((e) => console.error(`bot.say failed: ${e.message}`));
  },
  "**space**: (get details about this space) ",
  0
);

/* 
   Say hi to every member in the space
   This demonstrates how developers can access the webex
   sdk to call any Webex API.  API Doc: https://webex.github.io/webex-js-sdk/api/
*/
framework.hears(
  "say hi to everyone",
  (bot) => {
    console.log("say hi to everyone.  Its a party");
    // Use the webex SDK to get the list of users in this space
    bot.webex.memberships
      .list({ roomId: bot.room.id })
      .then((memberships) => {
        for (const member of memberships.items) {
          if (member.personId === bot.person.id) {
            // Skip myself!
            continue;
          }
          let displayName = member.personDisplayName
            ? member.personDisplayName
            : member.personEmail;
          bot.say(`Hello ${displayName}`);
        }
      })
      .catch((e) => {
        console.error(`Call to sdk.memberships.get() failed: ${e.messages}`);
        bot.say("Hello everybody!");
      });
  },
  "**say hi to everyone**: (everyone gets a greeting using a call to the Webex SDK)",
  0
);

// Buttons & Cards data
let cardJSON = {
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          width: "5",
          items: [
            {
              type: "Image",
              url: "Your avatar appears here!",
              size: "large",
              horizontalAlignment: "Center",
              style: "person",
            },
            {
              type: "TextBlock",
              text: "Your name will be here!",
              size: "medium",
              horizontalAlignment: "Center",
              weight: "Bolder",
            },
            {
              type: "TextBlock",
              text: "And your email goes here!",
              size: "small",
              horizontalAlignment: "Center",
              isSubtle: true,
              wrap: false,
            },
          ],
        },
      ],
    },
  ],
};

/* On mention with card example
ex User enters @botname 'card me' phrase, the bot will produce a personalized card - https://developer.webex.com/docs/api/guides/cards
*/
framework.hears(
  "card me",
  (bot, trigger) => {
    console.log("someone asked for a card");
    let avatar = trigger.person.avatar;

    cardJSON.body[0].columns[0].items[0].url = avatar
      ? avatar
      : `${config.webhookUrl}/missing-avatar.jpg`;
    cardJSON.body[0].columns[0].items[1].text = trigger.person.displayName;
    cardJSON.body[0].columns[0].items[2].text = trigger.person.emails[0];
    bot.sendCard(
      cardJSON,
      "This is customizable fallback text for clients that do not support buttons & cards"
    );
  },
  "**card me**: (a cool card!)",
  0
);

/* On mention reply example
ex User enters @botname 'reply' phrase, the bot will post a threaded reply
*/
framework.hears(
  "reply",
  (bot, trigger) => {
    console.log("someone asked for a reply.  We will give them two.");
    bot.reply(
      trigger.message,
      "This is threaded reply sent using the `bot.reply()` method.",
      "markdown"
    );
    var msg_attach = {
      text: "This is also threaded reply with an attachment sent via bot.reply(): ",
      file: "https://media2.giphy.com/media/dTJd5ygpxkzWo/giphy-downsized-medium.gif",
    };
    bot.reply(trigger.message, msg_attach);
  },
  "**reply**: (have bot reply to your message)",
  0
);

/* On mention with command
ex User enters @botname help, the bot will write back in markdown
 *
 * The framework.showHelp method will use the help phrases supplied with the previous
 * framework.hears() commands
*/
framework.hears(/^(ayuda|help|hola)$/i,
  (bot, trigger) => {
    console.log(`Alguien pidió ayuda con:  ${trigger.text}`);
    bot
      .say(`Hola ${trigger.person.displayName}.`)
      //    .then(() => sendHelp(bot))
      .then(() => bot.say("markdown", framework.showHelp()))
      .catch((e) => console.error(`Problem in help hander: ${e.message}`));
  },
  "**help**: (what you are reading now)",
  99
);

/* On mention with unexpected bot command
   Its a good practice is to gracefully handle unexpected input
   Setting the priority to a higher number here ensures that other 
   handlers with lower priority will be called instead if there is another match
*/
framework.hears(
  /.*/,
  async (bot, trigger) => {
    // This will fire for any input so only respond if we haven't already
    //console.log("TRIGGER",trigger)
    //console.log(`catch-all handler fired for user input: ${trigger.text}`);
    let persona_datos = [trigger.person.displayName, obtenerDominio(trigger.person.userName)]
    let {respuesta, url, _intent } = await initializeAndProcessChatbot(trigger.text)
    
    if (respuesta==='None'){
      bot.say("markdown", framework.showHelp())
    }
    else{
      bot
      .say("markdown",`${respuesta}`)
      //.then(() => bot.say("markdown", framework.showHelp()))
      //    .then(() => sendHelp(bot))
      .then(() => {
        url !== undefined ? bot.say({ text: '', file: url }) : null;
      })
      .then(()=>{
        let consulta = intent_to_save(_intent)
        console.log(persona_datos)
        almacenarDatosEnServidor(consulta,persona_datos)
      })      
      .catch((e) =>
        console.error(`Problem in the unexepected command hander: ${e.message}`)
      );
    } 
  },
  99999
);

//Server config & housekeeping
// Health Check
app.get("/", (req, res) => {
  res.send(`I'm alive.`);
});

app.post("/", webhook(framework));

var server = app.listen(config.port, () => {
  framework.debug("framework listening on port %s", config.port);
});

// gracefully shutdown (ctrl-c)
process.on("SIGINT", () => {
  framework.debug("stopping...");
  server.close();
  framework.stop().then(() => {
    process.exit();
  });
});


