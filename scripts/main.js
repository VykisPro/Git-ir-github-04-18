import Tab from "./tab.js";

fetch('./scripts/db.json')
    .then(res => res.json())
    .then(data => {
        data.modals.forEach(modalas =>{
            document
            .querySelector(`#${modalas.name.toLowerCase()}`)
            .addEventListener('click', () =>{
                new Tab(modalas);
            })
        });
    })