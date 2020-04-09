const firebase = require("firebase");

const getUsers = () => {
    const contactReference = firebase.database().ref("/contact/");
    return (new Promise((resolve, reject) => {
        //Attach an asynchronous callback to read the data
        contactReference.on("value", function (snapshot) {
            const folders = snapshot.val();
            if (folders === null) {
                resolve([]);
            } else {
                const data = Object.keys(folders).map(o => Object.assign({ id: o }, folders[o]));
                resolve(data);
            }
            contactReference.off("value");
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }));
}

const createUser = (params) => {
    const referencePath = '/contact/' + params.id + '/';
    const contactReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        contactReference.set({ name: params.name, addres: params.addres, phone: params.phone }, function (error) {
            if (error) {
                reject("Data could not be saved." + error);
            } else {
                resolve(params)
            }
        });
    }));
}

const updateUser = (params) => {
    const referencePath = '/contact/' + params.id + '/';
    const contactReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        contactReference.update({ name: params.name, addres: params.addres, phone: params.phone }, function (error) {
            if (error) {
                reject("Data could not be updated." + error);
                console.log(params)
            } else {
                resolve(params)
            }
        });
    }));
}

const deleteUser = (params) => {
    const referencePath = '/contact/' + params.id + '/';
    const contactReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        contactReference.remove((error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(params)
            }
        })
    }));
}

module.exports = { getUsers, createUser, updateUser, deleteUser }