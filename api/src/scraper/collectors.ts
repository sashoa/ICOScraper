import {Ico} from "../../../shared/Ico.model";
import to from "../util/to";
import {log} from 'util';

export function collectFromListPage($: CheerioStatic): Ico[] {
    let icos: Ico[] = [];
    $('.j-item').each(function(i, item) {
        const detailsToken = $(item).find('.j-link').attr('href');
        let logoUrl = $(item).find('.j-img').first().attr('srcset');
        const name = $(item).find('.j-title').text();
        const shortDescription = $(item).find('.j-anounce p').text();
        const startDate = $(item).find('.j-start-date .table-companies__item-date').text();
        const endDate = $(item).find('.j-end-date .table-companies__item-date').text();

        logoUrl = logoUrl.split(' ')[0];
        const ico: Ico = {
            name,
            logoUrl,
            detailsToken: detailsToken.split('/').reverse()[0],
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            shortDescription,
            fullDescription: null,
            tokenSymbol: null,
            website: ''
        };
        icos.push(ico);
    });
    return icos;
}

export function collectFromDetailsPage($: CheerioStatic, uri?: string) {
    const website = $('.ico-card-about__link').first().attr('href');
    const fullDescription = $('#ico-description').text();
    const detailsToken = uri ? uri.split('/').reverse()[0] : '';

    const tokenCapFragment = $('#ico-detail > div > div:nth-child(2) > p').first().text();
    const regex = new RegExp(/([A-Z])\w+/);
    const [tokenSymbol] = regex.exec(tokenCapFragment);
    return {website, fullDescription, detailsToken, tokenSymbol}
}