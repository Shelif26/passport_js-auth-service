import { data } from "../userRecord/userRecord";
import { User } from "../Entity/user";
import crypto from "crypto";

class userServices {
  public static greet() {
    return "Welcome to passport.js";
  }
  public static create(args: any) {
    console.log(args);

    const user = data.getRepository(User);
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(args.password, salt, 10000, 512, "sha512")
      .toString("hex");
    const Data = user.save({
      email: args.email,
      salt: salt,
      hash: hash,
    });

    return Data;
  }
}

export default userServices;
