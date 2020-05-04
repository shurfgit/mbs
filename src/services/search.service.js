import axios from 'axios'

const http = axios.create({baseURL: 'https://api.fantlab.ru/'});


export const HTTP = {
    getAllAuthors: () => {
        http.get('autors').then((data) => {
            console.log(data);
        });
    }
};