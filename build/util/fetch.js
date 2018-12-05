const Fetch = (url) => {
    return new Promise(resolve => {
        fetch('https://webservice.juanpi.com' + url).then(response => response.json())
            .then(result => resolve(result));
    });
};
export default Fetch;
//# sourceMappingURL=fetch.js.map