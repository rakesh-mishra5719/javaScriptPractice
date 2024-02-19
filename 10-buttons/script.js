
function turnonof(buttonclass) {

    const buttonclass1 = '.gameonbutton';
    const buttonclass2 = '.musiconbutton';
    const buttonclass3 = '.techonbutton';



    // if (!document.querySelector(buttonclass).classList.contains('is-toggled')) {
    //     document.querySelector(buttonclass).classList.add('is-toggled');
    // }
    // else{
    //     document.querySelector(buttonclass).classList.remove('is-toggled');
    // }


    if (buttonclass === buttonclass1) {

        if (!document.querySelector(buttonclass).classList.contains('is-toggled')) {
            document.querySelector(buttonclass).classList.add('is-toggled');
        }
        else {
            document.querySelector(buttonclass).classList.remove('is-toggled');
        }

        // document.querySelector(buttonclass1).classList.add('is-toggled');
        document.querySelector(buttonclass2).classList.remove('is-toggled');
        document.querySelector(buttonclass3).classList.remove('is-toggled');
    }
    else if (buttonclass === buttonclass2) {
        if (!document.querySelector(buttonclass).classList.contains('is-toggled')) {
            document.querySelector(buttonclass).classList.add('is-toggled');
        }
        else {
            document.querySelector(buttonclass).classList.remove('is-toggled');
        }
        document.querySelector(buttonclass1).classList.remove('is-toggled');
        // document.querySelector(buttonclass2).classList.add('is-toggled');
        document.querySelector(buttonclass3).classList.remove('is-toggled');
    }
    else if (buttonclass === buttonclass3) {
        if (!document.querySelector(buttonclass).classList.contains('is-toggled')) {
            document.querySelector(buttonclass).classList.add('is-toggled');
        }
        else {
            document.querySelector(buttonclass).classList.remove('is-toggled');
        }
        document.querySelector(buttonclass1).classList.remove('is-toggled');
        document.querySelector(buttonclass2).classList.remove('is-toggled');
        // document.querySelector(buttonclass3).classList.add('is-toggled');
    }


}