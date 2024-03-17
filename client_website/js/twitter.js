// User ID for @enerjyfood
const userId = '1446245057561038852';
const url = `https://api.twitter.com/2/users/${userId}/tweets`;

const bearerToken = 'process.env.BEARER_TOKEN';

/**
 * Retrieves tweets from a user's Twitter account.
 * @returns {Promise<void>} A promise that resolves when the tweets are retrieved.
 */
const getUserTweets = async () => {
    let userTweets = [];

    let params = {
        "max_results": 100,
        "tweet.fields": "created_at",
        "expansions": "author_id"
    }

    const options = {
        headers: {
            "User-Agent": "v2UserTweetsJS",
            "authorization": `Bearer ${bearerToken}`
        }
    }

    let hasNextPage = true;
    let nextToken = null;
    let userName;

    console.log("Retrieving Tweets...");

    while (hasNextPage) {
        let resp = await getPage(params, options, nextToken);
        
        if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
            userName = resp.includes.users[0].username;
            if (resp.data) {
                userTweets.push.apply(userTweets, resp.data);
            }

            if (resp.meta.next_token) {
                nextToken = resp.meta.next_token;
            } else {
                hasNextPage = false;
            }
        } else {
            hasNextPage = false;
        }
    }

    console.dir(userTweets, { depth: null });
    console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);
    displayTweets(userTweets);
}

/**
 * Retrieves a page of data from the Twitter API.
 * @param {Object} params - The parameters for the API request.
 * @param {Object} options - The options for the fetch request.
 * @param {string} nextToken - The token for paginating to the next page.
 * @returns {Promise<Object>} - A promise that resolves to the JSON response from the API.
 * @throws {Error} - If the request fails.
 */
const getPage = async (params, options, nextToken) => {
    if (nextToken) {
        params.pagination_token = nextToken;
    }

    let queryString = new URLSearchParams(params).toString();
    let requestUrl = `${url}?${queryString}`;

    try {
        const resp = await fetch(requestUrl, options);

        if (!resp.ok) {
            console.log(`${resp.status} ${resp.statusText}:\n${await resp.text()}`);
            return;
        }

        return await resp.json();
    } catch (err) {
        throw new Error(`Request failed: ${err}`);
    }
}

/**
 * Displays tweets in the tweet container.
 * 
 * @param {Array} tweets - An array of tweet objects.
 */
function displayTweets(tweets) {
    const tweetContainer = document.getElementById('tweet-container');
    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.textContent = `${tweet.author_id}: ${tweet.text}`;
        tweetContainer.appendChild(tweetElement);
    });
}
