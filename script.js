
$(document).ready(()=>{
    var sass = new Sass();
    fetch('style.scss')
    .then(response => response.text())
    .then(data => {
        sass.options({ style: Sass.style.expanded }, function(result) {
            console.log("set options");
          });
        sass.compile(data, function(result) {
            const css = result.text;
            document.getElementById("scss-styles").textContent = css;
        });
    });
    var listHTML;
    $.get( "./list", function( data ) {
        listHTML = data.split(',\n');
        var indexlist = 0;var loadcontinue = true;let index = 0;
        while(index<200 || loadcontinue){
            switch (getRandomInt(32)) {
                case 10:
                    $("main").append("<div class='Rbig'></div>");
                    break;
                case 7:
                    $("main").append("<div class='Vbig'></div>");
                    break;
                case 8:
                    $("main").append("<div class='Hbig'></div>");
                    break;
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    indexlist++;
                    if(indexlist == listHTML.length){
                       indexlist %= listHTML.length;
                        loadcontinue = false;
                        if(index >199){
                            index = 150;
                        }
                    }
                    $("main").append(`<a href="${listHTML[indexlist]}</div></a>`);

                    break;
                default:
                    $("main").append("<div></div>");
                    break;
            } index++;
        }
        $("main").append(`<a href="#"><div class='Rbig'>Hey Lau\n2017-2023</div></a>`);
    });
})
function getRandomInt(max) {
    return Math.floor(Math.random() * max) +1;
  }