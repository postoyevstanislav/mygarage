const fs = require('fs/promises');
const path = require('path');

const processArgs = process.argv;
const command = processArgs[2];
const carParameter = processArgs[3];

const PATH_TO_CARS_JSON = path.join(__dirname, '..', 'data', 'cars.json');

const readCars = async () => {
  const carsJson = await fs.readFile(PATH_TO_CARS_JSON, 'utf-8');
  return JSON.parse(carsJson);
};

const saveCars = async (cars) => { 
  await fs.writeFile( PATH_TO_CARS_JSON, JSON.stringify(cars, null, 2), 'utf-8' ); 
};

const writeNewCar = async (car) => {
  try {
    await fs.mkdir(path.dirname(PATH_TO_CARS_JSON), { recursive: true });

    const cars = await readCars();
    const nextId = cars.length ? Math.max(...cars.map(car => car.id)) + 1 : 1;
    await saveCars([...cars, {name: car, id: nextId}])
  
  } catch (error) {
    if (error.code === 'ENOENT') {
      await saveCars([{ name: car, id: 1 }]);
    } else {
      throw error;
    }
  }
};

const listCars = async () => {
  try {
    const cars = await readCars()

    cars.forEach((car, i) => { 
      console.log(`${i+1}. ${car.name}`) 
    })
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('File is not exist')
    } else {
      throw error;
    }
  }
};

const removeCar = async (id) => {
  try {
    const cars = await readCars();
    const normalizedId = Number(id);
    const filteredList = cars.filter(car => car.name !== normalizedId);

    if(cars.length > filteredList.length) {
      await saveCars(filteredList)
    } else {
      console.log(`Car with id ${id} not found`)
    }
  } catch (error) {
    console.error(error)
  }
}

//HW
const findCarByName = async (name) => {
  try {
    const cars = await readCars();
    const filteredList = cars.filter(car => car.name.toLowerCase().includes(name.toLowerCase()));

    if(filteredList.length > 0) {
      filteredList.forEach((car) => {
        console.log(`${car.id}. ${car.name}`)
      })
    } else {
      console.log(`Car with name ${name} not found`)
    }
  } catch (error) {
    console.error(error)
  }
}

if(command === 'add' && !!carParameter) {
    writeNewCar(carParameter)
} else if (command === 'list') {
  listCars()
} else if (command === 'remove' && !!carParameter) {
  removeCar(carParameter)
}

// console.log('Command: ', processArgs[2], 'Car: ', processArgs[3]);