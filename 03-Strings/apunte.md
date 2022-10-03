# Apuntes sobre las variables tipo tring

## Definicion

    Indirecta | Directa | Como Objeto
    -----------|---------------------------|-------------------------
    Se asigna un valor string | Se declara que el valor que tendra es un string | Que declara que el valor sera  un bojeto de valor string string
    const producto="monitor 20 \"" | const producto2=String('monitor de 68"') | const producto3=new String('monitor de 51 pulgadas')

## Concatenaciom

Las formas de  concatenar son de tres maneras:

* Por Medodo ---> Se envia un string como parametro al metodo que concatenara con otro string **Console.log(producto.concat(precio))**

* Adicion y coma ---> Se agrega un + o , antes del valor que se desea concatenar **console.log(producto+"con un precio de ",precio)**

* Acento grave ---> La salida debe ser definida por una comilla de acento grave y los valores que se  se deseen agregar deben estar envueltos de unas llaveas acompanhadas de un dolar al inicio **console.log(`el producto ${producto} tiene un precio de ${precio}`)**

## Metodos

 Metodo | Concepto | Ejemplo 
 -----------|----------|-----------
 .lengh() | Contar los caracteres de un string | console.log(item.length)
 .indexOf() | Buscar dentro del sting, si existe retorna el inidice  sino -1 | console.log(item.indexOf('20'))
 .includes() | Busca dentro del string, si xiste retorna True sino False | console.log(item.includes('0'))
 .trimStart() | Elimina los espacios en blancos al inicio de un string | console.log(producto.trimStart())
 .trimEnd() | Elimina los espacios en blancos al final de un string |  console.log(producto.trimEnd())
 .trim() | Elimina los espacios en blanco al inicio y final de un string |  console.log(producto.trim())
 .replace('v1','v2') | Busca el valor 1 y lo remplaza por el valor2 | console.log(mercancia.replace('monitor', "monitor curvo"))
 .slince('v1','v2') | Corta el string desde el indice de valor1 hasta el indice de valor2 | console.log(mercancia.slice(0,12))
 .substring('v1','v2') |  Evalua el valor mayor y corta desde el indice de valor menor hasta el indice de lavor mayor | console.log(mercancia.substring(12,0))
 .chartAt('v1','v2') | Corta solo un caracter del string | console.log(mercancia.charAt(0))
.split ('v1') | Elimina el valor del parametro en el string y lo corta | console.log(actividad.split(" "))
.repeat('v1') | Repite el String las veces indicadas por el valor del parametro | console.log(pantalla.repeat(3))
.toUpperCase() | convierte todo en mayuscula | console.log(TV.toUpperCase())
.toLowerCase() | convierte todo en minusculas | console.log(TV.toLowerCase())
