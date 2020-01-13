const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    // Access the db in the createServer file, we then have access to all the fields of the Mutation type in the prisma.graphql file
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // All of the fields pulled in from the args need to go to the item data we can just spread them instead of manually putting each field and value in (title: args.title, description: args.description). We're not writing data: args because we'll later have to assign a user to this.
          ...args
        },
      }, 
    info // We pass the info variable because it contains the actual query and ctx.db.mutation needs the query from the frontend and pass it to the backend and that's going to specify the data that is being returned from the db when we create it.
  ); 

    // We're not directly item above. Instead we put it in a const and we then return that const. It's more convenient for debugging as we can console.log(item) as we create it.
    return item;
  }
};

module.exports = Mutations;
