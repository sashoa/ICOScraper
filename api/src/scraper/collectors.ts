import {Ico} from "../../../shared/Ico.model";

export function collectFromListPage($: CheerioStatic): Ico[] {
    let icos: Ico[] = [];
    $('.j-item').each(function(i, item) {
        const detailsToken = $(item).find('.j-link').attr('href');
        const logoUrl = $(item).find('.j-img').attr('src');
        const name = $(item).find('.j-title').text();
        const shortDescription = $(item).find('.j-anounce p').text();
        const startDate = $(item).find('.j-start-date .table-companies__item-date').text();
        const endDate = $(item).find('.j-end-date .table-companies__item-date').text();

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

export function collectFromDetailsPage($: CheerioStatic) {
    const website = $('.ico-card-about__link').first().attr('href');
    const fullDescription = $('#ico-description').text();
    const tokenSymbol = null; // No Token names on CoinTelegraph?
    return {website, fullDescription}
}