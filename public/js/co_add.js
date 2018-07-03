const coAdd = new Vue({
  el: '#add',
  data() {
    return {
      formKey: [{
          key: 'address',
          name: '公司地址'
        },
        {
          key: 'zipcode',
          name: '邮政编码'
        },
        {
          key: 'website',
          name: '网址'
        },
        {
          key: 'email',
          name: '邮件'
        },
        {
          key: 'phone',
          name: '电话'
        },
        {
          key: 'contacter',
          name: '联系人'
        },
        {
          key: 'rem',
          name: '备注'
        }
      ]
    }
  }
})
