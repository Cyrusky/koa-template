# Koa2 Server Template

This is a template for a Koa2 server with a few useful features:

- [x] ES6/7 support
- [x] ESLint
- [x] Prettier
- [x] Nodemon
- [x] Log4js
- [x] Koa-router
- [x] Full Typescript support
- [x] TypeDI support
- [x] JWT authentication
- [ ] ESBuild
- [ ] TypeORM support
- [ ] GraphQL & Prisma Support
- [ ] Joi

# Notice

> If you change the JWT part in the config file, the auth token will be expired immediately.

## To generate a key pair

```shell
$ openssl     
OpenSSL> genrsa -out rsa_private_key.pem 2048
OpenSSL> rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem
```
