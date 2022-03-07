import randomstring from 'randomstring';

export async function createLink(longUrl) {
    return await fetch("https://bytes-url-api-379t3p9vm-roman-ii.vercel.app/api/link", {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: longUrl,
            shortUrl: `http://localhost:3000/bytes-${randomstring.generate(6)}`
        })
    }).then(res => res.json());
}

export async function getRedirect(path) {
    const urls = await fetch(`https://bytes-url-api-379t3p9vm-roman-ii.vercel.app/api/link`, {
        method: 'get'
    }).then(res => res.json());
    const url = urls.filter(url => url.shortUrl === path);
    return url[0].url;
}
