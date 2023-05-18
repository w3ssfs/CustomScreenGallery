let tiltElements = document.querySelectorAll(".card");

// add tiltChange event listener to them and change --angle value based on tilt details

tiltElements.forEach((tiltElement) => holoEffect(tiltElement));

tiltElements.forEach((tiltElement) => {
  tiltElement.addEventListener("click", function () {
    // Acesse o link contido no card
    let link = tiltElement.querySelector("a").href;

    // Abra o link
    window.location.href = link;
  });
});

function holoEffect(tiltElement) {
  tiltElement.addEventListener("tiltChange", function (event) {
    let angle =
      parseInt(event.detail.tiltY, 10) + parseInt(event.detail.tiltX, 10);
    tiltElement.style.setProperty("--angle", angle + "deg");
  });
}

VanillaTilt.init(tiltElements, {
  scale: 1.1,
  gyroscope: true,
  speed: 800,
  perspective: 1000,
});
