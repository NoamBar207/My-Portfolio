'use strict'

import { dbService } from './db.service.js'

const KEY = 'project'

export const projectService = {
    query,
    get,
    remove,
    save,
}

async function query() {
    var projects = await dbService.query(KEY)

    // if (!projects || !projects.length) {
    //     projects = _createDefaultProjects()
    //     await dbService.insert(KEY, projects)
    // }
    return projects
}

async function get(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function save(project) {
    if (project._id) return await dbService.put(KEY, project)
    else return await dbService.post(KEY, project)
}

// function getEmptyCar() {
//     return {
//         vendor: '',
//         speed: 0,
//     }
// }

// function _createDefaultProjects() {
//     return [
//         _createCar('audi', 50),
//         _createCar('fiat', 73),
//         _createCar('honda', 100),
//         _createCar('suzuki', 100),
//     ]
// }

// function _createCar(vendor, speed) {
//     return {
//         vendor,
//         speed,
//     }
// }



