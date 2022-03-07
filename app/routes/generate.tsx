import Card from '~/components/Card';
import Header from '~/components/Header';
import Layout from '~/components/Layout/Layout';
import React from "react";
import {ActionFunction, useActionData} from "remix";
import {createLink} from "~/services/api";

export const action: ActionFunction = async ({ request}) => {
    const formData = await request.formData();
    const url = formData.get('url');
    const link = await createLink(url);
    console.log('link', link);

    return link;
}

export default function Generate() {
    const data = useActionData();
    return (
      <Layout>
          <Header />
          <Card>
              <h3 className="text-sm text-gray-500">URL to long? Generate a small one thats easy to share.</h3>
              <form method="post" action="/generate">
                  <div className="my-2">
                      <label htmlFor="url" className="block text-sm font-medium text-gray-900">
                          URL
                      </label>
                      <div className="mt-1">
                          <input
                              id='url'
                              name="url"
                              type="url"
                              required
                              placeholder="https://example.com"
                              pattern="https://.*"
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                      </div>
                  </div>
                  <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-romanBlack hover:bg-romanYellow hover:text-romanBlack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                      Byte Size Me!
                  </button>
              </form>
              {data?.shortUrl && (
                  <>
                      <div className="relative mt-6">
                          <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-300" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                              <span className="px-2 bg-white text-gray-500">Your byte sized URL</span>
                          </div>
                      </div>
                      <div>
                          {data?.shortUrl}
                      </div>
                  </>
              )}
          </Card>
      </Layout>
    );
}
