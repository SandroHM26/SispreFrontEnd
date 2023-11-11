// Reglas.js

const reglas = [
    {
      id: 1,
      condiciones: [
        { sintoma: 'tos', intensidad: 'fuerte' },
        { sintoma: 'fiebre', intensidad: 'cualquiera' },
        { factor: 'sistema inmunológico', intensidad: 'fuerte' },
      ],
      resultado: 'tuberculosis',
    },
    // Puedes agregar más reglas aquí
  ];
  
  export const evaluarCondiciones = (sintomasUsuario, factoresUsuario) => {
    for (let regla of reglas) {
      let cumpleCondiciones = regla.condiciones.every((condicion) => {
        // Evaluar síntomas
        if (condicion.sintoma) {
          return sintomasUsuario.some(sintoma =>
            sintoma.nombre === condicion.sintoma &&
            (condicion.intensidad === 'cualquiera' || sintoma.intensidad === condicion.intensidad)
          );
        }
        // Evaluar factores
        if (condicion.factor) {
          return factoresUsuario.some(factor =>
            factor.nombre === condicion.factor &&
            (condicion.intensidad === 'cualquiera' || factor.intensidad === condicion.intensidad)
          );
        }
        return false;
      });
  
      // Si todas las condiciones se cumplen, retornar el resultado
      if (cumpleCondiciones) {
        return regla.resultado;
      }
    }
  
    // Si ninguna regla se cumple, retornar un resultado por defecto
    return '
  