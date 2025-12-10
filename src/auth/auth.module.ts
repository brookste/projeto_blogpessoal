import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { UsuarioModule } from "../usuario/usuario.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { LocalStrategy } from "./strategy/local.strategy";
import { jwtConstants } from "./constants/constats";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [ // Outros módulos que esse móulo precisa para funcionar
        forwardRef(() => UsuarioModule), // forwardRef = referência circular. Um módulo depende do outro para existir
        PassportModule, // ativa a biblioteca Passaport que é usada para estratégias de login
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' }, // Define que o teken expira em 1h
        }),
    ],
    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    exports: [Bcrypt],
})
export class AuthModule {};