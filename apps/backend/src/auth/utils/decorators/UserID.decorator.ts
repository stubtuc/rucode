import {createParamDecorator} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import {IncomingMessage} from "http";
import {verifyToken} from "src/auth/utils/jwt/verifyToken";

const getToken = (req: IncomingMessage) => req.headers.authorization.split(' ')[1];

export const UserID = createParamDecorator((_, ctx): number => {
    const request = GqlExecutionContext.create(ctx).getContext().req;
    const token = getToken(request);

    const { id } = verifyToken(token);

    return id;
});