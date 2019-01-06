import { combineEpics } from 'redux-observable'
import { epics as mqtt } from './mqtt'
import { epics as markets } from './markets'
import { epics as orders } from './orders.js'
import { epics as wallets } from './wallets'
import { epics as fills } from './fills'
import { epics as md } from './md'
import { epics as view } from './view'
import { epics as audio } from './audio'
import { epics as session } from './session'

export const rootEpic = combineEpics(
  ...view,
  ...md,
  ...mqtt,
  ...markets,
  ...orders,
  ...wallets,
  ...fills,
  ...audio,
  ...session,
)
