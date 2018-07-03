let remoteMail = 'http://127.0.0.1:8181'

const sendMail = (data, callback) => {
  $.post(remoteMail + '/send_mail', data, res => {
    callback(res)
  })
}




let content = "<html><head><title></title></head><body><table width=90%><tr><td><p>尊敬的领导您好：</p><p>非常荣幸能够代表我公司与您联系, 上海高鼎是一家多年专做特种柜的国际物流公司。我司拥有20年特种柜行业经验的报价员；拥有专业“高鼎特种柜”平台；拥有实现网络在线询价、报价、订舱、门到门的管家一站式服务。如果您信任高鼎，我们定能让繁杂的进出口业务变成简单的选择题！！</p><p>因此,在未来的道路上让我们携手共进！通过我们的不断努力和追求，一定能够实现互利共赢!</p><p>-----------------------------------------------------------------------------------------------------</p><p>上海高鼎国际物流有限公司</p><p>SHANGHAI GODEN INTERNATIONAL LOGISTICS CO.,LTD.</p><p>高鼎特种柜在线 询价 订舱 平台</p><p>轻松搞定大件国际物流</p><p>-----------------------------------------------------------------------------------------------------</p><p>关于高鼎上海高鼎多年来始终专注特种箱国际物流解决方案，包括地面运输仓储，绑扎加固，港口服务，报关报检，并运输至世界各地。我司具有丰富的重大件操作经验，无论在国内进行重大件陆路运输，还是内陆、海上、海外运送大型设备，我司都能和客户以及船东紧密配合、顺利完成大件设备安全运输和装卸。DAP、DDP海外服务。</p><p>高鼎特种柜“高鼎特种柜”是上海高鼎国际物流有限公司旗下特种柜网站。随着互联网的广泛运用，“高鼎特种柜”将线下特种柜询价、订舱方案、国际物流综合服务与互联网技术相结合。通过高科技技术、专业的服务团队、在线服务平台一站式解决客户特种柜物流解决方案，为客户提供全程出运服务和保障。为客户提供省力、省钱、省时、省心的一站式服务是高鼎矢志不渝地追求目标。</p><p>高鼎特种柜平台，一站式解决您的需求！</p><p>在浏览器里面输入网址：www.goden.cn，选择相应的需求，最后生成一份询价单。如果你比较忙，那么就果断的上传附件，交给高鼎客服帮你生成询价单。</p><img src='http://www.goden.cn/images/ad/1.jpg'> <img src='http://www.goden.cn/images/ad/2.jpg'> <img src='http://www.goden.cn/images/ad/3.jpg'> <img src='http://www.goden.cn/images/ad/4.jpg'> <img src='http://www.goden.cn/images/ad/5.jpg'> <img src='http://www.goden.cn/images/ad/6.jpg'> <img src='http://www.goden.cn/images/ad/7.jpg'><p>高鼎特种柜，轻松搞定大件国际物流!</p><img src='http://www.goden.cn/images/ad/8.png'><p>高鼎节奏 国际领先效率</p><p>- 高鼎特种柜平台24小时在线解决物流方案</p><p>- 二十年以上行业经验客服人员，专业解决难点、最快一小时报价</p><p>因为专业 所以可以</p><p>- 专业绑扎 车辆定位，货物方位随时查</p><p>- DDP、DAP、DDU, 包就位管家式全程跟踪服务</p><p>-----------------------------------------------------------------------------------------------------</p><p>上海高鼎期待与您的合作！</p><p>未来的道路上我们携手共进！</p><p>通过我们的不断努力和追求,</p><p>一定能够实现互利共赢!</p><p>询价网址：http://www.goden.cn</p><p>资深客户经理：杨小姐</p><p>QQ: 1409669848</p><p>Email：jenny@goden.cn</p><p>联系方式：62922093/13774279893</p><p>对于您的浏览我们感激不尽，希望高鼎能给您带来愉快的合作体验！！</p><p>B.rgds</p><p>------------------------------------------------------------------------------------</p><p>上海高鼎国际物流有限公司</p><p>SHANGHAI GODEN INTERNATIONAL LOGISTICS CO.,LTD.</p><p>上海市吴宝路428号B1幢315室</p><p>TEL：86 021 64888008-811</p><p>E-Mail: market@goden.cn</p><p>Website: www.goden.cn</p><p>QQ: 1901565510</p></td></tr></table></body></html>"

$("#submit").click(() => {
  let toUser = $("#email").val()
  let mail = {
    toUser: toUser,
    subject: '变压器物流专家 在线询价 轻松搞定大件物流 期待与您的合作',
    content: content
  }

  console.log(mail)
  sendMail(mail, res => {
    console.log('send mail', res)
  })
})
