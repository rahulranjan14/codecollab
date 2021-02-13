
import { API } from '../backend'

export const createproject = project => {
    return fetch(`${API}/createproject`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}


export const updateproject = ( projectId,  project) => {
    return fetch(`${API}/project/update/${projectId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getproject = projectId => {
    return fetch (`${API}/project/${projectId}`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}