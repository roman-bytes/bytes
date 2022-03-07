import {ActionFunction} from "remix";

export const action: ActionFunction = async ({}) => {
  console.log('this')
  const link = await fetch("https://bytes-url-api-379t3p9vm-roman-ii.vercel.app/api/link", {
    method: 'post',
    body: {
      url: "https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8",
      shortUrl: "http://localhost:3001/bytes-1sasd124",
      userId: '0b39528f-09c7-4034-90f0-b45616fa14bd',
    }
  }).then(res => res.json());
  console.log('LINK', link)

  return 'OK';
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <form action="/" name="create" method="post">
        <input type="text"/>
        <button type="submit">Create!</button>
      </form>
    </div>
  );
}
