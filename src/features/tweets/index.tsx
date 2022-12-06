import { tweets } from '@app/mock-data';
import { TrendsForYou } from './components/TrendsForYou';
import { Tweet } from './components/Tweet';

export const Tweets = () => (
  <div className="flex gap-x-10">
    <div className="basis-6/10 h-screen">
      <div className="p-6">
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div>
    </div>
    <div className="basis-4/10">
      <TrendsForYou />
    </div>
  </div>
);
