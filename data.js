let raw = [[5, 0, 0], [9, 0, 0], [10, 0, 0], [15, 0, 0], [17, 0, 0], [18, 0, 0], [19, 0, 0], [20, 0, 0], [5, 0.25, 0], [9, 0.25, 0], [10, 0.25, 0], [15, 0.25, 0], [17, 0.25, 0], [18, 0.25, 0], [19, 0.25, 0], [20, 0.25, 50], [5, 0.5, 0], [9, 0.5, 0], [10, 0.5, 0], [15, 0.5, 0], [17, 0.5, 0], [18, 0.5, 0], [19, 0.5, 0], [20, 0.5, 46], [5, 0.75, 0], [9, 0.75, 0], [10, 0.75, 0], [15, 0.75, 0], [17, 0.75, 0], [18, 0.75, 0], [19, 0.75, 0], [20, 0.75, 43], [5, 1, 72], [9, 1, 72], [10, 1, 68], [15, 1, 50], [17, 1, 45], [18, 1, 43], [19, 1, 41], [20, 1, 40]]

let data = raw.map(v => { return { model_count: v[0], renderScale: v[1], fps: v[2] }; })

let modelsCounts = [...Array(20)].map((v, i) => i + 1);
let series = modelsCounts.map(modelsCount => {
  let dataEachModelCount = data.filter(v => v.model_count == modelsCount)
  return {
    name: `model ${modelsCount}`,
    data: dataEachModelCount.map(v => { return { x: v.renderScale * 100, y: v.fps } })
  }
})
console.log(series)