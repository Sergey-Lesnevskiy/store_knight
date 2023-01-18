
import { getCars, getWinners} from "../api/api";

 export const carsCount = async() =>{
 const {items: cars, count: carsCount} = await getCars(1);
 const { items: winner, count: winnersCount} = await getWinners(1)
 return {
  carsPage: 1,
  cars: cars ,
  carsCount:carsCount,
  winnersPage: 1,
  winner,
  winnersCount,
  animation:{},
  view: 'garage',
  sortBy: null,
  sortOrder:null,
  }
}

