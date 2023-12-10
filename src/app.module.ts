// -- ==============================================   
// --  src\app.module.ts
// --  ==============================================  

import { join } from 'path';  //node van al inicio
import { Module } from '@nestjs/common';   
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';


// -- ==============================================   
// --  filex: src\app.module.ts
// --  ============================================== 




// import { CommonModule } from './common/common.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),
    
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),  //el mismo de tableplus

    PokemonModule, CommonModule,

    // CommonModule,

  ],

})
export class AppModule {}