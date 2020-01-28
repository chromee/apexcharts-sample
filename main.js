let url = 'https://script.google.com/a/virtualcast.jp/macros/s/AKfycbxbe_dx4fbbMgkOViqhlVIPitm3qs4E-uy5iwR9tOw/dev'
$.ajax({
  type: 'GET',
  url: url,
  dataType: 'jsonp',
  success: raw => {
    let data = raw.map(v => { return { model_count: v[0], renderScale: v[1], fps: v[2] }; })

    let modelsCounts = [...Array(20)].map((v, i) => i + 1);
    let series = modelsCounts.map(modelsCount => {
      let dataEachModelCount = data.filter(v => v.model_count == modelsCount)
      return {
        name: `model ${modelsCount}`,
        data: dataEachModelCount.map(v => { return { x: v.renderScale * 100, y: v.fps } })
      }
    })
    var chart = new ApexCharts(document.querySelector("#chart"), options(series));
    chart.render();
  }
});

