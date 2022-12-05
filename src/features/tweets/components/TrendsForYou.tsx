const hashtags = [
  { title: "programming", tweetsCount: "100k" },
  { title: "devchallenges", tweetsCount: "100k" },
  { title: "frontend", tweetsCount: "100k" },
  { title: "helsinki", tweetsCount: "100k" },
  { title: "100DaysOfCode", tweetsCount: "100k" },
  { title: "Paris", tweetsCount: "100k" },
];

export const TrendsForYou = () => (
  <div className="p-4 bg-white m-8 rounded-xl shadow-xl">
    <p className="font-bold my-2">Trends for you</p>
    <hr />
    {hashtags.map((hashtag) => (
      <div className='my-4 cursor-pointer'  onClick={()=>console.log(hashtag.title)}>
        <p className="font-semibold text-xs">#{hashtag.title}</p>
        <p className="font-normal text-2xs my-1 text-gray">{hashtag.tweetsCount} Tweets</p>
      </div>
    ))}
  </div>
);
