dongia = 40;
function chay(){
	var count = 0;
	var ghe = document.getElementById('ghe');
	var st = "Ghế bạn chọn: ";
	for (var j = 1; j <= 24; j++)
		for (var i = 1; i<=40; i++){
			var s = T[j] + String(i);
			var x = document.getElementById(s);
			var t = x.getAttribute('data');
			if (t == 'off'){
				st = st + s + " ";
				count++;
				}
			}
	ghe.innerHTML = st;
	x = document.getElementById("tongcong");
	st = "Tổng cộng: ";
	st = st + count*dongia + ".000 VND";
	x.innerHTML = st;
}


function huy(){
	for (var j = 1; j <= 24; j++)
		for (var i = 1; i <= 40; i++) {
			var st = T[j] + String(i);
			console.log(st);
		  	var x = document.getElementById(st);
		  	var t = x.getAttribute('data');
		  	if (t == 'off') {
				x.style.backgroundColor = 'lightgrey';
				x.setAttribute("data", "on");
			}
	}
}





// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.dongy');



// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
  chay();
}
// Close
function closeModal() {
  modal.style.display = 'none';
}
// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
$(document).keyup(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
        modal.style.display = 'none';
    }
});
function show(a) {
	var t = a.getAttribute('data');
	if (t == 'on'){
		a.style.backgroundColor = 'orange';
		a.setAttribute("data", "off");
	}
	if (t == 'off') {
		a.style.backgroundColor = 'lightgrey';
		a.setAttribute("data", "on");
		}
}