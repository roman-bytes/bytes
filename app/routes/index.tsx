import {LoaderFunction, redirect} from "remix";

// Doing this because the action function here goes to root.tsx and not its own page.
export const loader: LoaderFunction = async () => redirect('/generate');
