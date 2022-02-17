# Vuex ORM Plugin: Date Attribute

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License](https://img.shields.io/npm/l/vuex-orm-plugin-date-attribute.svg)](https://github.com/smnscp/vuex-orm-plugin-date-attribute/blob/master/LICENSE.md)

## :warning: State of This Package

I wrote this little Vuex ORM plugin in 2019 for a project I was working on back then.

Meanwhile, the packaging setup got reeeally dated. :grimacing: I won’t have the time to maintain it until I start my next Vue project. So, I decided to remove all the outdated dependencies (`devDependencies` section, `dist` files, `package-lock.json`).

The actual code ([`/src/*`](./src/)) should™ still work (it’s not rocket science, anyways). But one would have to integrate it in a working bundling environment.

## Installation

```js
import VuexORM from "@vuex-orm/core";
import datePlugin from "vuex-orm-plugin-date-attribute";

VuexORM.use(datePlugin);
```

## Usage in Model Definition

```js
// models/User.js
import { Model } from "@vuex-orm/core";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.increment(),
      name: this.string(""),
      active: this.boolean(false),
      // Use plugged-in attribute creator Model.date() to create a field whose value will be a Date object.
      last_login: this.date(null),
      login_count: this.number(0),
    };
  }
}
```
