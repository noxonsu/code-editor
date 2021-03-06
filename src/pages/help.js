import tag from 'html-tag-js';

import Page from "../components/page";
import gen from "../components/gen";
import helpers from '../modules/helpers';

export default function help(opts) {
    const page = Page(strings.help);
    const options = tag('div', {
        className: 'main list'
    });

    actionStack.push({
        id: 'help',
        action: page.hide
    });
    page.onhide = function () {
        actionStack.remove('help');
    };

    const settingsOptions = [{
            key: 'feedback',
            text: 'Feedback',
            type: 'a',
            href: 'mailto:dellevenjack@gmail.com?subject=feedback - Acode code editor for android&body=' + helpers.getFeedbackBody()
        },
        {
            key: 'help',
            text: strings.help,
            type: 'a',
            href: 'https://t.me/foxdebug_acode',
        }
    ];

    gen.listItems(options, settingsOptions, changeSetting);

    function changeSetting() {}

    page.append(options);
    document.body.append(page);
}