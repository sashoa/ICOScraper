export default function to<T>(promise): Promise<[Error | null, T | null]> {
    return promise
    .then(data => [null, data])
    .catch(err => [err, null]);
}