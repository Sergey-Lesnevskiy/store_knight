import { createCar, body, deleteCar, getCars, getCar, updateCar } from '../api/api';
import { carsCount } from '../store/store';
let selectedCar: recponceOneCar | null = null;



const renderCarImage = (color: string) => `<?xml version="1.0" ?>

<!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>

<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="${color}" width="100px" height="100px" viewBox="0 0 846.66 846.66" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
</defs>
<g id="Layer_x0020_1">
<path class="fil0" d="M564.69 522.49c0,30.81 24.97,55.78 55.77,55.78 30.81,0 55.78,-24.97 55.78,-55.78 0,-30.8 -24.97,-55.77 -55.78,-55.77 -31.16,0 -55.77,25.33 -55.77,55.77zm-41.55 1.63l-222.59 0c-0.87,53.1 -44.2,95.71 -97.32,95.71 -53.12,0 -96.45,-42.61 -97.32,-95.71l-77.8 0c-11.48,0 -20.78,-9.3 -20.78,-20.78l0 -118.66c0,-8.5 5.1,-15.8 12.41,-19.02l202.54 -106.51c13.93,-7.33 30.4,2.96 30.4,18.35l0.04 86.4 28.29 0 0 -49.07c0,-11.48 9.31,-20.78 20.78,-20.78l93.78 0c11.48,0 20.79,9.3 20.79,20.78l0 49.07 102.92 0 0 -24.2 -77.16 -77.16c-19.33,-19.33 10.06,-48.72 29.38,-29.39l83.26 83.26c3.76,3.76 6.09,8.95 6.09,14.69l0 32.8 140.51 0c75.93,0 137.97,62.05 137.97,137.98 0,12.1 -10.3,21.63 -22.35,20.72l-99.19 1.17c-0.68,53.24 -44.08,96.06 -97.33,96.06 -53.11,0 -96.44,-42.61 -97.32,-95.71zm-231.12 -41.56l239.65 0c15.7,-34.85 50.37,-57.41 88.79,-57.41 38.39,0 73.03,22.51 88.76,57.32l86.36 -1.02c-9.62,-44.02 -48.99,-75.99 -94.22,-75.99 -156.47,0 -312.95,0 -469.42,0 -11.48,0 -20.78,-9.3 -20.78,-20.78l0 -72.83 -162.27 85.33 0 85.38 65.55 0c15.7,-34.86 50.36,-57.41 88.79,-57.41 38.43,0 73.09,22.55 88.79,57.41zm-88.79 -15.84c-30.8,0 -55.77,24.97 -55.77,55.77 0,30.81 24.97,55.78 55.77,55.78 30.81,0 55.78,-24.97 55.78,-55.78 0,-30.8 -24.98,-55.77 -55.78,-55.77zm171.56 -102.82l0 -28.29 -52.22 0 0 28.29 52.22 0z"/>
</g>
</svg>

`;
interface car {
  id: number;
  name: string;
  color: string;
  isEngineStarted: boolean;
}
const renderCar = ({ id, name, color, isEngineStarted }: car) => `

<div class="generator-buttons">
  <button class="button select-button" id="select-car-${id}">select</button>
  <button class="button remove-button" id="remove-car-${id}">remove</button>
  <span class="car-name">${name}</spanclass>
</div>
<div class="road">
  <div class="launch-pad">
    <div class="controle-panel">
      <button class="icon start-engine-button" id="start-engine-car-${id} ${
  isEngineStarted ? 'disabled' : ''
}">Start</button>
      <button class="icon stop-engine-button" id="stop-engine-car-${id} ${
  !isEngineStarted ? 'disabled' : ''
}">Stop</button>
<div class="flag" id="flag-${id}">⚑</div>
    </div>
    <div class="car" id="car-${id}">
      ${renderCarImage(color)}
    </div>
  </div>
  
</div>
`;
const renderGarage = async () =>
  `
<h1>Garage (${(await carsCount()).carsCount})</h1>
<h2>Page #(${(await carsCount()).carsPage})</h2>
<ul class="garage">
  ${(await carsCount()).cars
    .map(
      (car: car) => `
    <li>${renderCar(car)}</li>`
    )
    .join()}
</ul>
`;

const renderWinner = async () => `
<h1>Winners (${(await carsCount()).winnersCount})</h1>
<h2>Page #(${(await carsCount()).winnersPage})</h2>
<table class="talbe" cellspacing="0" cellpadding="0">
<thead>
  <th>Number</th>
  <th>Car</th>
  <th>Car</th>
  <th class="table-button table-winn ${
    (await carsCount()).sortBy === 'wins' ? (await carsCount()).sortOrder : ''
  }" id="sort-by-wins">Wins</th>
  <th class="table-button table-time ${
    (await carsCount()).sortBy === 'time' ? (await carsCount()).sortOrder : ''
  }" id="sort-by-time">Best time</th>
</thead>
<tbody>
  ${(await carsCount()).winner.map(
    (winner, index) => `
  <tr>
  <td>${index + 1}</td>
  <td>${renderCarImage(winner.car.color)}</td>
  <td>${winner.car.name1}</td>
  <td>${winner.wins}</td>
  <td>${winner.time}</td>

