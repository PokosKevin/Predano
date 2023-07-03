var dt = new Date();
document.getElementById('time').innerHTML=dt;
mirror = document.getElementById("mirroredImage");
mirror2 = document.getElementById("mirroredImage2");
var bazas = document.getElementById("bazaPodataka");

bazas = []

function refreshTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  document.getElementById("name").textContent = "Kevin Pokos";
  document.getElementById("time").textContent = `${hour}:${minute}`;
  
  }
    setInterval(refreshTime, 1000);

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


function izračunajOcjenu(bodovi) {
  if (bodovi >= 0 && bodovi <= 100) {
    // Izračunavanje ocjene na temelju bodova
    var ocjena = Math.floor(bodovi / 12.5) + 2;
    return ocjena;
  } else {
    return "Neispravan unos bodova.";
  }
}


var rezultati = {
  student: {
    ime: '',
    prezime: '',
    kolegij: '',
    bodovi: '',
    ocjena: ''
  }
};

function toggleSlika() {
  var slika = document.getElementById('slika');
  var uvećanaSlika = document.getElementById('uvećanaSlika');
  
  slika.style.display = (slika.style.display === 'none') ? 'block' : 'none';
  uvećanaSlika.style.display = (uvećanaSlika.style.display === 'none') ? 'block' : 'none';
}
