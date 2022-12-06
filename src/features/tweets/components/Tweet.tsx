import { Button } from "@app/components/elements";
import { ImCogs } from "react-icons/all";

export interface Tweet {
  id: string;
  author: string;
  avatar: string;
  tweetImg?: string;

  content: string;
}

interface TweetProps {
  tweet: Tweet;
}

export const Tweet = ({ tweet }: TweetProps) => (
  <div className="p-5 bg-white shadow-md rounded-lg my-2">
    <div className="flex items-center gap-x-2">
      <img src={tweet.avatar} height={40} width={40} />
      <div>
        <h4>{tweet.author}</h4>
        <p>24 August 20:43</p>
      </div>
    </div>
    <h4 className="my-2">{tweet.content}</h4>
    <div className="flex justify-center">
      <img className="bg-white rounded" src={tweet.tweetImg} />
    </div>
    <div className="my-6" />
    <div className="flex w-full justify-between">
      <button className="item-center flex bg-amber-300 gap-x-2 py-2 px-4 rounded-lg text-xs hover:bg-amber-500 transition duration-1000">
        <ImCogs />
        Comments
      </button>
      <button className="items-center flex bg-amber-300 gap-x-2 py-2 px-4 rounded-lg text-xs hover:bg-amber-500 transition duration-1000">
        <ImCogs />
        Comments
      </button>
      <button className="flex bg-amber-300 gap-x-2 py-2 px-4 rounded-lg text-xs hover:bg-amber-500 transition duration-1000">
        <ImCogs />
        Comments
      </button>
    </div>
  </div>
);
