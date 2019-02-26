import Mutator from '@vuex-orm/core/lib/attributes/contracts/Mutator'
import DateType from './attributes/types/DateType'

export default {
  install (components) {
    components.Model.date = function (value: any, mutator?: Mutator<Date | null>): DateType {
      return new DateType(this, value, mutator)
    }
  }
}
