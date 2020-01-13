// If the query is exactly the same on Prisma and your query (can happen when there's no custom logic such as authentication or filtering), you can jsut forward that query from Yoga to Prisma instead of writing the full query (see query commented below).
const { forwardTo } = require('prisma-binding');

const Query = {
  items: forwardTo('db')
};

// const Query = {
//   async items(parents, args, ctx, info) {
//     const items = await ctx.db.query.items();

//     return items;
//   }
// };

module.exports = Query;
