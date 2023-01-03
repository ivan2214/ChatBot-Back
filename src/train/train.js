const natural = require('natural')

module.exports = function (classifier) {
  classifier.addDocument('Hola', 'saludo')
  classifier.addDocument('Buenas', 'saludo')
  classifier.addDocument('buenas', 'saludo')
  classifier.addDocument('Hola, ¿cómo estás?', 'pregunta')
  classifier.addDocument('Me siento bien', 'bien')
  classifier.addDocument('Me siento mal', 'mal')
  classifier.addDocument('como es tu nombre', 'miNombre')
  classifier.addDocument('como te llamas', 'miNombre')
  classifier.addDocument('dime tu nombre', 'miNombre')
  classifier.addDocument('¿Cuáles son tus horarios de entrega?', 'entrega')
  classifier.addDocument('¿Cuáles son tus horarios de atención al cliente?', 'atencion al cliente')
  classifier.addDocument('¿Cómo puedo hacer una devolución?', 'devoluciones')
  classifier.addDocument('¿Cómo puedo hacer un cambio?', 'cambios')
  classifier.addDocument('¿Cuáles son tus términos y condiciones?', 'terminosYcondiciones')
  classifier.addDocument('¿Cuáles son tus políticas de privacidad?', 'politicasDePrivacidad')
  classifier.addDocument('¿Cuál es tu dirección?', 'direccion')
  classifier.addDocument('¿Tienes una tienda física?', 'tiendaFisica')
  classifier.addDocument('¿Cómo puedo hacer un pedido?', 'hacerUnPedido')
  classifier.addDocument('¿Cuál es el proceso de pago?', 'procesoDePago')
  classifier.addDocument('¿Cuáles son tus métodos de pago aceptados?', 'metodosDePago')
  classifier.addDocument('', 'noEntiendo')
  classifier.addDocument('asdsagafas', 'noEntiendo')
  classifier.addDocument('asdsagafassadfgs g', 'noEntiendo')
  classifier.addDocument('asdsagafas32123rgy645th54', 'noEntiendo')
  classifier.addDocument('dsaght5rhrhaasdf', 'noEntiendo')
}
