const { Router } = require('express')
const router = Router()
const natural = require('natural')
const train = require('../train/train.js')
const classifier = new natural.BayesClassifier()
train(classifier)
classifier.train()

router.post('/send', (req, res) => {
  const { message } = req.body

  const classification = classifier.classify(message)
  console.log(classification)
  /*  let response
  switch (classification) {
    case 'saludo':
      response = 'Hola!!'
      break
    case 'pregunta':
      response = 'Hola!! muy bien y tu ?'
      break
    case 'bien':
      response = 'Me alegro de oír eso'
      break
    case 'mal':
      response = 'Lo siento de oír eso'
      break
    case 'chiste':
      response = 'Esto seria un chiste jajajj'
      break
    case 'mi nombre':
      response = 'No tengo un nombre, puesto que soy un bot de tan solo comunicacion'
      break

    default:
      response = 'Lo siento, no entiendo lo que estás diciendo'
      break
  } */

  const responses = {
    miNombre: 'Lo siento no tengo nombre, puesto que soy un bot',
    saludo: 'Hola como estas ?',
    bien: 'Me alegro de oír eso',
    mal: 'Lamento oir eso',
    noEntiendo: 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?',
    entrega: 'Nuestros horarios de entrega son de lunes a viernes de 9:00 a.m. a 5:00 p.m.',
    'atencion al cliente':
      'Nuestros horarios de atención al cliente son de lunes a viernes de 9:00 a.m. a 5:00 p.m.',
    devoluciones:
      'Para hacer una devolución, por favor contáctanos a través de nuestro formulario de contacto o envía un correo electrónico a info@tienda.com con tu número de pedido y una descripción del producto que deseas devolver.',
    cambios:
      'Para hacer un cambio, por favor contáctanos a través de nuestro formulario de contacto o envía un correo electrónico a info@tienda.com con tu número de pedido y una descripción del producto que deseas cambiar.',
    terminosYcondiciones:
      'Nuestros términos y condiciones se encuentran disponibles en nuestro sitio web en la sección "Términos y Condiciones".',
    politicasDePrivacidad:
      'Nuestras políticas de privacidad se encuentran disponibles en nuestro sitio web en la sección "Políticas de Privacidad".',
    direccion: 'Nuestra dirección es: 123 Main Street, Ciudad, País',
    tiendaFisica: 'Sí, tenemos una tienda física ubicada en 123 Main Street, Ciudad, País.',
    hacerUnPedido:
      'Para hacer un pedido, por favor añade los productos que deseas a tu carrito de compras y sigue las instrucciones del proceso de pago.',
    procesoDePago:
      'El proceso de pago es seguro y se realiza a través de nuestro sistema de pago en línea. Aceptamos tarjetas de crédito y débito, así como también pagos con PayPal.',
    metodosDePago: 'Aceptamos tarjetas de crédito y débito, así como también pagos con PayPal.',
    desconocido: 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?'
  }

  console.log(responses[classification])

  return res.json({ response: responses[classification], meMesssage: message })
})

router.get('/', (req, res) => {
  res.json({ hola: 'HOlasss' })
})

module.exports = router
