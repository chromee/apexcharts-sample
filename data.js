let raw = [[20, 1, 40], [20, 0.75, 43], [20, 0.5, 46], [20, 0.25, 50], [19, 1, 41], [18, 1, 43], [17, 1, 45], [15, 1, 50], [10, 1, 68], [9, 1, 72], [5, 1, 72], [19, 0, 72], [18, 0, 72], [17, 0, 72], [15, 0, 72], [10, 0, 72], [9, 0, 72], [5, 0, 72]];
let data = raw.map(v => { return { model_count: v[0], renderScale: v[1], fps: v[2] }; })

let modelsCounts = [...Array(20)].map((v, i) => i + 1);
let series = modelsCounts.map(modelsCount => {
  let dataEachModelCount = data.filter(v => v.model_count == modelsCount)
  return {
    name: `model ${modelsCount}`,
    data: dataEachModelCount.map(v => { return { x: v.renderScale * 100, y: `${v.fps}fps` } })
  }
})
console.log(series)