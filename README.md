# Toolbox

Este repositorio contiene las pruebas solicitadas para el ejercicio técnico, implementadas usando Cypress.

---


## Revision del Request 
 
<a href="https://github.com/guzmancristian-cloud/Toolbox/blob/main/data/1_Revision_Request/request.md">Revision del Request</a> 

---

## Bug Reporting:

<a href="https://github.com/guzmancristian-cloud/Toolbox/blob/main/data/2_Bug_Reporting/bugreport.md">Bug Reporting</a> 

---

### Implementación de tests con Cypress. 
###Parte 1: Pruebas de UI en Plataforma de Ecommerce

- Registro de usuario
- Login de usuario

---
###Parte 2: Pruebas de API con Echo Server.

- GET /qa/test1
- POST /qa/test

---

## Ejecución del Proyecto

Instalar cypress 

Abrimos una ventana de terminal y ejecutar el siguiente comando
npm install cypress

Ahora que Cypress está instalado, clonamos el repositorio de github en nuestra máquina local. Luego navegamos con la terminal usando comandos cd al repo. Una vez que estemos allí, deberíamos ver que estamos en el directorio y ejecutamos el siguiente comando para abrir cypress
npx cypress open



Esto debería abrir una nueva ventana con la aplicación cypress, donde podemos hacer clic en Pruebas E2E, luego elegir un navegador para ejecutar la aplicación y finalmente deberíamos ver las pruebas a realizar en la pantalla.

npx cypress run


