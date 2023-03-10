function promise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Isso é um teste de promise');
        }, 3000);
    });
}

export default async () => {
    await promise()
        .then((response) => {
            console.log(response)
        })
        .finally(() => {
            console.log('Finalizou');
        }
    );
}