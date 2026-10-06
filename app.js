
function obtenerNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    return [numero1, numero2];
}


function mostrar(resultado) {
    document.getElementById("resultado").innerHTML = resultado;
}


// 1. SUMAR
function sumar() {
    let [a, b] = obtenerNumeros();

    mostrar("La suma es: " + (a + b));
}


// 2. RESTAR
function restar() {
    let [a, b] = obtenerNumeros();

    mostrar("La resta es: " + (a - b));
}


// 3. MULTIPLICAR
function multiplicar() {
    let [a, b] = obtenerNumeros();

    mostrar("La multiplicación es: " + (a * b));
}


// 4. DIVIDIR
function dividir() {
    let [a, b] = obtenerNumeros();

    if (b === 0) {
        mostrar("No se puede dividir entre cero.");
        return;
    }

    mostrar("La división es: " + (a / b));
}


// 5. POTENCIA
function potencia() {
    let [a, b] = obtenerNumeros();

    mostrar(a + " elevado a " + b + " = " + Math.pow(a, b));
}


// 6. NÚMERO MAYOR
function numeroMayor() {
    let [a, b] = obtenerNumeros();

    mostrar("El número mayor es: " + Math.max(a, b));
}


// 7. NÚMERO MENOR
function numeroMenor() {
    let [a, b] = obtenerNumeros();

    mostrar("El número menor es: " + Math.min(a, b));
}


// 8. PROMEDIO
function promedio() {
    let [a, b] = obtenerNumeros();

    mostrar("El promedio es: " + ((a + b) / 2));
}


// 9. PORCENTAJE
function porcentaje() {
    let [a, b] = obtenerNumeros();

    let resultado = (a * b) / 100;

    mostrar(b + "% de " + a + " es: " + resultado);
}


// 10. DESCUENTO
function descuento() {
    let [precio, porcentaje] = obtenerNumeros();

    let descuento = precio * porcentaje / 100;
    let precioFinal = precio - descuento;

    mostrar(
        "Precio: S/ " + precio +
        "<br>Descuento: S/ " + descuento +
        "<br>Precio final: S/ " + precioFinal
    );
}


// 11. ÁREA RECTÁNGULO
function areaRectangulo() {
    let [base, altura] = obtenerNumeros();

    mostrar("Área del rectángulo: " + (base * altura));
}


// 12. PERÍMETRO RECTÁNGULO
function perimetroRectangulo() {
    let [base, altura] = obtenerNumeros();

    let resultado = 2 * (base + altura);

    mostrar("Perímetro del rectángulo: " + resultado);
}


// 13. ÁREA TRIÁNGULO
function areaTriangulo() {
    let [base, altura] = obtenerNumeros();

    let resultado = (base * altura) / 2;

    mostrar("Área del triángulo: " + resultado);
}


// 14. ÁREA CUADRADO
function areaCuadrado() {
    let [lado] = obtenerNumeros();

    mostrar("Área del cuadrado: " + (lado * lado));
}


// 15. PERÍMETRO CUADRADO
function perimetroCuadrado() {
    let [lado] = obtenerNumeros();

    mostrar("Perímetro del cuadrado: " + (lado * 4));
}


// 16. RAÍZ CUADRADA
function raizNumero1() {
    let [numero] = obtenerNumeros();

    if (numero < 0) {
        mostrar("No existe raíz cuadrada real de un número negativo.");
        return;
    }

    mostrar("La raíz cuadrada es: " + Math.sqrt(numero));
}


// 17. CUADRADO
function cuadrado() {
    let [numero] = obtenerNumeros();

    mostrar("El cuadrado es: " + (numero * numero));
}


// 18. CUBO
function cubo() {
    let [numero] = obtenerNumeros();

    mostrar("El cubo es: " + (numero * numero * numero));
}


// 19. KILÓMETROS A METROS
function kilometrosMetros() {
    let [kilometros] = obtenerNumeros();

    mostrar(kilometros + " km = " + (kilometros * 1000) + " metros");
}


// 20. METROS A CENTÍMETROS
function metrosCentimetros() {
    let [metros] = obtenerNumeros();

    mostrar(metros + " metros = " + (metros * 100) + " centímetros");
}


// 21. HORAS A MINUTOS
function horasMinutos() {
    let [horas] = obtenerNumeros();

    mostrar(horas + " horas = " + (horas * 60) + " minutos");
}


// 22. MINUTOS A SEGUNDOS
function minutosSegundos() {
    let [minutos] = obtenerNumeros();

    mostrar(minutos + " minutos = " + (minutos * 60) + " segundos");
}


// 23. CELSIUS A FAHRENHEIT
function celsiusFahrenheit() {
    let [celsius] = obtenerNumeros();

    let fahrenheit = (celsius * 9 / 5) + 32;

    mostrar(celsius + " °C = " + fahrenheit + " °F");
}

