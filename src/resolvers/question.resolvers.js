module.exports = {
  Query: {
    question(parent, args, context) {
      return context.prisma.question(args.where) || null;
    },
    async questions(parent, args, context) {
      const { edges, pageInfo } = await context.prisma.questionsConnection(
        args
      );
      const aggregate = await context.prisma
        .questionsConnection(args)
        .aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  }
};
