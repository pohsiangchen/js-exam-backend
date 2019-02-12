module.exports = {
  Query: {
    snapComment(parent, args, context) {
      return context.prisma.snapComment(args.where);
    },
    async snapComments(parent, args, context) {
      const { edges, pageInfo } = await context.prisma.snapCommentsConnection(
        args
      );
      const aggregate = await context.prisma
        .snapCommentsConnection(args)
        .aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  }
};
