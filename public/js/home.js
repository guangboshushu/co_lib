function prevPage(p, key) {
  let page = p -1
  let url = '/?page=' + p + '&key=' + key
  location.href = url
}

function nextPage(p, key) {
  let url = '/?page=' + p + '&key=' + key
  location.href = url
}

$('#Go').click(function() {
  let key = $('#key').val()
  let currentPage =  $("input:hidden[name='currentPage']").val()
  let url = '/?page=' + currentPage + '&key=' + key
  location.href = url
})

const goCo = (id) => {
  window.open('/co?id=' + id)
}
