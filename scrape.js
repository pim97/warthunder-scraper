const Scrappey = require('scrappey-wrapper');

/**
 * Check out our documentation here for more information: https://wiki.scrappey.com/
 * Your key can be found here: https://app.scrappey.com/#/
 */
const SCRAPPEY_API_KEY = 'API_KEY';
const scrappey = new Scrappey(SCRAPPEY_API_KEY);

/**
 * Scrappey.com is a proxy-wrapper for browsers, it allows you to run browser actions and execute javascript on any website.
 * with advanced options such as caching, proxy rotation, anti-bot and more.
 */
async function run() {

    /**
     * For all session options check: https://wiki.scrappey.com/getting-started#78f3fd5551724a78b12d548e95485bbe
     * We allow for multiple sessions to be created, each session has a different proxy and user-agent and unique fingerprint.
     */
    const session = await scrappey.createSession({})

    /**
     * Executes the browser actions requested
     */
    await scrappey.get({
        "cmd": "request.get",
        "url": "https://warthunder.com/en/community/userinfo/?nick=Vapid_B"
    })

    /**
     * Destroys the session, this will free up space for other users
     */
    await scrappey.destroySession(session.session)
}

run().catch(console.error);