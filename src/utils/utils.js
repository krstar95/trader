import { decode } from 'base64-arraybuffer'
import { Big } from 'big.js'
import { markets } from '../protobufs'

export const decodeProtobuf = (protobuf_obj, protobuf_base64) => {
  let b = decode(protobuf_base64)
  let u8 = new Uint8Array(b)
  return protobuf_obj.decode(u8)
}

// Strip away the Protobuf settable-null px or sz structure
// returning its numeric value or null so that other nullable operators
// may be used with less code girth.
// 
export const v_ = val =>
  val ? ('number' == typeof val ? val : (val.hasOwnProperty('val') ? val.val : null)) : null

export const pv2f = (val, market) =>
  val / 10 ** market.quote_asset.decimals

export const sv2f = (val, market) =>
  val / 10 ** market.base_asset.decimals

// format a nullable value
//
export const formatAsset = (val, asset, truncate=false) =>
val == null ? '' : (truncate ? Big(val) / Big(10**(asset.decimals - asset.decimals_min)) : Big(val) / Big(10**asset.decimals))

// add nullable values
//
export const add = (v1, v2) =>
  (v1 == null || v2 == null) ? null : v1 + v2

// subtract nullable values
//
export const sub = (v1, v2) =>
  (v1 == null || v2 == null) ? null : v1 - v2

// divide nullable values
//
export const div = (v1, v2) =>
  (v1 == null || v2 == null) ? null : v1 / v2

// given market fields, subtract field2 from field1
//
export const mfsub = (market, field1, field2) => {
  if (!market) {
    return null
  }
  let f1 = market.quote[field1]
  let f2 = market.quote[field2]
  if (f1 &&
      f2 &&
      f1.hasOwnProperty('val') &&
      f2.hasOwnProperty('val')) {
    return f1.val - f2.val
  }
  else {
    return null
  }
}

// given market field, return its value
//
export const mfv = (market, field) => {
  if (!market) {
    return null
  }
  let f = market.quote[field]
  return f && f.hasOwnProperty('val') ? f.val : null
}

// given market value, format price
//
export const mvpx = (market, val) =>
  market ? formatAsset(val, market.quote_asset) : ''

// given market field, format price
//
export const mfpx = (market, field) => {
  if (!market) {
    return ''
  }
  let f = market.quote[field]
  return f && f.hasOwnProperty('val') ? formatAsset(f.val, market.quote_asset) : ''
}

// given market value, format size
//
export const mvsz = (market, val) =>
  market ? formatAsset(val, market.base_asset) : ''

// given market field, format size
//
export const mfsz = (market, field) => {
  if (!market) {
    return ''
  }
  let f = market.quote[field]
  return f && f.hasOwnProperty('val') ? formatAsset(f.val, market.base_asset) : ''
}

export const orderStatusCodeLabel = code => {
  switch (code) {
  default:
    return 'UNKNOWN'
  case markets.OrderStatusCode.OS_NEW:
    return 'NEW'
  case markets.OrderStatusCode.OS_PENDING:
    return 'PENDING'
  case markets.OrderStatusCode.OS_REJECTED:
    return 'REJECTED'
  case markets.OrderStatusCode.OS_OPEN:
    return 'OPEN'
  case markets.OrderStatusCode.OS_PARTIAL_FILL:
    return 'PARTIAL_FILL'
  case markets.OrderStatusCode.OS_FILLED:
    return 'FILLED'
  case markets.OrderStatusCode.OS_CANCELED:
    return 'CANCELED'
  }
}

export const orderStatusCodeShortLabel = code => {
  switch (code) {
  default:
    return '?'
  case markets.OrderStatusCode.OS_NEW:
    return 'N'
  case markets.OrderStatusCode.OS_PENDING:
    return 'P'
  case markets.OrderStatusCode.OS_REJECTED:
    return 'R'
  case markets.OrderStatusCode.OS_OPEN:
    return 'O'
  case markets.OrderStatusCode.OS_PARTIAL_FILL:
    return 'PF'
  case markets.OrderStatusCode.OS_FILLED:
    return 'F'
  case markets.OrderStatusCode.OS_CANCELED:
    return 'X'
  }
}

export const cancelStatusCodeLabel = code => {
  switch (code) {
  default:
    return 'UNKNOWN'
  case markets.CancelStatusCode.CS_NEW:
    return 'SENT'
  case markets.CancelStatusCode.CS_PENDING:
    return 'PENDING'
  case markets.CancelStatusCode.CS_ACCEPTED:
    return 'ACCEPTED'
  case markets.CancelStatusCode.CS_REJECTED:
    return 'REJECTED'
  }
}