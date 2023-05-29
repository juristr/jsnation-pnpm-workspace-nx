import { SimpleCard } from '@awesomecards/ui';
import type { V2_MetaFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Welcome to Remix</h1>
      <hr />
      <SimpleCard title="some title" text="test" />
    </div>
  );
}
