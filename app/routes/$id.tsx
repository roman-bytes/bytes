import {LoaderFunction, redirect} from "remix";
import {getRedirect} from "~/services/api";

export const loader: LoaderFunction = async ({ request }) => {
    const redirectURL = await getRedirect(request.url);
    return redirect(redirectURL);
}
