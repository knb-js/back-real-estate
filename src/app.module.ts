import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bwcuj4qdqel5jkco6uwp-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u1yg4oy7upkajc3n',
      password: 'Rq58mbodx9VZoT9aUglD',
      database: 'bwcuj4qdqel5jkco6uwp',
      autoLoadEntities: true,
      synchronize: true, // Cambiar a false para producción
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
