let contrastToggle = false;
let isModalOpen = false;
//to make sure the shapes stay in the screen frame
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0;i<shapes.length;i++){
        //
        const isOdd = i % 2 !== 0;
        //if its an odd integer it rotates one way, if its not, then it rotates the other way
        const boolInt = isOdd ? -1 : 1;
        //this is hard coded, we dont want this
        //shapes[i].style.transform='translate(10%,10%)'

        //this will translate the shapes according to the mouse, but it
        //translates too much
        shapes[i].style.transform= `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }

//template_eaq757a
//service_p6csyrg
//VGzftWZZkk77GbmAG

//put event in the onSubmit call in the form in html
function contact(event){
    //forms refresh the page by default
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    //when they press the contact
    //when adding a class, always make sure not to forget the space
    loading.classList += " modal__overlay--visible";

    //this is a promise
    emailjs
        .sendForm(
         'service_p6csyrg',
        'template_eaq757a',
        event.target,
            'VGzftWZZkk77GbmAG'
            //because its async and because we have to wait for the server
        ).then(()=>{
            //incase theres an error
            //throw new Error("error");
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            //promises always have a catch (error)
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                'The email service is temporarily unavailable, please contact me directly on michaelshleny@gmail.com'
            );
        });
}

function toggleModal(){
    if (isModalOpen) {
        isModalOpen=false;
        return document.body.classList.remove("modal--open")
    }
    //put this after to make sure we can click it once and open the modal--open
    isModalOpen = true;

    //toggle modal
    document.body.classList += " modal--open";
}

