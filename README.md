# Vídeos

passos realizados

**create package.json**

```
  yarn init -y
```

**install dependencies**

```
  yarn add express
```

**install dependencies dev**

```
  yarn add typescript ts-node-dev @types/express -D
```

**init archive config typescript**

```
  yarn tsc --init
```

**install dependencies Postgress**

```
yarn add typeorm reflect-metadata pg
```

**create migration**

```
yarn typeorm migration:create -n CreateCategories
```

**run migration**

_requisitos_

> Necessário postgress instalado,
> Drivers postgress configurado,
> Superuser com login&senha adicionado e configurado,
> Banco de dados code_drops_crud criado.

```
yarn typeorm migration:run
```

Code Drops & Rockeatseat
https://www.youtube.com/watch?v=9AO2hZJsHrs
