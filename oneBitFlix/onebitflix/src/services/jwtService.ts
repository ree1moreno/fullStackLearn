import jwt from "jsonwebtoken";

const secret = "chave-do-jwt";

export const jwtSevice = {
  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, {
      expiresIn: expiration,
    });
  },
};
