import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bwcuj4qdqel5jkco6uwp-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'u1yg4oy7upkajc3n',
      password: 'Rq58mbodx9VZoT9aUglD',
      database: 'bwcuj4qdqel5jkco6uwp',
      entities: [],
      synchronize: true,
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
