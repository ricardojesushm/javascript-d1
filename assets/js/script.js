
    var precio = document.querySelector("#precioprod");
    var cantidad = document.querySelector(".cantidad");
    var btnsumar = document.querySelector("#mas");
    var btnrestar = document.querySelector("#menos");

    let contador = 0;
    let subtotal = 0;
    const preciox = precio.textContent;


btnsumar.addEventListener("click", ()=>{
    contador++;
    cantidad.textContent=contador;
    subtotal=(contador*preciox);
    subtotal=subtotal.toFixed(2);
    precio.innerHTML=subtotal;
});


    btnrestar.addEventListener("click", ()=>{
        if (contador>1){
        contador--;
        cantidad.textContent=contador;
        subtotal=(contador*preciox);
        subtotal=subtotal.toFixed(2);
        precio.innerHTML=subtotal;
        };
    });

