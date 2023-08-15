let aim = document.getElementById('imgMos'), room, overflow;

window.addEventListener('load', setEdge);
window.addEventListener('resize', setEdge);

window.addEventListener('scroll', function() {

  let ratio = (this.pageYOffset || this.scrollY)/overflow;

  aim.style.setProperty('--epoch', ratio);
});

function setEdge() {

  room = window.innerHeight;
  overflow = document.body.scrollHeight-room;

  aim.style.setProperty('--maximum', room-aim.height + 'px');
}

function rolar(){
imgMos.style.display = 'none'
console.log("foi")
}
