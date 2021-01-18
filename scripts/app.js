import { victims } from './victims';
import { Wheel } from './wheel';
console.log(victims);

// create the circle with my victimes
const wheel = new Wheel(victims);
wheel.draw();
wheel.showClosest();
//wheel.spin();

document.querySelector('#playground').addEventListener('click', function () {
  wheel.spin();
  wheel.stop();
  console.log(wheel.anglePos);
});
