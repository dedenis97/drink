export function adapt(data: any, map: any) {

    let keys = Object.keys(map)

    let object: any = {}

    for (let i = 0; i < keys.length; i++) {

        object[map[keys[i]]] = data[keys[i]] 
    }

    return object
}