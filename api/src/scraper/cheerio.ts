import * as cheerio from 'cheerio'
import * as requestPromise from 'request-promise'
import to from '../util/to'

export async function scraper(uri: string, collectorFn: Function) {
    const transform = (body: string) => cheerio.load(body);

    const [err, $] = await to(requestPromise.get(uri, {transform}));

    if (err) {
        console.error('An error occured while collecting data.');
        console.log(err);
        return
    }

    return collectorFn($, uri);
}