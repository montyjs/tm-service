/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable quotes */
const reviews = [
  'I was skeptical when I bought them, but after 3 trips to the gym, and doing some hard bouldering projects, I have discovered these are such a great shoe, recommend to anyone',
  `When I bought these shoes I bought them cause they were cheap. To me these shoes are not worth the bang for your buck. I bought them and within a month I blew them out and had to get a second pair. Within two more months I had worn them out. I bought these shoes cause they were cheap, and that's what they are, cheaply made shoes that are just awful I thought that La Sportiva was bad, but then i gave them a third chance and bought the Finales when they first dropped on the market. I've had the Finales for 8 months now and I tell any new beginner thinking about getting shoes to get the Finales over these shoes. The Finales are great shoes that fit well, stick to the wall and fill amazing. The Tarantulaces feel awful, don't hold up well, and they don't stick at all. If I were to go back and buy beginner shoes again, I would pay the 20 dollars extra for the Finales. I hope that this helps if you are considering this shoe.`,
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
  `I’m new to climbing and haven’t been able to compare to anything else but I’m very please with the fit and comfort level of this shoe.`,
];

const titles = [
  `Snug and comfortable`, `Not worth it, get the Finales instead`, `Quick to mold to your feet, excellent beginner shoe`, `Really helps in climbing`,
  `Best shoe on the market for the price!`, `Great Shoe. Not for my style of climbing.`, `Greate value`, `Work great for beginner shoes`, `1st Climbing Shoes`, `Good fit.`, `great beginner shoe`, `Great for beginners`,
  `Great Climbing Shoes`, `good all around`,
];

const userNames = [`Sloth`, `Crimping Man`, `Kv216501`, `TJay`, `Desertrat`, `Sega92`, `Christoher`, `Noah22`, `mwallh`, `Tony`, `mcwap`, `kblake`, `Bryan`, `turn09`];

const stars = [4, 1, 5, 4, 5, 5, 3, 5, 4, 4, 5, 3, 5, 5];

const recommended = [true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

const yesVote = [0, 3, 6, 22, 41, 9, 30, 18, 11, 22, 39, 25, 13, 15, 5];

const noVote = [4, 0, 1, 8, 9, 0, 7, 3, 5, 10, 2, 6, 0, 5, 9];

const postDates = [`7 years ago`, ` 2 years ago`, `3 years ago`, `10 months ago`, `2 weeks ago`, `1 year ago`, `6 months ago`, `3 weeks ago`, `7 years ago`, `5 years ago`, `1 week ago`, `2 months ago`, `5 years ago`, `1 years ago`];

const image1 = ['', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec.image.4-1.jpeg', '', '', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec_image_2-1.jpeg', '', '', '', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec.image.3-1.jpeg', '', '', '', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec_image_1.jpeg', ''];

const image2 = ['', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec.image.4-2.jpeg', '', '', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec_image_2-2.jpeg', '', '', '', 'https://rei-fec-reviews.s3-us-west-2.amazonaws.com/images/fec.image.3-2.jpeg', '', '', '', '', ''];


module.exports = {
  reviews,
  titles,
  userNames,
  stars,
  recommended,
  yesVote,
  noVote,
  postDates,
  image1,
  image2
}