const { GoogleSpreadsheet} = require('google-spreadsheet');
const { JWT } = require('google-auth-library')


function obtenerFechaFormateada() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}/${month}/${day}`;
  }

async function insertarDatos(palabra) {
  const serviceAccountAuth = new JWT({
    // Aquí debes proporcionar los valores de las credenciales de la cuenta de servicio de Google
    email: 'chatbot@chatbot-391820.iam.gserviceaccount.com',
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCC2NzKoXDsAhZh\ngGm/0pgmfeqE3w5fMfdHy+TJik6xqouvLykLYygD0TxAMgtMSqWJttWOpOXSwiTS\nmZ7+a47FkDiFmfD0aumeAZqRmnHwtqDvxCxwu5Vvewzw44Vr7zb06Nf9dZwLjhfw\n9swdK/XOnEPh2Dh7hUP3WgHeOmAAPUH8SVsEqq7eiToYi+S0lYFOBr9JLt7BRm6m\nCZkmh8k3ehhvfRIrWQRQXP/5/hLlow/SngSQNYprvCNaSgJRGUThhhUoA77IXjCU\nh3qHi4dkcIlR8dflzncJwaB9lQRUjufDAr5IikPKJ1/Uuf18G+QvZ2jYmnh1te06\nvByqPVVRAgMBAAECggEAAmnzBjHZs61Oez4lC67pE7VPgzCn8v5iW69+beMYh5tL\nQ3NdDQ30HICEVw69Sd5K+CbyJ2HYI6eLsGifjkpboMr3DSyDxxSL8QUbtE6YH8SH\n8UhqK/dWWHwTOlEhaNypw9vVGtXlh8qKjno7fEwvcMank2+1JT7Pz00LwaBlnT3j\nteS9FqhirVamh5au+k8OlPIrbIf9S5AF5zXrCanyC6pDfK2hUmaB7dWbUbldudh5\nhCFZAVea9U7H5i76SP4ijOTG+Tc+U+t5n/gtQg/uWa3PTjWe55loupw8bk5GsxSq\naLd4L/SP8zPD4Qyn+znrJ3koKOQaLuGPRSyBBgtzqQKBgQC4VpR8qjczWM29QMVm\necjPkitSehkXYV1uHd7Ro7/8ZUYjaZUeO14zKl8sWJ+4w1LX+XH7pXVXXfmkIsKr\nDqMAaX568tVvNq3q7yRRkHvKLVMxiAieVvf3Y3e0yKuEf/yhH5SSIA2X/gb2fltz\nwVFt++F4CzslzmoI8u5Ip+6UyQKBgQC1ttNxRT7XdeNoVowQpRNX9dpHBK83bsqs\nEmnbd0lXVZ4z9EULczc/M9I6fM8u+TWCheLYKRchKgeLTz+hgJJoxr/FXKwaJOEu\nFfLMmG/Rta462wT5zG4ts6V8EWuSFLnEjG3kHmBe6/l57fJ1fa62QS2bHypRqslS\nSeUm5omoSQKBgBkFp6JEeLm/lC3cXO9MGLYUYU0QxdcmoEgSReyvDaB1HtAvxM4V\nwPOxDLo4TXYHDXfDpHVEQGlbmEdvcH1Hv1iO+Vw3GkG+al05mPR5aFRJUsGmdYUI\nySALoHQpyR5zQRed8czkDPRUxx0uibtswmDrj+97lsvK+Rm94Bp8sSYBAoGAXj5y\nL38gdpL33Ld2cXOMMsSZ7tdpILDfgJsUN/UIHrmTEZMQ9D1PXAI+eIMe2Vf6/rT9\nz+qPym2H+CKj99k9FgZuk6fawrx55XMQuDgfVn6J3JCXZg823ZEctNo8FkmVh3Dl\n1bhDdzef7jMQ2wrSQEhRpPBm/HA9deZJaQGMR7ECgYBu86hK2YFA3H66K4nFwr/0\nFJbkZ7MjGBR/+ZfM6zO6/OwkUhTXh1uMemQbVidQ3fpDKfB8og94ME8Ug7NLdanU\nVInBK7wMxCTQrnc6JOtK3gCqIUMy9tYFirP3YynBf5qXEjFsACZWPJsEsw8zCZfF\ndk7RvVHoZ2E9RCVR3y7Q4g==\n-----END PRIVATE KEY-----\n", // Asegúrate de manejar correctamente los saltos de línea en la clave privada
    scopes: ['https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',],
  });

  const doc = new GoogleSpreadsheet('1rirC1vh_YQjnAtbLVrmyUsfTTqbQU1TMvU9QZU0hZxQ', serviceAccountAuth ); // Reemplaza con el ID de tu hoja de cálculo
  //console.log(doc)
  
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const fecha = obtenerFechaFormateada();
  const sheet = doc.sheetsByIndex[0]; // Selecciona la hoja de cálculo por su índice (0 en este caso)
  const newRow = await sheet.addRow({ Fecha: fecha, Consulta: palabra });
  console.log('Fila insertada:', newRow);
}


module.exports = {insertarDatos}