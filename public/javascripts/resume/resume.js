/**
 * Created by kobe on 11/27/2016.
 */
//TODO spend more time with pdf.js, this is pretty unoptimized!
$( document ).ready(function() {
    (function(done){
        PDFJS.getDocument('resume.pdf').then(function(pdf) {
            PDFJS.getDocument('resume.pdf').then(function(pdf) {
                pdf.getPage(1).then(function(page) {
                    var container = $('.container').width();
                    var scale = 1.5;
                    var viewport = page.getViewport(scale);

                    if(container === 720){
                        scale = 1.2;
                        viewport = page.getViewport(scale);
                        viewport.width = 720;
                    }
                    if(container === 940){
                        viewport.width = 940;
                    }
                    else{
                        $("#resume-canvas").addClass('overflow-x')
                    }

                    var canvas = document.getElementById('resume-page-1');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
                pdf.getPage(2).then(function(page) {
                    var container = $('.container').width();
                    var scale = 1.5;
                    var viewport = page.getViewport(scale);

                    if(container === 720){
                        scale = 1.2;
                        viewport = page.getViewport(scale);
                        viewport.width = 720;
                    }
                    if(container === 940){
                        viewport.width = 940;
                    }
                    else{
                        $("#resume-canvas").addClass('overflow-x')
                    }

                    var canvas = document.getElementById('resume-page-2');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                    //run callback function to hide loadingDiv spinner
                    done();
                });
            });
        });
    }(function(){
        $('#loadingDiv').hide();
        $('#resume-canvas').show()
    }))

});


