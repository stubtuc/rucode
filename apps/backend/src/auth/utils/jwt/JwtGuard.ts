import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";
import {IncomingMessage} from "http";
import {ConfigService} from "@nestjs/config";

import {verifyToken} from "src/auth/utils/jwt/verifyToken";


@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private configService: ConfigService
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);
        const req = ctx.getContext().req;
        try {
            const token = this.getToken(req);
            verifyToken(token);

            return true;
        }
        catch(e) {
            throw new UnauthorizedException(e?.message);
        }
    }

    getSecret(): string {
        return this.configService.get<string>('SECRET_KEY');
    }

    protected getToken(request: IncomingMessage): string {
        const authorization = request.headers.authorization;

        if (!authorization) {
            throw new Error('Invalid Authorization Header');
        }

        return authorization.split(' ')[1];
    }

}