</tr>
    `
  )}
</tbody>
</table>
`;
export const render = async () => {
  const html = `
  <div class="menu">
  <button class="button garage-menu-button primary" id="garage=menu">TO garage</button>
  <button class="button winners-button primary" id="winners-menu">TO winner</button>
</div>
<div id="garage-view">
  <div>
    <form class="form" id="create">
      <input class="input" id="create-name" name="name" type="text">
      <input class="color" id="create-color" name="color" type="color" value="#ffffff">
      <button class="button create-car" type="submit">Create</button>
    </form>
    <form class="form" id="update">
      <input class="input" id="update-name" name="name" type="text" disabled>
      <input class="color" id="update-color" name="color" type="color" value="#ffffff" disabled>
      <button class="button" type="submit"  id="update-submit">Update</button>
    </form>
  </div>
  <div class="race-controls">
    <button class="button race-button primary" id="race">Race</button>
    <button class="button reset-button primary" id="reset">Reset</button>
    <button class="button generation-button primary" id="generation">Generate</button>
  </div>
  <div class="garage" id="garage">
    ${await renderGarage()}
  </div>
  <div>
    <p class="message" id="message"></p>
  </div>
</div>
<div id="winners-view" style="display:none">
${await renderWinner()}
</div>
<div class="pagination">
  <button class="button prev-button primary" id="prev">Prev</button>
  <button class="button next-button primary" id="next">Next</button>
</div>
  `;
  const root = document.createElement('div');
  root.innerHTML = html;
  document.body.appendChild(root);
};

interface recponceOneCar {
  name: string;
  color: string;
  id: number;
}
export const listen = () => {
  document.body.addEventListener('click', async (event) => {
    //   if(event.target.classList.contains('start-engine-button'))
    //     {
    //       const id =+ event.target.id.split('start-engine-car-')[1]
    //       startDriving(id)
    // }
    //   if(event.target.classList.contains('stop-engine-button'))
    //     {
    //       const id =+ event.target.id.split('stop-engine-car-')[1]
    //       stopDriving(id)
    //    }

    const el = event.target as HTMLElement;
    if (el.classList.contains('create-car')) {
      event.preventDefault();
      const name = (document.getElementById('create-name') as HTMLInputElement).value;
      const color = (document.getElementById('create-color') as HTMLInputElement).value;
      const body: body = {
        name: name,
        color: color,
      };
      await createCar(body);

      (document.getElementById('garage') as HTMLElement).innerHTML = await renderGarage();
    }
    if (el.classList.contains('remove-button')) {
      const id = +el.id.split('remove-car-')[1];

      await deleteCar(id);
      //  await deleteWinner(id);
      // await updateStateGarage()
      (document.getElementById('garage') as HTMLElement).innerHTML = await renderGarage();
    }
    if (el.classList.contains('select-button')) {
      const id = el.id.split('select-car-')[1];
      selectedCar = await getCar(Number(id));
      if (selectedCar) {
        (document.getElementById('update-name') as HTMLInputElement).value = selectedCar.name;
        (document.getElementById('update-color') as HTMLInputElement).value = selectedCar.color;
      }

      (document.getElementById('update-name') as HTMLInputElement).disabled = false;
      (document.getElementById('update-color') as HTMLInputElement).disabled = false;
      const buttonUpdate = document.getElementById('update-submit') as HTMLInputElement;
      buttonUpdate.disabled = false;
      buttonUpdate.addEventListener('click', async (e) => {
        e.preventDefault();

        const body = {
          name: (document.getElementById('update-name') as HTMLInputElement).value,
          color: (document.getElementById('update-color') as HTMLInputElement).value,
        };
        updateCar(Number(selectedCar?.id), body);

        (document.getElementById('garage') as HTMLElement).innerHTML = await renderGarage();
      });
    }

    if (el.classList.contains('winners-button')) {
      event.preventDefault()
      console.log('hi');
      (document.getElementById('winners-view') as HTMLInputElement).style.display= 'block';
      (document.getElementById('garage-view') as HTMLInputElement).style.display= 'none';
    }
    if (el.classList.contains('garage-menu-button')) {
      event.preventDefault()
      console.log('hi');
      (document.getElementById('garage-view') as HTMLInputElement).style.display= 'block';
      (document.getElementById('winners-view') as HTMLInputElement).style.display= 'none';
    }
   
    // if(event.target.classList.contains('generator-button')){
    //    event.target.classList.contains('generator-button')
    //    event.target.disabled = true;
    //    const cars = getRandomeCars();
    //    await Promise.all(cars.map(async c =>await createCar(c)))
    //    await updateStateGarage();
    //    document.getElementById('garage').innerText = renderGarage();
    //    event.target.disabled = false

    // }


  });
};
