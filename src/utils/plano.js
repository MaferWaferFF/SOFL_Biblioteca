export const plano = (fila) => (fila ? fila.get({plain: true}) : null);
//sirve para convertir un objeto de sequelize en un objeto plano,
// es decir, un objeto que no tiene metodos ni propiedades adicionales 
// que agrega sequelize. Esto es util para enviar datos a la vista o al 
// cliente, ya que se evita enviar informacion innecesaria. 