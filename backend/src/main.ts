import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    process.on('SIGINT', async () => {
        console.log('Nest Js server shutting down...');
        await app.close();
        console.log('Nest Js server sucessfully closed');
        process.exit(0);
    });
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );
    await app.listen(3000);
}
bootstrap();
