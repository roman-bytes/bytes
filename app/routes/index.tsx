import Button from '~/components/Button';
import Card from '~/components/Card';
import Header from '~/components/Header';
import Layout from '~/components/Layout/Layout';
import TextInput from '~/components/TextInput';

export default function Index() {
  return (
      <Layout>
          <Header />
          <Card>
              <TextInput label="URL" name="link" />
              <Button
                  url="https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8"
              >
                  Byte Size Me!
              </Button>
          </Card>
      </Layout>
  );
}
