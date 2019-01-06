// wrap d3-scale objects to override the default tick count
//
export default function wrap(s, defaultTickCount) {
  const { ticks, tickFormat, nice, domain, range, paddingInner, paddingOuter, copy } = s

  s.copy = () => wrap(copy(), defaultTickCount)
  s.ticks = count => ticks(count ? count : defaultTickCount)
  s.tickFormat = (count, specifier) => tickFormat(count ? count : defaultTickCount, specifier)
  s.nice = count => {
    nice(count ? count : defaultTickCount)
    return s
  }
  s.domain = d => {
    if (d) {
      domain(d)
      return s
    }
    else {
      return domain()
    } 
  }
  s.range = r => {
    if (r) {
      range(r)
      return s
    }
    else {
      return range()
    } 
  }
  s.paddingInner = padding => {
    paddingInner(padding)
    return s
  }
  s.paddingOuter = padding => {
    paddingOuter(padding)
    return s
  }

  return s
}
