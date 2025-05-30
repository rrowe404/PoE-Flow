import { Metadata } from "userscript-metadata-generator";

const metadata: Metadata = {
    author: 'rrowe404',
    name: 'Path of Exile Better Bulk Filter',
    description: 'Completely hides unhighlighted items and categories in PoE bulk trade',
    'inject-into': 'content',
    match: 'https://www.pathofexile.com/trade*',
}

module.exports = metadata;