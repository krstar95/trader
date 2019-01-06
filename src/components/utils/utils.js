



export const assetDecimalRegex =  (decimals) => {

  let regex = "^[0-9]+\\.?"

  for(var i=0; i < decimals; i++){
    regex = regex + "[0-9]?"
  }
  regex = regex + "$"
  return regex
}
