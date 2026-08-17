export const createGarage = (name) => ({
    id: Math.round(Math.random() * 1000),
    name
})

export const getGarage = (id) => {
    if(id) {
        return {
            name: 'test'
        }
    }
}