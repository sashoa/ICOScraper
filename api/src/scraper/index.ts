import * as Router from "koa-router";
import {getOngoingIcos} from './scraper'
import {getIcoDetails} from './scraper'

const _router = new Router();

_router.get('/ico', getOngoingIcos);
_router.get('/ico/:detailsToken', getIcoDetails);

export const router = _router;