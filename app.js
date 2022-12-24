var imges = new Array();

var gallery = document.getElementById("gallery01");


for(let i= 1;i<=535;i++)
{

    imges[i]= "IMAGES/"+i+".JPG";


}


for(let i=1;i<=535;i++)
{

    let img = document.createElement("img");



    img.src = imges[i];


    gallery.appendChild(img);

    



}




