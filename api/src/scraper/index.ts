import * as Router from "koa-router";
import {getOngoingIcos, getOngoingIcosWithFullDetails, getIcoDetails} from './scraper'

const _router = new Router();

_router.get('/ico', getOngoingIcosWithFullDetails);
_router.get('/ico/lazy', getOngoingIcos);
_router.get('/ico/:detailsToken', getIcoDetails);

export const router = _router;