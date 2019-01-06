import { combineReducers } from 'redux'
import { marketprops } from './marketprops'
import { markets } from './markets'
import { reduce as mqtt } from './mqtt'
import { view } from './view'
import { orders } from './orders'
import { reduce as fills } from './fills'
import { filterMenus } from './filterMenu'
import { reduce as wallets } from './wallets'
import { reduce as md } from './md'
import { reduce as session } from './session'

const rootReducer = combineReducers({
  marketprops,
  markets,
  md,
  mqtt,
  view,
  orders,
  fills,
  wallets,
  filterMenus,
  session,
})

export default rootReducer
