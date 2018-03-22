import * as Koa from 'koa';
import {router} from "./scraper";

const app = new Koa();

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
