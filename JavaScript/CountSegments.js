const countSegments=s=>s.split((/\s+/)).filter(el=>el).length

console.log(countSegments('Hello, my name is John.'))