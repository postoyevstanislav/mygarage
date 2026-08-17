import{getGarage, createGarage} from './garage.js';

const create = createGarage('Stanislav');
const get = getGarage(1)

console.log({create, get})