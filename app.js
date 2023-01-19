
let fotoButton1=document.querySelector('#foto-button-1');
fotoButton1.addEventListener('click',foto1Clicked);
function foto1Clicked(){
    console.log('foto1Clicked ',new Date()); 
    wechsleFoto1und2();
}
let fotoButton2=document.querySelector('#foto-button-2');
fotoButton2.addEventListener('click',foto2Clicked);
function foto2Clicked(){

    console.log('foto2Clicked ',new Date());
    wechsleFoto1und2();
}

function wechsleFoto1und2(){
    console.log('wechsleFoto1und2 ',new Date());

    let image1=document.querySelector('#frau-img-1');  
    image1.src = "./bilder/frau/schuh_1.jpg";

    let image2=document.querySelector('#frau-img-2');  
    image2.src = "./bilder/frau/schuh_2.jpg";
}
