const { getUserId } = require('../utils');

module.exports = {
  Query: {
    interview(parent, args, context) {
      return context.prisma.interview(args.where) || null;
    },
    async interviews(parent, args, context) {
      const { edges, pageInfo } = await context.prisma.interviewsConnection(
        args
      );
      const aggregate = await context.prisma
        .interviewsConnection(args)
        .aggregate();
      return {
        edges,
        pageInfo,
        aggregate
      };
    }
  },
  Mutation: {
    createInterview(
      parent,
      { status, intervieweeName, description, password },
      context
    ) {
      const userId = getUserId(context);
      return context.prisma.createInterview({
        status,
        intervieweeName,
        description,
        password,
        host: { connect: { id: userId } }
      });
    }
    // updateInterview(data: InterviewUpdateInput!, where: InterviewWhereUniqueInput!): Interview
    // updateManyInterviews(data: InterviewUpdateManyMutationInput!, where: InterviewWhereInput): BatchPayload!
    // upsertInterview(where: InterviewWhereUniqueInput!, create: InterviewCreateInput!, update: InterviewUpdateInput!): Interview!
    // deleteInterview(where: InterviewWhereUniqueInput!): Interview
  },
  Interview: {
    host({ id }, args, context) {
      return context.prisma.interview({ id }).host();
    }
  }
};
