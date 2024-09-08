
let contenido;
let digivice;

//https://digimon-api.vercel.app/api/digimon.
//LLamar a la API utilizando FETCH

function tabla(){
    
    //LLamar a la API utilizando FETCH
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(resp =>{
            crearTabla(resp);
        });

    //accedemos al div digiData para pintar data, y pintar spinner
    contenido = document.getElementById("digiData");
    contenido.className="";
    contenido.innerHTML = `
        <div class="text-center">
            <div class="spinner-grow loading" role="status">
                <span class="visually-hidden"> Loading... </span>
            </div>
        </div>
    `;

    //eliminar el spinner y escribimos el contenido.
    function crearTabla(resp){
        contenido.innerHTML = `
            <table class="mx-auto text-center tableW bg-white border border-2">
                <thead class="table-light" >
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nivel</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" id="digiTabla">
                </tbody>
            </table>
        `;

        digivice = document.getElementById('digiTabla');

        for(digimon of resp){
            digivice.innerHTML +=`
                <tr class="cardH" id="capturaModal" 
                    data-imagen="${digimon.img}" 
                    data-nombre="Nombre: ${digimon.name}" 
                    data-nivel="Nivel: ${digimon.level}">

                    <td>
                        <img src="${digimon.img}" width="50" height="50">
                    </td>
                    <td>
                        ${digimon.name}
                    </td>
                    <td>
                        ${digimon.level}
                    </td>
                </tr>
            ` }
    };    
}

function Grilla(){
  
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(resp =>{
            crearGrilla(resp);
        });
    contenido = document.getElementById("cardH");
    contenido.innerHTML = `
        <div class="text-center">
            <div class="spinner-grow loading" role="status">
                <span class="visually-hidden"> Loading... </span>
            </div>
        </div>
    `;

    function crearGrilla(resp){
         contenido = document.getElementById("digiData");
               contenido.innerHTML = "";
        for(digimon of resp){
            contenido.innerHTML += `
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 container-fluid">
                <div class="card " cardH my-2 bg-white border-2 id="capturamodal" data-imagen="${digimon.img}" 
                    data-nombre="Nombre: ${digimon.name}" 
                    data-nivel="Nivel: ${digimon.level}"
                    onClick="datamodal(this);">
                    <div>
                        <div class="card-body">
                        <img src="${digimon.img}" class="card-img-top">
                        <h5>${digimon.name}</h5>
                        <h4>${digimon.level}</h4>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

    }
}
