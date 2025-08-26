# Investigación

1. La diferencia entre extendes e implements es que el primero se utliza para heredadr propiedades y métodos de otra clase, mientras que el segundo se utiliza para obligar a cumplir la estructura de una interfaz.

2. La ventaja que ofrece el tipado fuerte en funciones y clases es que permite detectar errores en tiempo de compilación, mejorar la legibilidad del código y facilitar el mantenimiento del mismo.

3. Una clase abstracta significa que no puede ser instanciada directamente, ya que solo se utiliza como base para otras clases.

4. Conviene usar getters y setters para el encapsulamiento para proteger las propiedades internas y ejercer validaciones al acceder o modificar dichas propiedades.

5. Ejemplo de tipado

```typescript
const saludar = (nombre: string, apellido?: string): string => {
  return `$Hola ${nombre}`
}

console.log(saludar("Tobias"));
console.log(saludar("Tobias", "Vega"));
```

``` typescript
  const promesa = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promesa resuelta");
      }, 2000);
    });
  };

  promesa().then(console.log);
```