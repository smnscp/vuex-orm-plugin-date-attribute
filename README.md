# Vuex ORM Plugin: Date Attribute

## Installation
``` js
import VuexORM from '@vuex-orm/core'
import datePlugin from 'vuex-orm-plugin-date-attribute'

VuexORM.use(datePlugin)

```

## Usage in Model Definition

``` js
// models/User.js
import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      active: this.boolean(false),
      // Use plugged-in attribute creator Model.date() to create a field whose value will be a Date object.
      last_login: this.date(null),
      login_count: this.number(0),
    }
  }
}
```
