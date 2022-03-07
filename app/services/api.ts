import randomstring from 'randomstring';

export async function createLink (longUrl) {
    return await fetch("https://bytes-url-api-379t3p9vm-roman-ii.vercel.app/api/link", {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: longUrl,
            shortUrl: `http://localhost:3001/bytes-${randomstring.generate()}`
        })
    }).then(res => res.json());
}
