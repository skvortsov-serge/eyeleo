document.addEventListener("DOMContentLoaded", function(event) {


    document.getElementsByClassName('menu-btn')[0].addEventListener('click', function() {
        document.getElementsByClassName('slide-menu')[0].classList.toggle('active-menu');
    });



    //---------------- footprints animation----------------

    var f = 0;
    var footprints = document.querySelector('.footprints');
    var spanElement = footprints.querySelectorAll('span');
    var spanElementArray = [].slice.call(spanElement);
    var condition = false;
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    function animateFootprints() {
        f++;
        // console.log(f);
        var footprint = document.getElementById('footprint-' + f + '');
        setTimeout(function() { footprint.style.display = 'block' }, f * 1000);

        if (f <= 5) {
            // console.log('footprints on process');
            
            requestAnimationFrame(animateFootprints);
        } else {
            // console.log('stop animation');
            f = 0;
            cancelAnimationFrame(animateFootprints);
            setTimeout(function() {
                spanElementArray.map(function(x) {
                    x.style.display = 'none';
                })
                requestAnimationFrame(animateFootprints)
            }, 7000);
        }
    }
    animateFootprints();

});
