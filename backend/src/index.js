const fs = require('fs/promises');
const path = require('path');

const pathToCars = path.join(__dirname, '..', 'data', 'cars.json');

const writeNewCar = async (car) => {
  try {
    const carsJson = await fs.readFile(pathToCars, 'utf-8');
    const cars = JSON.parse(carsJson);

    await fs.writeFile(
      pathToCars,
      JSON.stringify([...cars, car], null, 2),
      'utf-8'
    );
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Cars file does not exist');
    } else {
      throw error;
    }
  }
};

const createStorage = async (dirName) => {
  const newDirPath = path.join(
    __dirname,
    '..',
    'data',
    dirName
  );

  await fs.mkdir(newDirPath, {
    recursive: true
  });
};

const main = async () => {
  await createStorage('cars');
  await createStorage('users');
  await createStorage('uploads');
};

main();

const listStorage = async () => {
    const dataPath = path.join(__dirname, '..', 'data');

    const dirs = await fs.readdir(dataPath, {
        withFileTypes: true
    });

    const results = [];

    for (const dir of dirs) {
        dir.isDirectory() && results.push(dir.name);
    }

    return results;
};

const inspectPath = async (path) => {
   try {
        const stats = await fs.stat(path);
        if (stats.isFile()) {
            return {
                type: 'file',
                size: stats.size
            }
        } else if (stats.isDirectory()) {
            return {
                type: 'directory'
            }
        } 
    } catch(error) {
        if (error.code === 'ENOENT') {
      return { type: 'not-found' }
    } else {
      throw error;
    }
    }
}

const getStorageInfo = async (paths) => {
    let result = {};

    for (const filePath of paths) {
        const key = path.parse(filePath).name;
        const details = await inspectPath(filePath);

        result = {
            ...result,
            [key]: details
        };
    }

    return result;
};
