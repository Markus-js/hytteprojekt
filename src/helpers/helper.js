export async function fetch2api(url, method = 'GET', encoded) {
    let option = {
        method: method,
        body: encoded
    }

    try {
        const response = await fetch(url, option);
        const result = await response.json();
        return result;
    }

    catch(error){
        console.error(error);
    }
}