function fetchISSPosition() {
    return fetch('http://api.open-notify.org/iss-now.json')
        .then((response) => {
            return response.json();
        });
}

async function getISSPosition(){
    return await fetchISSPosition();
}

function runner(gen){
    const iterator = gen;
    function run(arg) {
        let res = iterator.next(arg);
        if (res.done) {
            return res.value;
        } else {
            return Promise.resolve(res.value).then(run);
        }
    }

    return run();
}