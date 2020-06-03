
export const updateDB = (data: object) => {
    return new Promise((resolve) => {
        const strigified = JSON.stringify(data)
        localStorage.setItem('userActions', strigified)
        resolve()
    })
}

export const fetchDB = () => {
    return new Promise((resolve) => {
        const strigified = localStorage.getItem('userActions')
        if (!strigified) {
            return resolve({})
        }
        return resolve(JSON.parse(strigified))
    })
}


