export default function callApi(method: string, url: string, path: string, data?: any) {
    return fetch(url + '/api' + path, {
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        method,
    }).then(res => {
        return res.json();
    });
}
