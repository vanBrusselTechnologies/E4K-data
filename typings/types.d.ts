export * from './data';
import {Data} from './data';
export * from './images';
import {Images} from './images';
export * from './languages';
import {Languages} from './languages';

declare module 'e4k-data' {
    interface E4KData {
        country: Countries;
        data: Data;
        imageData: Images;
        imageBaseUrl: string;
        languages: Languages;
        network: Network;
    }

    const e4KData: E4KData;
    export = e4KData;
}

///region Country
export interface Countries {
    versionNo: number,
    deployTime: number,
    AR: Country,
    ARAB: Country,
    ASIA: Country,
    AU: Country,
    BR: Country,
    CN: Country,
    DE: Country,
    DK: Country,
    ES: Country,
    FI: Country,
    FR: Country,
    GB: Country,
    GR: Country,
    HISP: Country,
    ID: Country,
    IN: Country,
    IT: Country,
    JP: Country,
    KR: Country,
    MX: Country,
    NL: Country,
    NO: Country,
    PH: Country,
    PL: Country,
    PT: Country,
    RU: Country,
    SE: Country,
    TR: Country,
    US: Country,
    XX: Country,
    AE: Country,
    HANT: Country,
}

export interface Country {
    country: string,
    lang: string,
    flashCode: string,
    timezoneStart: number,
    timezoneEnd: number,
    browserCodes: string,
    geoIpCodes: string,
    np: string,
}

///endregion

///region Network
export interface Network {
    versionNo: number,
    deployTime: number,
    is_approval: boolean,
    instances: { instance: NetworkInstance[] },
    "test-instances"?: { instance: NetworkInstance[] },
    general: {
        defaultinstance: number,
        allowedfullscreen: boolean,
        networkname: string,
        usekeybaselogin: boolean,
        networkbuddies: boolean,
        enablefeedmessages: boolean,
        enablelonelycow: boolean,
        requestpaybyjs: boolean,
        earncredits: number,
        useexternallinks: boolean,
        invitefriends: boolean,
        maxusernamelength: number,
        usepayment: boolean,
        showversion: boolean,
        replaceUrlPatternForWebSocket: boolean,
        useWebSocket: boolean,
        webSocketProtocol: string
    }
}

export interface NetworkInstance {
    value: number,
    server: string,
    port: number,
    zone: string
    zoneId: number,
    instanceName: number,
    isFavorite: 0 | 1,
    instanceLocaId: string,
    isPriority: 0 | 1,
    isInternational: 0 | 1,
    countries: string[],
    defaultcountry?: string,
}

///endregion