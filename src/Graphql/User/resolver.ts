import userServices from "../../Services/userService";

const userResolver = {
  Query: {
    greet() {
      return userServices.greet();
    },
  },
  Mutation: {
    createUser: (parent: any, args: any, context: any) => {
      console.log(args.input);
      return userServices.create(args.input);
    },
  },
};

export default userResolver;
