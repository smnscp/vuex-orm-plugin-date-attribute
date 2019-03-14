import Model from '@vuex-orm/core/lib/model/Model'
import Mutator from '@vuex-orm/core/lib/attributes/contracts/Mutator'
import Record from '@vuex-orm/core/lib/data/Record'
import Type from '@vuex-orm/core/lib/attributes/types/Type'

export default class DateType extends Type {
  /**
   * Create a new date instance.
   */
  constructor (model: typeof Model, value: Date | null, mutator?: Mutator<Date | null>) {
    /* istanbul ignore next */
    super(model, value, mutator)
  }

  /**
   * Convert given value to the appropriate value for the attribute.
   */
  make (value: any, _parent: Record, key: string): Date | null {
    return this.mutate(this.fix(value), key)
  }

  /**
   * Convert given value to the date.
   */
  fix (value: any): Date | null {
    if (value === null && this.isNullable) {
      return null
    }

    if (value === undefined) {
      return this.value || new Date()
    }

    return new Date(value)
  }
}
