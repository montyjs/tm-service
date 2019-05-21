/* eslint-disable quotes */
const { pool } = require('./index');

let reviews = [
  'I was skeptical when I bought them, but after 3 trips to the gym, and doing some hard bouldering projects, I have discovered these are such a great shoe, recommend to anyone',
  `These are my third pair of climbing shoes. The first were so painfully tight I didn't want to climb. The second pair were overly loose, but kept me climbing until the soles wore through. These are 2.5 sizes (EU) smaller than the last, but even more comfortable. Goldilocks. They turn my feet orange, but I don't care.`,
  `I have been gym climbing since February but have already logged at least 20-25 visits to the gym. Just bought these shoes last week and in the 3 times I have gone since they already feel mostly broken in and 100x better than the rental shoes. The laces allow a lot of flexibility for tightness on different parts of your foot. Only complaint is that the tongue of the shoe has a lining that can get a little painful after a while and leave marks on your foot.`,
  `These shoes have been helpful over the past few weeks when I and my father went hiking in one of the mountains nearby the area.`,
  `These shoes perform very well and are awesome for the price. They are not just for beginners. I have been Trad climbing for almost 25 years and these edge, smear, and get into small cracks about as good as any I have worn. They do not provide any ankle protection so bigger cracks will chew your ankles to pieces. They were extremely comfortable from the time I tried them on (in store). After 3 sessions of free soloing approx. 2 hours each, I am truly impressed. I tried 3 other new pre-tensioned shoes and found them all to be too expensive and too painful. The object is to have fun isn't it?`,
  `Being new to climbing, I didn't want to get an overly aggressive shoe and figured these would be great. However, if you have toughened feet (prolonged boot wear like military or construction), I would suggest a more moderate to aggressive shoe.

**BEFORE you buy any shoe, be sure to visit the brand websites to see what shoe will best fit your foot shape (narrow vs wide, symetrical vs asymmetrical, neutral vs aggressive), then be sure to test fit the shoe IN PERSON**

**If possible, I would visit a climbing gym and speak to staff at the gym about what you have in mind. Some retail staff at your sport equipment stores may not be very knowledgeable in the world of climbing.**

After my first few times of serious climbing (3 hrs or more), I discovered that I like to have more rigidity in my toes and edges. This is not the best shoe for that.

I use these shoes for easy bouldering/top rope climbs and they do just fine. Once I started climbing with smaller foot holds (5.9+ at my gym) I lost that sense of stability in my foot placement.

The overall shape and edges of the shoe are super comfortable and sensitive, but the rubber is very soft for my style of climbing.`,
`At the time I purchased these they were with the cheapest or second cheapest climbing shoes the store had a available. I have been very happy with them.`,
`Great beginner shoe has good strength. Amazing I love the look`,
`Beginner here and these shoes work great. I got the size where my toes are all curling a smidge. Not 90 degrees but maybe 15-25. Good grip and all around show for a beginner.`,
`Great all around shoe. Pretty true to size. I typically wear a 12 tennis shoe and I found that the 11 fit pretty well. I actually elected to go with a shoe that had a little bit more wiggle room (compared to previous shoes) and find this to be much better. Went to the rock climbing gym and stayed in shoes for 2 hours straight without pulling them off. Similar to other comments, the first time out of the box these are pretty slick - i peeled off a few foot holds that I wasn't expecting and they didn't feel very sticky. I'm assuming I'll break them in pretty quick. Nice overall lace up.`,
`At the time I purchased these they were with the cheapest or second cheapest climbing shoes the store had a available. I have been very happy with them.`,
`Great beginner shoe has good strength. Amazing I love the look`,
`Seem to be an excellent value for a climbing shoe...evidenced by how many people are wearing them at the rock climbing facility I now frequent. Best part is the fit, which for me, means a wider than average toe box. Also wanted lace-up shoes. As an entry level purchase, these shoes are well constructed and check all the boxes.`,
`I’m new to climbing and haven’t been able to compare to anything else but I’m very please with the fit and comfort level of this shoe.`
];

let titles = [
  `Snug and comfortable`, `Truly Surprised`, `Quick to mold to your feet, excellent beginner shoe`, `Really helps in climbing`,
  `Best shoe on the market for the price!`, `Great Shoe. Not for my style of climbing.`, `Greate value`, `Work great for beginner shoes`, `1st Climbing Shoes`, `Good fit.`, `great beginner shoe`, `Great for beginners`,
  `Great Climbing Shoes`, `good all around`
];

let usernames = [`Sloth`, `dah bike`, `Kv216501`, `TJay`, `Desertrat`, `Sega92`, `Christoher`, `Noah22`, `mwallh`, `Tony`, `mcwap`, `kblake`, `Bryan`, `turn09`];

let sizeratings = [4, 3, 3, 3, 3, 3, 0, 3, 2, 2, 3, 2, 4, 3];

let stars = [5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

let postdates = [`7 years ago`, ` 6 years ago`, `3 years ago`, `10 months ago`, `2 weeks ago`, `1 year ago`, `6 months ago`, `3 weeks ago`, `7 years ago`, `5 years ago`, `1 week ago`, `2 months ago`, `5 years ago`, `1 years ago` ]

let data = [];

for (let i = 0; i < reviews.length; i++) {
  data.push({
    username: usernames[i],
    postdate: postdates[i],
    title: titles[i],
    review: reviews[i],
    rating: stars[i],
    sizerating: sizeratings[i],
    recommended: true,
    images: false,
  });
}

const realSeed = (data) => {
  const queryString = 'INSERT INTO reviews (userName, postDate, title, review, rating, sizerating,recommended, images) VALUES ($1,$2,$3,$4,$5,$6,$7, $8)';
  let params;
  let date;
  for (let i = 0; i < data.length; i += 1) {
    let obj = data[i];
    params = [
      obj.username,
      obj.postdate,
      obj.title,
      obj.review,
      obj.rating,
      obj.sizerating,
      true,
      'someurl.url',
    ];
    pool.query(queryString, params, (err) => {
      if (err) {
        return console.error(err.message);
      }
    });
  }
};

realSeed(data);
