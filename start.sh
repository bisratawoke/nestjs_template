echo "Stating installation and migration"

npm i

npm i @prisma/client pm2

npx prisma migrate deploy

echo "Finshed migration"

npm run build

npm run start:prod
