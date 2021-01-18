export class Wheel {
  anglePos = 0;
  angleSpeed = 0;
  angleAcc = 0;
  angularDecc = 0;

  constructor(userArray) {
    this.userArray = userArray;
  }
  draw() {
    // loop on all users
    this.userArray.forEach((user, i) => {
      // create their slice
      const studentElement = document.createElement('p');
      const separator = document.createElement('hr');
      studentElement.innerText = user.name;
      studentElement.classList.add('user');
      // modify the slice
      studentElement.style.transform = `
      translateY(-50%) rotate(${(360 * i) / this.userArray.length}deg)`;
      separator.style.transform = `
      translateY(-50%) rotate(${(360 * (i + 0.5)) / this.userArray.length}deg)`;
      // append the slice
      document.querySelector('#users').append(studentElement);
      document.querySelector('#users').append(separator);
      setInterval(() => {
        this.animate();
      }, 1000 / 60);
    });
  }
  spin() {
    this.angleSpeed = 5;
  }
  stop() {
    const rdn10 = Math.random() * 10;
    console.log(rdn10);
    this.angularDecc = rdn10;
  }
  animate() {
    this.angleSpeed += this.angleAcc - this.angularDecc / 1000;
    this.angleSpeed = this.angleSpeed < 0 ? 0 : this.angleSpeed;
    this.anglePos += this.angleSpeed;
    document.querySelector(
      '#users'
    ).style.transform = `rotate(${this.anglePos}deg)`;
    this.showClosest();
  }
  showClosest() {
    const userElements = document.querySelectorAll('.user');
    let currentMin = 360;
    let currentMinEl = null;
    const currentSectionRotation = +document
      .querySelector('#users')
      .style.transform.split('rotate(')[1]
      .split('deg)')[0];
    for (const userElement of userElements) {
      userElement.classList.remove('showDatBitch');
      const currentRotation = userElement.style.transform;
      currentRotation = +currentRotation.split('rotate(')[1].split('deg)')[0];
      // rechecker la valeur
      currentRotation =
        Math.abs(currentSectionRotation + currentRotation - 260) % 360;
      console.log(currentRotation);
      // I have found my new min
      if (currentRotation < currentMin) {
        currentMin = currentRotation;
        currentMinEl = userElement;
      }
    }
    currentMinEl.classList.add('showDatBitch');
  }
}
