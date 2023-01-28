
let aktuelles_bild_click = 0;
let bilder = [
    './bilder/frau/schuh_1.jpg',
    './bilder/frau/ballkleid_1.jpg',
    './bilder/frau/becher_1.jpg',
    './bilder/frau/make_up_1.jpg',
    './bilder/frau/Nägel_1.jpg',
    './bilder/frau/outfit_1.jpg',
];


let bilder2 = [
    './bilder/frau/schuh_2.jpg',
    './bilder/frau/ballkleid_2.jpg',
    './bilder/frau/becher_2.jpg',
    ' ./bilder/frau/make_up_2.jpg',
    ' ./bilder/frau/Nägel_2.jpg',
    ' ./bilder/frau/outfit_2.jpg',
];

let fotoButton1 = document.querySelector('#foto-button-1');
fotoButton1.addEventListener('click', foto1Clicked);
function foto1Clicked() {
    wechsleFoto1und2();
}
let fotoButton2 = document.querySelector('#foto-button-2');
fotoButton2.addEventListener('click', foto2Clicked);
function foto2Clicked() {

    console.log('foto2Clicked ', new Date());
    wechsleFoto1und2();
}

function wechsleFoto1und2() {
    //console.log('wechsleFoto1und2 ',new Date());
    console.log('aktuelles bild:', bilder[aktuelles_bild_click], 'aktuelles_bild_click=', aktuelles_bild_click);
    let image1 = document.querySelector('#frau-img-1');

    image1.src = bilder[aktuelles_bild_click];


    let image2 = document.querySelector('#frau-img-2');
    image2.src = bilder2[aktuelles_bild_click];
    aktuelles_bild_click = aktuelles_bild_click + 1;
}
