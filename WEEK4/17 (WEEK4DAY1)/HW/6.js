let errorPromise= new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('ops, error')),3000)
);

errorPromise.catch(alert);
