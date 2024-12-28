const users = [
  { user: 'admin', password: 'admin' },
  { user: 'jose', password: 'jose1' },
  { user: 'maria jose', password: 'maria' },
];

/* login ingreso*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*menu desplgable mobile*/
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*login*/
const validation = (user, pass) => users.find( ( person ) => (person.user === user) && (person.password === pass));

const login = () => {
  const user = document.getElementById( 'txt' ).value;
  const pass = document.getElementById( 'txtPassword' ).value;
  if ( validation(user, pass) !== undefined ) {
      // window.location = 'page.html';
      alert( `El usuario ${user} es correcto |nais|` )
  }
  else {
      alert( 'Usuario o contraseña incorrectos...' );
      window.location.href = 'index.html';

  }
}


