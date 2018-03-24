import * as Koa from 'koa';
import {router} from "./scraper";
import * as serve from "koa-static";
const mount = require("koa-mount");

const app = new Koa();

app.use(mount("/assets", serve("./assets")));
app.use(router.routes());

app.listen(8090);

console.log('Server running on port 8090');
