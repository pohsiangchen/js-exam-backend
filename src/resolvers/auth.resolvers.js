const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  Mutation: {
    async signup(parent, args, context) {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.createUser({ ...args, password });

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    },

    async login(parent, { email, password }, context) {
      let user;
      try {
        user = await context.prisma.user({ email });
      } catch (error) {
        throw new Error(`No user found for email: ${email}`);
      }
      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) {
        throw new Error('Invalid password');
      }
      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user
      };
    }
  }
};
