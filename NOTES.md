

## Setting up Prisma

 1. npm i prisma
 2. npx prisma init --datasource-provider sqlite
 3. Create model in /prisma/schema.prisma
    https://www.prisma.io/docs/orm/prisma-schema 
 4. npx prisma migrate dev 
 5. Create prisma client /src/db/index.ts