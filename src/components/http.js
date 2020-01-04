export class Http {
    static HEADERS = {
        'Content-Type': 'application/json'
    }

    static async get(url) {
        return await request(url, 'GET');
    }

    static async post(url, data = {}) {
        return await request(url, 'POST', data);
    }

    static async patch(url, data = {}) {
        return await request(url, 'PATCH', data);
    }

    static async delete(url) {
        return await request(url, 'DELETE');
    }
}

const request = async (url, method = 'GET', data) => {
    const config = {
        method,
        headers: Http.HEADERS
    };

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data);
    }
    const response = await fetch(url, config);
    return await response.json();
}