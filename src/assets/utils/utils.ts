import {carsCount} from '../store/store';

const store= carsCount()

// function getPositionAtCentraElement (element){
//   const {top, left, width, height} = element.getBoundingClientRect();
// return {
//   x: left+width /2 ,
//   y: top+ height /2
// }

// }
// export function getDistanseBetweenElements (a,b){
//   const aPosition = getPositionAtCentraElement(a);
//   const bPosition = getPositionAtCentraElement(b);
//   return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);

// }

// export function animation(car,distance,animationTime){
//   let start = null;
//   const state = {};
//   function step(timestamp){
//     if(!start) start = timestamp;
//     const time = timestamp - start;
    
//     const passed = Math.round(time * (distance / animationTime));

//     car.style.tranform = `translateX(${Math.min(passed,distance)}px)`
//   }
//   if(passed < distance) {
//     state.id = window.requestAnimationFrame(step);
//   }
//   state.id = window.requestAnimationFrame(step);
//   return state;
// }

//делает анимацию
//transition: all 1.5s linear 0s;
// transform: translate(1700px);
//делает анимацию


// export const raceAll = async (promises, ids) => {
//   const {success, id, time} = await Promise.race(promises);
// if (!success){
//   const faildIndex = ids.faildIndex(i=>i===id)
//   const restPromises = [...promises.slice(0,faildIndex),...promises.slice(faildIndex+1,promises.length)]
//   const restIds = [...ids.slice(0, faildIndex), ...ids.slice(faildIndex+1,ids.length)];
//   return raceAll(restPromises,restIds)
// }
// return {...store.cars.find(car.id ===id), time: + (time/1000).toFixed(2)}
// }
// export const race = async (active) => {
//   const promises = store.cars.map(({id})=>action(id));
//   const winner = await raseAll(promises,store.cars.map(car => car.id))
// return winner
// }

const models = ['Tesla', 'VAZ', 'TAZ', 'UAZ','Opel']
const names = ['azlk', '5', 'DFD', 'AER#3','Astra']

const getRandomeName = () =>{
  const model:string = models[Math.floor(Math.random()* models.length)]
  const name:string = names[Math.floor(Math.random()* names.length)]
  return `${model} ${name}`
}

const getRandomeColor = () =>{
  const letters = '0123456789ABCDEF'
  let color ='#'
  for (let i = 0; i < 6; i++) {
    color+= letters[Math.floor(Math.random()*16)]
    
  }

  return color
}
 export const getRandomeCars  = (count = 100) => new Array(count).fill(1).map(_=>({name:getRandomeName(), color:getRandomeColor()}))