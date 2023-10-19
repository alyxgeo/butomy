//const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';



//fetching user data from the api
export async function getProduct() {

    const res = await fetch(`${API_URL}`);

    if (!res.ok) throw Error('Failed getting menu');

    const data = await res.json();
    return data;
}

