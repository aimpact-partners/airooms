# How to use the models

## Item

### Define new user

```ts
var { User } = await bimport("@aimpact/airooms/models");
var item = new User();
await item.save({ username: "firstuser", email: "firstuser@domain.com" });
```

### Load DB user

```ts
var { User } = await bimport("@aimpact/airooms/models");
var item = new User(id);
await item.load();
```

## Collection

```ts
var { Users } = await bimport("@aimpact/airooms/models");
var collection = new Users();
await collection.load();
collection.items;
```
