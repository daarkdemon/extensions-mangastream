/* eslint-disable linebreak-style */
import {
    LanguageCode,
    SourceInfo,
    TagType,
    ContentRating
} from 'paperback-extensions-common'

import {
    MangaStream,
    getExportVersion
} from '../MangaStream'

const XS_DOMAIN = 'https://xcalibrscans.com'

export const XcalibrScansInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'XcalibrScans',
    description: 'Extension that pulls manga from XcalibrScans',
    author: 'darkdemon',
    authorWebsite: 'https://github.com/daarkdemon',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: XS_DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        }
    ]
}

export class XcalibrScans extends MangaStream {
    //FOR ALL THE SELECTIONS, PLEASE CHECK THE MangaSteam.ts FILE!!!

    baseUrl: string = XS_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH

    override requestManager = createRequestManager({
        requestsPerSecond: 1.5,
        requestTimeout: 15000,
    });

    //----MANGA DETAILS SELECTORS
    /*
    If a website uses different names/words for the status below, change them to these.
    These must also be changed id a different language is used!
    Don't worry, these are case insensitive.
    */

    manga_StatusTypes: any = { 
        ONGOING: "ongoing, daily release",
        COMPLETED: "completed"
    }

    //----HOMESCREEN SELECTORS
    //Disabling some of these will cause some Home-Page tests to fail, edit these test files to match the setting.
    //Always be sure to test this in the app!
    override userAgentRandomizer = ''
    override homescreen_PopularToday_enabled = true

    override homescreen_LatestUpdate_enabled = true

    override homescreen_NewManga_enabled = false

    override homescreen_TopAllTime_enabled = true
    override homescreen_TopMonthly_enabled = true
    override homescreen_TopWeekly_enabled = true

    /*
    ----TAG SELECTORS
    PRESET 1 (default): Genres are on homepage ex. https://mangagenki.com/
    tags_SubdirectoryPathName: string = ""
    tags_selector_box: string = "ul.genre"
    tags_selector_item: string = "li"
    tags_selector_label: string = ""

    PRESET 2: with /genre/ subdirectory ex. https://mangadark.com/genres/
    tags_SubdirectoryPathName: string = "/genres/"
    tags_selector_box: string = "ul.genre"
    tags_selector_item: string = "li"
    tags_selector_label: string = "span"
    */

}