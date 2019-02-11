module.exports = {
        typeDefs: /* GraphQL */ `type AggregateExam {
  count: Int!
}

type AggregateHistory {
  count: Int!
}

type AggregateInterview {
  count: Int!
}

type AggregateQuestion {
  count: Int!
}

type AggregateQuestionSnapshot {
  count: Int!
}

type AggregateSnapComment {
  count: Int!
}

type AggregateSummary {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Exam {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: ExamStatus!
  syncCode: String
  interview: Interview!
  summaries(where: SummaryWhereInput, orderBy: SummaryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Summary!]
  histories(where: HistoryWhereInput, orderBy: HistoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [History!]
  questionSnapshot: QuestionSnapshot!
}

type ExamConnection {
  pageInfo: PageInfo!
  edges: [ExamEdge]!
  aggregate: AggregateExam!
}

input ExamCreateInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewCreateOneWithoutExamsInput!
  summaries: SummaryCreateManyWithoutExamInput
  histories: HistoryCreateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotCreateOneWithoutExamInput!
}

input ExamCreateManyWithoutInterviewInput {
  create: [ExamCreateWithoutInterviewInput!]
  connect: [ExamWhereUniqueInput!]
}

input ExamCreateOneWithoutHistoriesInput {
  create: ExamCreateWithoutHistoriesInput
  connect: ExamWhereUniqueInput
}

input ExamCreateOneWithoutQuestionSnapshotInput {
  create: ExamCreateWithoutQuestionSnapshotInput
  connect: ExamWhereUniqueInput
}

input ExamCreateOneWithoutSummariesInput {
  create: ExamCreateWithoutSummariesInput
  connect: ExamWhereUniqueInput
}

input ExamCreateWithoutHistoriesInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewCreateOneWithoutExamsInput!
  summaries: SummaryCreateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotCreateOneWithoutExamInput!
}

input ExamCreateWithoutInterviewInput {
  status: ExamStatus
  syncCode: String
  summaries: SummaryCreateManyWithoutExamInput
  histories: HistoryCreateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotCreateOneWithoutExamInput!
}

input ExamCreateWithoutQuestionSnapshotInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewCreateOneWithoutExamsInput!
  summaries: SummaryCreateManyWithoutExamInput
  histories: HistoryCreateManyWithoutExamInput
}

input ExamCreateWithoutSummariesInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewCreateOneWithoutExamsInput!
  histories: HistoryCreateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotCreateOneWithoutExamInput!
}

type ExamEdge {
  node: Exam!
  cursor: String!
}

enum ExamOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
  syncCode_ASC
  syncCode_DESC
}

type ExamPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: ExamStatus!
  syncCode: String
}

input ExamScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: ExamStatus
  status_not: ExamStatus
  status_in: [ExamStatus!]
  status_not_in: [ExamStatus!]
  syncCode: String
  syncCode_not: String
  syncCode_in: [String!]
  syncCode_not_in: [String!]
  syncCode_lt: String
  syncCode_lte: String
  syncCode_gt: String
  syncCode_gte: String
  syncCode_contains: String
  syncCode_not_contains: String
  syncCode_starts_with: String
  syncCode_not_starts_with: String
  syncCode_ends_with: String
  syncCode_not_ends_with: String
  AND: [ExamScalarWhereInput!]
  OR: [ExamScalarWhereInput!]
  NOT: [ExamScalarWhereInput!]
}

enum ExamStatus {
  IN_PROGRESS
  CLOSED
}

type ExamSubscriptionPayload {
  mutation: MutationType!
  node: Exam
  updatedFields: [String!]
  previousValues: ExamPreviousValues
}

input ExamSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ExamWhereInput
  AND: [ExamSubscriptionWhereInput!]
  OR: [ExamSubscriptionWhereInput!]
  NOT: [ExamSubscriptionWhereInput!]
}

input ExamUpdateInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewUpdateOneRequiredWithoutExamsInput
  summaries: SummaryUpdateManyWithoutExamInput
  histories: HistoryUpdateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotUpdateOneRequiredWithoutExamInput
}

input ExamUpdateManyDataInput {
  status: ExamStatus
  syncCode: String
}

input ExamUpdateManyMutationInput {
  status: ExamStatus
  syncCode: String
}

input ExamUpdateManyWithoutInterviewInput {
  create: [ExamCreateWithoutInterviewInput!]
  delete: [ExamWhereUniqueInput!]
  connect: [ExamWhereUniqueInput!]
  disconnect: [ExamWhereUniqueInput!]
  update: [ExamUpdateWithWhereUniqueWithoutInterviewInput!]
  upsert: [ExamUpsertWithWhereUniqueWithoutInterviewInput!]
  deleteMany: [ExamScalarWhereInput!]
  updateMany: [ExamUpdateManyWithWhereNestedInput!]
}

input ExamUpdateManyWithWhereNestedInput {
  where: ExamScalarWhereInput!
  data: ExamUpdateManyDataInput!
}

input ExamUpdateOneRequiredWithoutHistoriesInput {
  create: ExamCreateWithoutHistoriesInput
  update: ExamUpdateWithoutHistoriesDataInput
  upsert: ExamUpsertWithoutHistoriesInput
  connect: ExamWhereUniqueInput
}

input ExamUpdateOneRequiredWithoutQuestionSnapshotInput {
  create: ExamCreateWithoutQuestionSnapshotInput
  update: ExamUpdateWithoutQuestionSnapshotDataInput
  upsert: ExamUpsertWithoutQuestionSnapshotInput
  connect: ExamWhereUniqueInput
}

input ExamUpdateOneRequiredWithoutSummariesInput {
  create: ExamCreateWithoutSummariesInput
  update: ExamUpdateWithoutSummariesDataInput
  upsert: ExamUpsertWithoutSummariesInput
  connect: ExamWhereUniqueInput
}

input ExamUpdateWithoutHistoriesDataInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewUpdateOneRequiredWithoutExamsInput
  summaries: SummaryUpdateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotUpdateOneRequiredWithoutExamInput
}

input ExamUpdateWithoutInterviewDataInput {
  status: ExamStatus
  syncCode: String
  summaries: SummaryUpdateManyWithoutExamInput
  histories: HistoryUpdateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotUpdateOneRequiredWithoutExamInput
}

input ExamUpdateWithoutQuestionSnapshotDataInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewUpdateOneRequiredWithoutExamsInput
  summaries: SummaryUpdateManyWithoutExamInput
  histories: HistoryUpdateManyWithoutExamInput
}

input ExamUpdateWithoutSummariesDataInput {
  status: ExamStatus
  syncCode: String
  interview: InterviewUpdateOneRequiredWithoutExamsInput
  histories: HistoryUpdateManyWithoutExamInput
  questionSnapshot: QuestionSnapshotUpdateOneRequiredWithoutExamInput
}

input ExamUpdateWithWhereUniqueWithoutInterviewInput {
  where: ExamWhereUniqueInput!
  data: ExamUpdateWithoutInterviewDataInput!
}

input ExamUpsertWithoutHistoriesInput {
  update: ExamUpdateWithoutHistoriesDataInput!
  create: ExamCreateWithoutHistoriesInput!
}

input ExamUpsertWithoutQuestionSnapshotInput {
  update: ExamUpdateWithoutQuestionSnapshotDataInput!
  create: ExamCreateWithoutQuestionSnapshotInput!
}

input ExamUpsertWithoutSummariesInput {
  update: ExamUpdateWithoutSummariesDataInput!
  create: ExamCreateWithoutSummariesInput!
}

input ExamUpsertWithWhereUniqueWithoutInterviewInput {
  where: ExamWhereUniqueInput!
  update: ExamUpdateWithoutInterviewDataInput!
  create: ExamCreateWithoutInterviewInput!
}

input ExamWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: ExamStatus
  status_not: ExamStatus
  status_in: [ExamStatus!]
  status_not_in: [ExamStatus!]
  syncCode: String
  syncCode_not: String
  syncCode_in: [String!]
  syncCode_not_in: [String!]
  syncCode_lt: String
  syncCode_lte: String
  syncCode_gt: String
  syncCode_gte: String
  syncCode_contains: String
  syncCode_not_contains: String
  syncCode_starts_with: String
  syncCode_not_starts_with: String
  syncCode_ends_with: String
  syncCode_not_ends_with: String
  interview: InterviewWhereInput
  summaries_every: SummaryWhereInput
  summaries_some: SummaryWhereInput
  summaries_none: SummaryWhereInput
  histories_every: HistoryWhereInput
  histories_some: HistoryWhereInput
  histories_none: HistoryWhereInput
  questionSnapshot: QuestionSnapshotWhereInput
  AND: [ExamWhereInput!]
  OR: [ExamWhereInput!]
  NOT: [ExamWhereInput!]
}

input ExamWhereUniqueInput {
  id: ID
}

type History {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  code: String!
  exam: Exam!
  snapComments(where: SnapCommentWhereInput, orderBy: SnapCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SnapComment!]
}

type HistoryConnection {
  pageInfo: PageInfo!
  edges: [HistoryEdge]!
  aggregate: AggregateHistory!
}

input HistoryCreateInput {
  code: String!
  exam: ExamCreateOneWithoutHistoriesInput!
  snapComments: SnapCommentCreateManyWithoutHistoryInput
}

input HistoryCreateManyWithoutExamInput {
  create: [HistoryCreateWithoutExamInput!]
  connect: [HistoryWhereUniqueInput!]
}

input HistoryCreateOneWithoutSnapCommentsInput {
  create: HistoryCreateWithoutSnapCommentsInput
  connect: HistoryWhereUniqueInput
}

input HistoryCreateWithoutExamInput {
  code: String!
  snapComments: SnapCommentCreateManyWithoutHistoryInput
}

input HistoryCreateWithoutSnapCommentsInput {
  code: String!
  exam: ExamCreateOneWithoutHistoriesInput!
}

type HistoryEdge {
  node: History!
  cursor: String!
}

enum HistoryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  code_ASC
  code_DESC
}

type HistoryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  code: String!
}

input HistoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  AND: [HistoryScalarWhereInput!]
  OR: [HistoryScalarWhereInput!]
  NOT: [HistoryScalarWhereInput!]
}

type HistorySubscriptionPayload {
  mutation: MutationType!
  node: History
  updatedFields: [String!]
  previousValues: HistoryPreviousValues
}

input HistorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HistoryWhereInput
  AND: [HistorySubscriptionWhereInput!]
  OR: [HistorySubscriptionWhereInput!]
  NOT: [HistorySubscriptionWhereInput!]
}

input HistoryUpdateInput {
  code: String
  exam: ExamUpdateOneRequiredWithoutHistoriesInput
  snapComments: SnapCommentUpdateManyWithoutHistoryInput
}

input HistoryUpdateManyDataInput {
  code: String
}

input HistoryUpdateManyMutationInput {
  code: String
}

input HistoryUpdateManyWithoutExamInput {
  create: [HistoryCreateWithoutExamInput!]
  delete: [HistoryWhereUniqueInput!]
  connect: [HistoryWhereUniqueInput!]
  disconnect: [HistoryWhereUniqueInput!]
  update: [HistoryUpdateWithWhereUniqueWithoutExamInput!]
  upsert: [HistoryUpsertWithWhereUniqueWithoutExamInput!]
  deleteMany: [HistoryScalarWhereInput!]
  updateMany: [HistoryUpdateManyWithWhereNestedInput!]
}

input HistoryUpdateManyWithWhereNestedInput {
  where: HistoryScalarWhereInput!
  data: HistoryUpdateManyDataInput!
}

input HistoryUpdateOneRequiredWithoutSnapCommentsInput {
  create: HistoryCreateWithoutSnapCommentsInput
  update: HistoryUpdateWithoutSnapCommentsDataInput
  upsert: HistoryUpsertWithoutSnapCommentsInput
  connect: HistoryWhereUniqueInput
}

input HistoryUpdateWithoutExamDataInput {
  code: String
  snapComments: SnapCommentUpdateManyWithoutHistoryInput
}

input HistoryUpdateWithoutSnapCommentsDataInput {
  code: String
  exam: ExamUpdateOneRequiredWithoutHistoriesInput
}

input HistoryUpdateWithWhereUniqueWithoutExamInput {
  where: HistoryWhereUniqueInput!
  data: HistoryUpdateWithoutExamDataInput!
}

input HistoryUpsertWithoutSnapCommentsInput {
  update: HistoryUpdateWithoutSnapCommentsDataInput!
  create: HistoryCreateWithoutSnapCommentsInput!
}

input HistoryUpsertWithWhereUniqueWithoutExamInput {
  where: HistoryWhereUniqueInput!
  update: HistoryUpdateWithoutExamDataInput!
  create: HistoryCreateWithoutExamInput!
}

input HistoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  code: String
  code_not: String
  code_in: [String!]
  code_not_in: [String!]
  code_lt: String
  code_lte: String
  code_gt: String
  code_gte: String
  code_contains: String
  code_not_contains: String
  code_starts_with: String
  code_not_starts_with: String
  code_ends_with: String
  code_not_ends_with: String
  exam: ExamWhereInput
  snapComments_every: SnapCommentWhereInput
  snapComments_some: SnapCommentWhereInput
  snapComments_none: SnapCommentWhereInput
  AND: [HistoryWhereInput!]
  OR: [HistoryWhereInput!]
  NOT: [HistoryWhereInput!]
}

input HistoryWhereUniqueInput {
  id: ID
}

type Interview {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: InterviewStatus!
  intervieweeName: String!
  description: String
  host: User!
  password: String
  exams(where: ExamWhereInput, orderBy: ExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exam!]
}

type InterviewConnection {
  pageInfo: PageInfo!
  edges: [InterviewEdge]!
  aggregate: AggregateInterview!
}

input InterviewCreateInput {
  status: InterviewStatus
  intervieweeName: String!
  description: String
  host: UserCreateOneWithoutHostedInterviewsInput!
  password: String
  exams: ExamCreateManyWithoutInterviewInput
}

input InterviewCreateManyWithoutHostInput {
  create: [InterviewCreateWithoutHostInput!]
  connect: [InterviewWhereUniqueInput!]
}

input InterviewCreateOneWithoutExamsInput {
  create: InterviewCreateWithoutExamsInput
  connect: InterviewWhereUniqueInput
}

input InterviewCreateWithoutExamsInput {
  status: InterviewStatus
  intervieweeName: String!
  description: String
  host: UserCreateOneWithoutHostedInterviewsInput!
  password: String
}

input InterviewCreateWithoutHostInput {
  status: InterviewStatus
  intervieweeName: String!
  description: String
  password: String
  exams: ExamCreateManyWithoutInterviewInput
}

type InterviewEdge {
  node: Interview!
  cursor: String!
}

enum InterviewOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  status_ASC
  status_DESC
  intervieweeName_ASC
  intervieweeName_DESC
  description_ASC
  description_DESC
  password_ASC
  password_DESC
}

type InterviewPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  status: InterviewStatus!
  intervieweeName: String!
  description: String
  password: String
}

input InterviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: InterviewStatus
  status_not: InterviewStatus
  status_in: [InterviewStatus!]
  status_not_in: [InterviewStatus!]
  intervieweeName: String
  intervieweeName_not: String
  intervieweeName_in: [String!]
  intervieweeName_not_in: [String!]
  intervieweeName_lt: String
  intervieweeName_lte: String
  intervieweeName_gt: String
  intervieweeName_gte: String
  intervieweeName_contains: String
  intervieweeName_not_contains: String
  intervieweeName_starts_with: String
  intervieweeName_not_starts_with: String
  intervieweeName_ends_with: String
  intervieweeName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [InterviewScalarWhereInput!]
  OR: [InterviewScalarWhereInput!]
  NOT: [InterviewScalarWhereInput!]
}

enum InterviewStatus {
  IN_PROGRESS
  CLOSED
}

type InterviewSubscriptionPayload {
  mutation: MutationType!
  node: Interview
  updatedFields: [String!]
  previousValues: InterviewPreviousValues
}

input InterviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InterviewWhereInput
  AND: [InterviewSubscriptionWhereInput!]
  OR: [InterviewSubscriptionWhereInput!]
  NOT: [InterviewSubscriptionWhereInput!]
}

input InterviewUpdateInput {
  status: InterviewStatus
  intervieweeName: String
  description: String
  host: UserUpdateOneRequiredWithoutHostedInterviewsInput
  password: String
  exams: ExamUpdateManyWithoutInterviewInput
}

input InterviewUpdateManyDataInput {
  status: InterviewStatus
  intervieweeName: String
  description: String
  password: String
}

input InterviewUpdateManyMutationInput {
  status: InterviewStatus
  intervieweeName: String
  description: String
  password: String
}

input InterviewUpdateManyWithoutHostInput {
  create: [InterviewCreateWithoutHostInput!]
  delete: [InterviewWhereUniqueInput!]
  connect: [InterviewWhereUniqueInput!]
  disconnect: [InterviewWhereUniqueInput!]
  update: [InterviewUpdateWithWhereUniqueWithoutHostInput!]
  upsert: [InterviewUpsertWithWhereUniqueWithoutHostInput!]
  deleteMany: [InterviewScalarWhereInput!]
  updateMany: [InterviewUpdateManyWithWhereNestedInput!]
}

input InterviewUpdateManyWithWhereNestedInput {
  where: InterviewScalarWhereInput!
  data: InterviewUpdateManyDataInput!
}

input InterviewUpdateOneRequiredWithoutExamsInput {
  create: InterviewCreateWithoutExamsInput
  update: InterviewUpdateWithoutExamsDataInput
  upsert: InterviewUpsertWithoutExamsInput
  connect: InterviewWhereUniqueInput
}

input InterviewUpdateWithoutExamsDataInput {
  status: InterviewStatus
  intervieweeName: String
  description: String
  host: UserUpdateOneRequiredWithoutHostedInterviewsInput
  password: String
}

input InterviewUpdateWithoutHostDataInput {
  status: InterviewStatus
  intervieweeName: String
  description: String
  password: String
  exams: ExamUpdateManyWithoutInterviewInput
}

input InterviewUpdateWithWhereUniqueWithoutHostInput {
  where: InterviewWhereUniqueInput!
  data: InterviewUpdateWithoutHostDataInput!
}

input InterviewUpsertWithoutExamsInput {
  update: InterviewUpdateWithoutExamsDataInput!
  create: InterviewCreateWithoutExamsInput!
}

input InterviewUpsertWithWhereUniqueWithoutHostInput {
  where: InterviewWhereUniqueInput!
  update: InterviewUpdateWithoutHostDataInput!
  create: InterviewCreateWithoutHostInput!
}

input InterviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  status: InterviewStatus
  status_not: InterviewStatus
  status_in: [InterviewStatus!]
  status_not_in: [InterviewStatus!]
  intervieweeName: String
  intervieweeName_not: String
  intervieweeName_in: [String!]
  intervieweeName_not_in: [String!]
  intervieweeName_lt: String
  intervieweeName_lte: String
  intervieweeName_gt: String
  intervieweeName_gte: String
  intervieweeName_contains: String
  intervieweeName_not_contains: String
  intervieweeName_starts_with: String
  intervieweeName_not_starts_with: String
  intervieweeName_ends_with: String
  intervieweeName_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  host: UserWhereInput
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  exams_every: ExamWhereInput
  exams_some: ExamWhereInput
  exams_none: ExamWhereInput
  AND: [InterviewWhereInput!]
  OR: [InterviewWhereInput!]
  NOT: [InterviewWhereInput!]
}

input InterviewWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createExam(data: ExamCreateInput!): Exam!
  updateExam(data: ExamUpdateInput!, where: ExamWhereUniqueInput!): Exam
  updateManyExams(data: ExamUpdateManyMutationInput!, where: ExamWhereInput): BatchPayload!
  upsertExam(where: ExamWhereUniqueInput!, create: ExamCreateInput!, update: ExamUpdateInput!): Exam!
  deleteExam(where: ExamWhereUniqueInput!): Exam
  deleteManyExams(where: ExamWhereInput): BatchPayload!
  createHistory(data: HistoryCreateInput!): History!
  updateHistory(data: HistoryUpdateInput!, where: HistoryWhereUniqueInput!): History
  updateManyHistories(data: HistoryUpdateManyMutationInput!, where: HistoryWhereInput): BatchPayload!
  upsertHistory(where: HistoryWhereUniqueInput!, create: HistoryCreateInput!, update: HistoryUpdateInput!): History!
  deleteHistory(where: HistoryWhereUniqueInput!): History
  deleteManyHistories(where: HistoryWhereInput): BatchPayload!
  createInterview(data: InterviewCreateInput!): Interview!
  updateInterview(data: InterviewUpdateInput!, where: InterviewWhereUniqueInput!): Interview
  updateManyInterviews(data: InterviewUpdateManyMutationInput!, where: InterviewWhereInput): BatchPayload!
  upsertInterview(where: InterviewWhereUniqueInput!, create: InterviewCreateInput!, update: InterviewUpdateInput!): Interview!
  deleteInterview(where: InterviewWhereUniqueInput!): Interview
  deleteManyInterviews(where: InterviewWhereInput): BatchPayload!
  createQuestion(data: QuestionCreateInput!): Question!
  updateQuestion(data: QuestionUpdateInput!, where: QuestionWhereUniqueInput!): Question
  updateManyQuestions(data: QuestionUpdateManyMutationInput!, where: QuestionWhereInput): BatchPayload!
  upsertQuestion(where: QuestionWhereUniqueInput!, create: QuestionCreateInput!, update: QuestionUpdateInput!): Question!
  deleteQuestion(where: QuestionWhereUniqueInput!): Question
  deleteManyQuestions(where: QuestionWhereInput): BatchPayload!
  createQuestionSnapshot(data: QuestionSnapshotCreateInput!): QuestionSnapshot!
  updateQuestionSnapshot(data: QuestionSnapshotUpdateInput!, where: QuestionSnapshotWhereUniqueInput!): QuestionSnapshot
  updateManyQuestionSnapshots(data: QuestionSnapshotUpdateManyMutationInput!, where: QuestionSnapshotWhereInput): BatchPayload!
  upsertQuestionSnapshot(where: QuestionSnapshotWhereUniqueInput!, create: QuestionSnapshotCreateInput!, update: QuestionSnapshotUpdateInput!): QuestionSnapshot!
  deleteQuestionSnapshot(where: QuestionSnapshotWhereUniqueInput!): QuestionSnapshot
  deleteManyQuestionSnapshots(where: QuestionSnapshotWhereInput): BatchPayload!
  createSnapComment(data: SnapCommentCreateInput!): SnapComment!
  updateSnapComment(data: SnapCommentUpdateInput!, where: SnapCommentWhereUniqueInput!): SnapComment
  updateManySnapComments(data: SnapCommentUpdateManyMutationInput!, where: SnapCommentWhereInput): BatchPayload!
  upsertSnapComment(where: SnapCommentWhereUniqueInput!, create: SnapCommentCreateInput!, update: SnapCommentUpdateInput!): SnapComment!
  deleteSnapComment(where: SnapCommentWhereUniqueInput!): SnapComment
  deleteManySnapComments(where: SnapCommentWhereInput): BatchPayload!
  createSummary(data: SummaryCreateInput!): Summary!
  updateSummary(data: SummaryUpdateInput!, where: SummaryWhereUniqueInput!): Summary
  updateManySummaries(data: SummaryUpdateManyMutationInput!, where: SummaryWhereInput): BatchPayload!
  upsertSummary(where: SummaryWhereUniqueInput!, create: SummaryCreateInput!, update: SummaryUpdateInput!): Summary!
  deleteSummary(where: SummaryWhereUniqueInput!): Summary
  deleteManySummaries(where: SummaryWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  exam(where: ExamWhereUniqueInput!): Exam
  exams(where: ExamWhereInput, orderBy: ExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Exam]!
  examsConnection(where: ExamWhereInput, orderBy: ExamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ExamConnection!
  history(where: HistoryWhereUniqueInput!): History
  histories(where: HistoryWhereInput, orderBy: HistoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [History]!
  historiesConnection(where: HistoryWhereInput, orderBy: HistoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HistoryConnection!
  interview(where: InterviewWhereUniqueInput!): Interview
  interviews(where: InterviewWhereInput, orderBy: InterviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interview]!
  interviewsConnection(where: InterviewWhereInput, orderBy: InterviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InterviewConnection!
  question(where: QuestionWhereUniqueInput!): Question
  questions(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Question]!
  questionsConnection(where: QuestionWhereInput, orderBy: QuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionConnection!
  questionSnapshot(where: QuestionSnapshotWhereUniqueInput!): QuestionSnapshot
  questionSnapshots(where: QuestionSnapshotWhereInput, orderBy: QuestionSnapshotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [QuestionSnapshot]!
  questionSnapshotsConnection(where: QuestionSnapshotWhereInput, orderBy: QuestionSnapshotOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): QuestionSnapshotConnection!
  snapComment(where: SnapCommentWhereUniqueInput!): SnapComment
  snapComments(where: SnapCommentWhereInput, orderBy: SnapCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SnapComment]!
  snapCommentsConnection(where: SnapCommentWhereInput, orderBy: SnapCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SnapCommentConnection!
  summary(where: SummaryWhereUniqueInput!): Summary
  summaries(where: SummaryWhereInput, orderBy: SummaryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Summary]!
  summariesConnection(where: SummaryWhereInput, orderBy: SummaryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SummaryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Question {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: QuestionType!
  name: String!
  content: String!
  test: String
  tags: [String!]!
}

type QuestionConnection {
  pageInfo: PageInfo!
  edges: [QuestionEdge]!
  aggregate: AggregateQuestion!
}

input QuestionCreateInput {
  type: QuestionType!
  name: String!
  content: String!
  test: String
  tags: QuestionCreatetagsInput
}

input QuestionCreatetagsInput {
  set: [String!]
}

type QuestionEdge {
  node: Question!
  cursor: String!
}

enum QuestionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  content_ASC
  content_DESC
  test_ASC
  test_DESC
}

type QuestionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  type: QuestionType!
  name: String!
  content: String!
  test: String
  tags: [String!]!
}

type QuestionSnapshot {
  id: ID!
  createdAt: DateTime!
  questionId: String!
  type: QuestionType!
  name: String!
  content: String!
  test: String
  exam: Exam!
}

type QuestionSnapshotConnection {
  pageInfo: PageInfo!
  edges: [QuestionSnapshotEdge]!
  aggregate: AggregateQuestionSnapshot!
}

input QuestionSnapshotCreateInput {
  questionId: String!
  type: QuestionType!
  name: String!
  content: String!
  test: String
  exam: ExamCreateOneWithoutQuestionSnapshotInput!
}

input QuestionSnapshotCreateOneWithoutExamInput {
  create: QuestionSnapshotCreateWithoutExamInput
  connect: QuestionSnapshotWhereUniqueInput
}

input QuestionSnapshotCreateWithoutExamInput {
  questionId: String!
  type: QuestionType!
  name: String!
  content: String!
  test: String
}

type QuestionSnapshotEdge {
  node: QuestionSnapshot!
  cursor: String!
}

enum QuestionSnapshotOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  questionId_ASC
  questionId_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  content_ASC
  content_DESC
  test_ASC
  test_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type QuestionSnapshotPreviousValues {
  id: ID!
  createdAt: DateTime!
  questionId: String!
  type: QuestionType!
  name: String!
  content: String!
  test: String
}

type QuestionSnapshotSubscriptionPayload {
  mutation: MutationType!
  node: QuestionSnapshot
  updatedFields: [String!]
  previousValues: QuestionSnapshotPreviousValues
}

input QuestionSnapshotSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuestionSnapshotWhereInput
  AND: [QuestionSnapshotSubscriptionWhereInput!]
  OR: [QuestionSnapshotSubscriptionWhereInput!]
  NOT: [QuestionSnapshotSubscriptionWhereInput!]
}

input QuestionSnapshotUpdateInput {
  questionId: String
  type: QuestionType
  name: String
  content: String
  test: String
  exam: ExamUpdateOneRequiredWithoutQuestionSnapshotInput
}

input QuestionSnapshotUpdateManyMutationInput {
  questionId: String
  type: QuestionType
  name: String
  content: String
  test: String
}

input QuestionSnapshotUpdateOneRequiredWithoutExamInput {
  create: QuestionSnapshotCreateWithoutExamInput
  update: QuestionSnapshotUpdateWithoutExamDataInput
  upsert: QuestionSnapshotUpsertWithoutExamInput
  connect: QuestionSnapshotWhereUniqueInput
}

input QuestionSnapshotUpdateWithoutExamDataInput {
  questionId: String
  type: QuestionType
  name: String
  content: String
  test: String
}

input QuestionSnapshotUpsertWithoutExamInput {
  update: QuestionSnapshotUpdateWithoutExamDataInput!
  create: QuestionSnapshotCreateWithoutExamInput!
}

input QuestionSnapshotWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  questionId: String
  questionId_not: String
  questionId_in: [String!]
  questionId_not_in: [String!]
  questionId_lt: String
  questionId_lte: String
  questionId_gt: String
  questionId_gte: String
  questionId_contains: String
  questionId_not_contains: String
  questionId_starts_with: String
  questionId_not_starts_with: String
  questionId_ends_with: String
  questionId_not_ends_with: String
  type: QuestionType
  type_not: QuestionType
  type_in: [QuestionType!]
  type_not_in: [QuestionType!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  test: String
  test_not: String
  test_in: [String!]
  test_not_in: [String!]
  test_lt: String
  test_lte: String
  test_gt: String
  test_gte: String
  test_contains: String
  test_not_contains: String
  test_starts_with: String
  test_not_starts_with: String
  test_ends_with: String
  test_not_ends_with: String
  exam: ExamWhereInput
  AND: [QuestionSnapshotWhereInput!]
  OR: [QuestionSnapshotWhereInput!]
  NOT: [QuestionSnapshotWhereInput!]
}

input QuestionSnapshotWhereUniqueInput {
  id: ID
}

type QuestionSubscriptionPayload {
  mutation: MutationType!
  node: Question
  updatedFields: [String!]
  previousValues: QuestionPreviousValues
}

input QuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: QuestionWhereInput
  AND: [QuestionSubscriptionWhereInput!]
  OR: [QuestionSubscriptionWhereInput!]
  NOT: [QuestionSubscriptionWhereInput!]
}

enum QuestionType {
  JAVASCRIPT
  REACTJS
}

input QuestionUpdateInput {
  type: QuestionType
  name: String
  content: String
  test: String
  tags: QuestionUpdatetagsInput
}

input QuestionUpdateManyMutationInput {
  type: QuestionType
  name: String
  content: String
  test: String
  tags: QuestionUpdatetagsInput
}

input QuestionUpdatetagsInput {
  set: [String!]
}

input QuestionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  type: QuestionType
  type_not: QuestionType
  type_in: [QuestionType!]
  type_not_in: [QuestionType!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  test: String
  test_not: String
  test_in: [String!]
  test_not_in: [String!]
  test_lt: String
  test_lte: String
  test_gt: String
  test_gte: String
  test_contains: String
  test_not_contains: String
  test_starts_with: String
  test_not_starts_with: String
  test_ends_with: String
  test_not_ends_with: String
  AND: [QuestionWhereInput!]
  OR: [QuestionWhereInput!]
  NOT: [QuestionWhereInput!]
}

input QuestionWhereUniqueInput {
  id: ID
}

type SnapComment {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  author: String!
  content: String!
  history: History!
}

type SnapCommentConnection {
  pageInfo: PageInfo!
  edges: [SnapCommentEdge]!
  aggregate: AggregateSnapComment!
}

input SnapCommentCreateInput {
  author: String!
  content: String!
  history: HistoryCreateOneWithoutSnapCommentsInput!
}

input SnapCommentCreateManyWithoutHistoryInput {
  create: [SnapCommentCreateWithoutHistoryInput!]
  connect: [SnapCommentWhereUniqueInput!]
}

input SnapCommentCreateWithoutHistoryInput {
  author: String!
  content: String!
}

type SnapCommentEdge {
  node: SnapComment!
  cursor: String!
}

enum SnapCommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  author_ASC
  author_DESC
  content_ASC
  content_DESC
}

type SnapCommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  author: String!
  content: String!
}

input SnapCommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [SnapCommentScalarWhereInput!]
  OR: [SnapCommentScalarWhereInput!]
  NOT: [SnapCommentScalarWhereInput!]
}

type SnapCommentSubscriptionPayload {
  mutation: MutationType!
  node: SnapComment
  updatedFields: [String!]
  previousValues: SnapCommentPreviousValues
}

input SnapCommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SnapCommentWhereInput
  AND: [SnapCommentSubscriptionWhereInput!]
  OR: [SnapCommentSubscriptionWhereInput!]
  NOT: [SnapCommentSubscriptionWhereInput!]
}

input SnapCommentUpdateInput {
  author: String
  content: String
  history: HistoryUpdateOneRequiredWithoutSnapCommentsInput
}

input SnapCommentUpdateManyDataInput {
  author: String
  content: String
}

input SnapCommentUpdateManyMutationInput {
  author: String
  content: String
}

input SnapCommentUpdateManyWithoutHistoryInput {
  create: [SnapCommentCreateWithoutHistoryInput!]
  delete: [SnapCommentWhereUniqueInput!]
  connect: [SnapCommentWhereUniqueInput!]
  disconnect: [SnapCommentWhereUniqueInput!]
  update: [SnapCommentUpdateWithWhereUniqueWithoutHistoryInput!]
  upsert: [SnapCommentUpsertWithWhereUniqueWithoutHistoryInput!]
  deleteMany: [SnapCommentScalarWhereInput!]
  updateMany: [SnapCommentUpdateManyWithWhereNestedInput!]
}

input SnapCommentUpdateManyWithWhereNestedInput {
  where: SnapCommentScalarWhereInput!
  data: SnapCommentUpdateManyDataInput!
}

input SnapCommentUpdateWithoutHistoryDataInput {
  author: String
  content: String
}

input SnapCommentUpdateWithWhereUniqueWithoutHistoryInput {
  where: SnapCommentWhereUniqueInput!
  data: SnapCommentUpdateWithoutHistoryDataInput!
}

input SnapCommentUpsertWithWhereUniqueWithoutHistoryInput {
  where: SnapCommentWhereUniqueInput!
  update: SnapCommentUpdateWithoutHistoryDataInput!
  create: SnapCommentCreateWithoutHistoryInput!
}

input SnapCommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  history: HistoryWhereInput
  AND: [SnapCommentWhereInput!]
  OR: [SnapCommentWhereInput!]
  NOT: [SnapCommentWhereInput!]
}

input SnapCommentWhereUniqueInput {
  id: ID
}

type Subscription {
  exam(where: ExamSubscriptionWhereInput): ExamSubscriptionPayload
  history(where: HistorySubscriptionWhereInput): HistorySubscriptionPayload
  interview(where: InterviewSubscriptionWhereInput): InterviewSubscriptionPayload
  question(where: QuestionSubscriptionWhereInput): QuestionSubscriptionPayload
  questionSnapshot(where: QuestionSnapshotSubscriptionWhereInput): QuestionSnapshotSubscriptionPayload
  snapComment(where: SnapCommentSubscriptionWhereInput): SnapCommentSubscriptionPayload
  summary(where: SummarySubscriptionWhereInput): SummarySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Summary {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  author: String!
  content: String!
  exam: Exam!
}

type SummaryConnection {
  pageInfo: PageInfo!
  edges: [SummaryEdge]!
  aggregate: AggregateSummary!
}

input SummaryCreateInput {
  author: String!
  content: String!
  exam: ExamCreateOneWithoutSummariesInput!
}

input SummaryCreateManyWithoutExamInput {
  create: [SummaryCreateWithoutExamInput!]
  connect: [SummaryWhereUniqueInput!]
}

input SummaryCreateWithoutExamInput {
  author: String!
  content: String!
}

type SummaryEdge {
  node: Summary!
  cursor: String!
}

enum SummaryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  author_ASC
  author_DESC
  content_ASC
  content_DESC
}

type SummaryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  author: String!
  content: String!
}

input SummaryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [SummaryScalarWhereInput!]
  OR: [SummaryScalarWhereInput!]
  NOT: [SummaryScalarWhereInput!]
}

type SummarySubscriptionPayload {
  mutation: MutationType!
  node: Summary
  updatedFields: [String!]
  previousValues: SummaryPreviousValues
}

input SummarySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SummaryWhereInput
  AND: [SummarySubscriptionWhereInput!]
  OR: [SummarySubscriptionWhereInput!]
  NOT: [SummarySubscriptionWhereInput!]
}

input SummaryUpdateInput {
  author: String
  content: String
  exam: ExamUpdateOneRequiredWithoutSummariesInput
}

input SummaryUpdateManyDataInput {
  author: String
  content: String
}

input SummaryUpdateManyMutationInput {
  author: String
  content: String
}

input SummaryUpdateManyWithoutExamInput {
  create: [SummaryCreateWithoutExamInput!]
  delete: [SummaryWhereUniqueInput!]
  connect: [SummaryWhereUniqueInput!]
  disconnect: [SummaryWhereUniqueInput!]
  update: [SummaryUpdateWithWhereUniqueWithoutExamInput!]
  upsert: [SummaryUpsertWithWhereUniqueWithoutExamInput!]
  deleteMany: [SummaryScalarWhereInput!]
  updateMany: [SummaryUpdateManyWithWhereNestedInput!]
}

input SummaryUpdateManyWithWhereNestedInput {
  where: SummaryScalarWhereInput!
  data: SummaryUpdateManyDataInput!
}

input SummaryUpdateWithoutExamDataInput {
  author: String
  content: String
}

input SummaryUpdateWithWhereUniqueWithoutExamInput {
  where: SummaryWhereUniqueInput!
  data: SummaryUpdateWithoutExamDataInput!
}

input SummaryUpsertWithWhereUniqueWithoutExamInput {
  where: SummaryWhereUniqueInput!
  update: SummaryUpdateWithoutExamDataInput!
  create: SummaryCreateWithoutExamInput!
}

input SummaryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  author: String
  author_not: String
  author_in: [String!]
  author_not_in: [String!]
  author_lt: String
  author_lte: String
  author_gt: String
  author_gte: String
  author_contains: String
  author_not_contains: String
  author_starts_with: String
  author_not_starts_with: String
  author_ends_with: String
  author_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  exam: ExamWhereInput
  AND: [SummaryWhereInput!]
  OR: [SummaryWhereInput!]
  NOT: [SummaryWhereInput!]
}

input SummaryWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  hostedInterviews(where: InterviewWhereInput, orderBy: InterviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interview!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  hostedInterviews: InterviewCreateManyWithoutHostInput
}

input UserCreateOneWithoutHostedInterviewsInput {
  create: UserCreateWithoutHostedInterviewsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutHostedInterviewsInput {
  email: String!
  password: String!
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  hostedInterviews: InterviewUpdateManyWithoutHostInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutHostedInterviewsInput {
  create: UserCreateWithoutHostedInterviewsInput
  update: UserUpdateWithoutHostedInterviewsDataInput
  upsert: UserUpsertWithoutHostedInterviewsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutHostedInterviewsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutHostedInterviewsInput {
  update: UserUpdateWithoutHostedInterviewsDataInput!
  create: UserCreateWithoutHostedInterviewsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  hostedInterviews_every: InterviewWhereInput
  hostedInterviews_some: InterviewWhereInput
  hostedInterviews_none: InterviewWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    