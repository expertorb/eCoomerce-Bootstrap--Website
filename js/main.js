// Special_coundown
let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
	let futureDate = new Date("30 July 2022");
	let currentDate = new Date();
	let myDate = futureDate - currentDate;

	let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
	let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
	let min = Math.floor(myDate / 1000 / 60) % 60;
	let sec = Math.floor(myDate / 1000) % 60;

	dayItem.innerHTML = days;
	hoursItem.innerHTML = hours;
	minItem.innerHTML = min;
	secItem.innerHTML = sec;
}
countDown()
setInterval(countDown,1000)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
