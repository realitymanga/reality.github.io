const searchInput= document.querySelector("[data-search]");
searchInput.addEventListener("input",e => {
	const value = e.target.value
	console.log(value)
});


document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    
		 const id = searchInput.value;
	switch(id) {
		case '':
		var el = document.getElementById("p1");
        el.innerHTML = "";
		break;
  case "1":
    const element = document.getElementById("s2");
    element.focus();
    element.scrollIntoView();
	document.getElementById("logo1").style.width = "30%";
	document.getElementById("logo1").style.top = "5%";
    break;
	default:
	var el = document.getElementById("p1");
        el.innerHTML = "not yet";
		document.getElementById("logo1").style.width = "40%";
		// Select the search box element
const searchBox = document.querySelector('#search-box');
// Set the value of the search box element to an empty string
// Use the setTimeout() method to call the reset function after 5 seconds
setTimeout(() => {
  searchBox.value = '';
  el.innerHTML = "";
}, 5000);
	break;
}
	}
  }
);
document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    // The user scrolled up.
	document.getElementById("logo1").style.width = "30%";
	document.getElementById("logo1").style.top = "5%";
  } else if (event.deltaY < 0) {
    // The user scrolled down.
	document.getElementById("logo1").style.width = "40%";
	document.getElementById("logo1").style.top = "0";
  }
});
const element = document.getElementById('con');
element.addEventListener('touchmove', (event) => {
  const currentY = event.touches[0].clientY;
  const previousY = this.previousY;
  if (currentY > previousY && window.screen.width<"550") {
    // The user is swiping up.
	document.getElementById("logo1").style.width = "90vw";
	document.getElementById("logo1").style.top = "0";
  } else if (currentY < previousY && window.screen.width<"550") {
    document.getElementById("logo1").style.width = "60vw";
	document.getElementById("logo1").style.top = "10%";
  }
  this.previousY = currentY;
});