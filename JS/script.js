var boton1 = document.getElementById("de1-2");
var boton2 = document.getElementById("de2-3");
var boton3 = document.getElementById("de3-4");
var boton4 = document.getElementById("de4-5");
var boton5 = document.getElementById("siQuiero");
// Obtén las vistas por sus IDs
var vista1 = document.getElementById("step1");
var vista2 = document.getElementById("step2");
var vista3 = document.getElementById("step3");
var vista4 = document.getElementById("step4");
var vista5 = document.getElementById("step5");
var vista6 = document.getElementById("step6");

// Agrega el evento onclick al botón
boton1.onclick = function() {
  // Oculta vista1 después de 1 segundo y muestra vista2
  setTimeout(function() {
  vista1.style.opacity = "0";
    vista1.style.marginTop ="100px"
    },500)

  setTimeout(function() {
    vista1.style.display = "none";
    vista2.style.display = "block";
  }, 1000); // 1000 ms = 1 segundo
};



/*FUNCION 2*/

boton2.onclick = function() {
    // Oculta vista1 después de 1 segundo y muestra vista2
    setTimeout(function() {
    vista2.style.opacity = "0";
      vista2.style.marginTop ="100px"
      },500)
  
    setTimeout(function() {
      vista2.style.display = "none";
      vista3.style.display = "block";
    }, 1000); // 1000 ms = 1 segundo
  };


  /*FUNCION 3*/

boton3.onclick = function() {
    // Oculta vista1 después de 1 segundo y muestra vista2
    setTimeout(function() {
    vista3.style.opacity = "0";
      vista3.style.marginTop ="100px"
      },500)
  
    setTimeout(function() {
      vista3.style.display = "none";
      vista4.style.display = "block";
    }, 1000); // 1000 ms = 1 segundo
  };

   /*FUNCION 3*/

boton4.onclick = function() {
    // Oculta vista1 después de 1 segundo y muestra vista2
    setTimeout(function() {
    vista4.style.opacity = "0";
      vista4.style.marginTop ="100px"
      },1000)
  
    setTimeout(function() {
      vista4.style.display = "none";
      vista5.style.display = "block";
    }, 1500); // 1000 ms = 1 segundo
  };

  boton5.onclick = function() {
    // Oculta vista1 después de 1 segundo y muestra vista2
    setTimeout(function() {
    vista5.style.opacity = "0";
      vista5.style.marginTop ="100px"
      },1000)
  
    setTimeout(function() {
      vista5.style.display = "none";
      vista6.style.display = "flex";
    }, 1500); // 1000 ms = 1 segundo
  };