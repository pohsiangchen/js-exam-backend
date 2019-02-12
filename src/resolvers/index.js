// const { Query } = require('./Query')
// const { auth } = require('./Mutation/auth')
// const { post } = require('./Mutation/post')
// const { Subscription } = require('./Subscription')
// const { User } = require('./User')
// const { Post } = require('./Post')

// module.exports = {
//   Query,
//   Mutation: {
//     ...auth,
//     ...post,
//   },
//   Subscription,
//   User,
//   Post,
// }

const path = require('path');
const { fileLoader } = require('merge-graphql-schemas');

/*  AUTOMATED APPROACH: Put your resolvers anywhere 
    with ".resolvers.[js/ts]" naming convention */
const resolvers = fileLoader(path.join(__dirname, './**/*.resolvers.*'));

module.exports = resolvers;
