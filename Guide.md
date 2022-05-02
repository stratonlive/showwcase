This is a test for Showwcase recruitment !!!

This web app is developed with next JS on Ubuntu OS 20.0, and Node Package Manager (NPM).

Please install Node JS and NPM for this to work on your machine.


Configuration of Application :

Database - Postgresql
Database ORM - Prisma
Database name - showwcase
Database username - showwcase
Database password - showwcase

note: Configure your backend database with requirement above.

command to start database with prisma :

npx prisma init
npx prisma migrate save --showwcase
npx prisma migrate up --showwcase
npx prisma generate


Command to start this application :

npm install
npm run dev -- for development
npm run build -- to build app for production
npm run start -- to start app on production


command to test this application :

npm run test

note: This app unit test is using Jest, Babel, and react Testing Library. We can create unlimited testing as required and desired.





