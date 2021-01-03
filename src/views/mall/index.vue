<template>
  <div class="container">
    <alert1 :show='show' label="玩法说明" @close="show = false">
      <div class="ct_cneter" v-html="playWayDetail">
      </div>
    </alert1>
    <alert1 :show='show2' label="公告" @close="show2 = false">
      <div class="announcement" @click.stop.prevent>
        <van-list
          v-model="loading1"
          :finished="finished1"
          finished-text="没有更多了"
          @load="getNoticeList"
           class="an1"
        >
          <van-cell v-for="(item,index) in noticeList" :key="index" class="an1li" @click="getNoticeDetail(item)">
            <p>{{item.createTime}}</p>
            <p>{{item.titleHk}}</p>
          </van-cell>
        </van-list>
      </div>
    </alert1>
    <alert2 :show='show6' label="公告详情" @close="show6 = false" :mall="true" @closeback="show6 = false; show2= true;">
      <div class="ct_ditile">
        <div>{{noticeDetail.titleHk}}</div>
        <p>
          {{noticeDetail.detail}}
          
        </p>

      </div>
    </alert2>
    <!-- 我的收益 -->
    <alert1 :show='show3' label="收益" @close="show3 = false">
      <div class="announcement announcement2">
        <div class="accets">
          <p>{{homeInfo.idctBalance}} <span>IDCT</span></p>
          <p>≈ {{homeInfo.convertUsdtBalance}} USDT</p>
        </div>
        <div class="btns m_top20" @click="getWithdrawList">提币</div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getIncomeList"
           class="an2 m_top20"
        >
          <van-cell v-for="(item,index) in incomeList" :key="index" class="an2li">
            <p>{{item.createTime}}</p>
            <p>1.您的猫头鹰共创{{item.owlIncome}} IDCT收益</p>
            <p>2.您的猫头鹰子民共纳税 {{item.taxIncome}} IDCT</p>
          </van-cell>
        </van-list>
      </div>
    </alert1>
    <alert1 :show='show4' label="我的好友" @close="show4 = false">
      <div class="announcement friend">
        <van-list
          v-model="loading3"
          :finished="finished3"
          finished-text="没有更多了"
          @load="getMyFriends"
           class="friendul"
        >
          <van-cell v-for="(item,index) in friendList" :key="index" class="friendli">
            <div> <img :src="item.portrait" alt=""></div>
            <div>
              <p>{{item.name}}</p>
              <p>{{item.highestTitle}}</p>
            </div>
          </van-cell>
        </van-list>
      </div>
    </alert1>
    <mallmodel :show='show5' label="商城" @close="show5 = false" :mall="true" :hide="true">
      <div class="malltop">
        <div class="people-container" v-show="mallDetail.level==0">
          <people  :defaultBranch="false" :showShining='true' :showHealth="false">
            <div class="scene-branch-4"></div>
          </people>
        </div>
        <div class="general-container" v-show="mallDetail.level==1">
          <general  :defaultBranch="false" :showShining='true' :showHealth="false">
            <div class="scene-branch-6"></div>
          </general>
        </div>
        <div class="captain-container" v-show="mallDetail.level==2">
          <captain :defaultBranch="false" :showShining='true' :showHealth="false">
            <div class="scene-branch-3"></div>
          </captain>
        </div>
        <div class="commander-container" v-show="mallDetail.level==3">
          <commander  :defaultBranch="false" :showShining='true' :showHealth="false">
            <div class="scene-branch-5"></div>
          </commander>
        </div>
        <div class="wizard-container" v-show="mallDetail.level==4">
          <wizard  :defaultBranch="false" :showShining='true' :showHealth="false">
            <div class="scene-branch-7"></div>
          </wizard>
        </div>
        <div class="guard-container" v-show="mallDetail.level==5">
          <guard :defaultBranch="false" :showShining='true' :showHealth="false">
            <div class="scene-branch"></div>
          </guard>
        </div>
        <div class="king-container" v-show="mallDetail.level==6">
          <king :defaultBranch="false" :showShining='true' :showHealth="false" >
          </king>
        </div>
      </div>
      <div class="mall">
        <div class="scoll">
          <ul class="mallul">
            <li class="mallli" v-for="(item,index) in mallPlace " :key="index" @click="setIndex(item,index)">
              <div :class="toindex == index?'malllibg':''">
                <img :src="item.portrait" width="100%">
              </div>
            </li>
          </ul>
        </div>
        <div class="mall_dtail">
          <div class="dt_lt">
            <p>{{mallDetail.name}}<span>{{mallDetail.usdtPrice}}<span>IDCT</span></span></p>
            <p>{{mallDetail.summary}}</p>
          </div>
          <div class="dt_rg" v-show="mallDetail.buyType!=='none'">
            <div class="btns">
              <div @click="mallDetail.buyType=='buy'?show55=true:show77=true;show5=false">{{mallDetail.buyType=='buy'?'领养':'抽奖'}}</div>
            </div>
          </div>
        </div>
      </div>
    </mallmodel>
    <alert2 :show='show55' label="商城" @close="show55 = false" @closeback="show55 = false; show5= true;">

      <div class="mall2">
        <div class="ditals_bg">
          <div class="dital2">
            <div class="imgs"> <img :src="mallDetail.portrait" alt=""> </div>
            <p class="weib">{{mallDetail.name}}</p>
            <p class="linwe">{{mallDetail.describe}}</p>
          </div>
        </div>

        <div class="btn_slet"><img src="../../assets/btn_unselect.svg" alt=""><span class="seta">{{mallDetail.usdtPrice}} IDCT</span><span class="seta1">(余额：{{usdtBalance}}
            IDCT)</span> </div>
        <div class="btns" @click="checkAppreve">{{isApproved?'确定支付':'授权'}}</div>
      </div>
    </alert2>
    <alert2 :show='show56' label="密码" @close="show56 = false" @closeback="show56 = false;">
      <div class="mall2">
        <div class="ditals_bg">
          <div class="dital2" style="border-radius:0;box-shadow:none;">
            <div class="willt_pwd">昵称</div>
            <div class="inputs"><input v-model="mallName" placeholder="请为爱宠取个名字"></div>
          </div>
          <div class="dital2" style="padding-top:0;border-radius:0;box-shadow:none;">
            <div class="willt_pwd">钱包密码</div>
            <div class="inputs"><input type="password" v-model="password" placeholder="请输入钱包密码"></div>
          </div>
        </div>
        <div class="btns btnst" @click="createOrder">确定支付</div>
      </div>
    </alert2>

    <!-- <alert2 :show='show77' label="商城" @close="show77= false" :mall="true" @closeback="show77 = false; show56= true;">
      <div class="mall3" @click.stop.prevent>
        <div class="mall_center">
          <div class="imgs">
            <img src="../../assets/mall6.svg" alt="">
            <img src="../../assets/mall6.svg" alt="">
          </div>
          <div class="mall3_body">
            <div class=relad>
              <div class="re_list">
                <div class="re_img"> <img src="@/assets/mall.jpg" alt=""> </div>
                <div class="re_img"> <img src="@/assets/mall.jpg" alt=""> </div>
                <div class="re_img"> <img src="@/assets/mall.jpg" alt=""> </div>
              </div>
              <div class="hends">
                <div class="hend_top"></div>
                <div class="hend_b"></div>
              </div>
            </div>
          </div>
          <div class="imgs">
            <img src="../../assets/mall6.svg" alt="">
            <img src="../../assets/mall6.svg" alt="">
          </div>
        </div>
        <div class="mall3btn">
          <div @click="doDraw">立即抽奖</div>
        </div>
      </div>
    </alert2> -->
    <alert2 :show='show7' label="系统提示" @close="show7= false" :mall="false" :hideback="true">
      <div class="styme_model" @click.stop.prevent>
        <div class="stemes">
          <div class="img">
            <img src="../../assets/acctove.svg" alt="">
          </div>
          <p>金币不足</p>
          <p>可以看广告获取更多金币哦！</p>
        </div>
        <div class="btns btnst" @click="getFeecoin">确定</div>
      </div>
    </alert2>
    <alert2 :show='show8' label="提币" @close="show8= false" :mall="false" :hideback="true">
      <div class="announcement announcement2">
        <div class="accets">
          <p>{{homeInfo.idctBalance}} <span>IDCT</span></p>
          <p>≈ {{homeInfo.convertUsdtBalance}} USDT</p>
        </div>
        <div class="ditals_bg">
          <div class="dital2">
            <div class="willt_pwd" style="padding-top:10px;">提币数量</div>
            <div class="inputs" style="padding-bottom:10px;"><input type="number" v-model="withdrawNum" placeholder="最低提202 IDCT"></div>
          </div>
        </div>
        <div class="btns btnst" @click="doWithdraw">提币</div>
        <div class="tipbox">
          <h2>注</h2>
          <p>1.首次提币限额为价值2 USDT的 IDCT起</p>
          <p>2.第二次提币限额为价值10 USDT的 IDCT起</p>
          <p>3.第三次提币限额为价值20 USDT的 IDCT起</p>
        </div>
        <div class="widthrawList">
          <div class="widthrawBar">
            <van-list
              v-model="loading2"
              :finished="finished2"
              finished-text="没有更多了"
              @load="getWithdrawList"
              class="an11"
            >
              <van-cell v-for="(item,index) in withdrawList" :key="index" class="an1li" @click="getNoticeDetail(item)">
                <p>{{item.amount}} IDCT<span>{{item.createTime}}</span></p>
              </van-cell>
            </van-list>
          </div>
        </div>
      </div>
    </alert2>
    <scene :mallList='mallList'>
      <div class="ps_list">
        <div class="play " @click="checkPlayWay"> <img src="../../assets/play.svg" alt=""> <span class="play_size">玩法</span> </div>
        <div class="play play1" @click="getNoticeList"> <img src="../../assets/announcement.svg" alt=""> <span
                class="play_size p_announcement">公告</span><a class="num" v-show="homeInfo.unReadNoticeCount">{{homeInfo.unReadNoticeCount}}</a> </div>
        <div class="play play1 " @click="getPalaceOwls"> <img src="../../assets/mall.svg" alt=""> <span class="play_size p_mall">商城</span> </div>
        <div class="play play1 " @click="getIncomeList"> <img src="../../assets/earnings.svg" alt=""> <span class="play_size p_earnings">收益</span>
        </div>
      </div>
      <div class="ps_nav">
        <div class="play " @click="getMyFriends"> <img src="../../assets/haoyou.svg" alt=""> <span class="play_size">好友</span> </div>
        <div class="play1 " @click="feeGold">
          <div class="ceter_img">{{homeInfo.goldBalance}}</div> <span class="play_size">免费赚金币</span>
        </div>
        <div class="play " @click="feedOwls"> <img src="../../assets/weiyang.svg" alt=""> <span class="play_size play_sizec">一键喂养</span> </div>
      </div>
    </scene>
    <coinsRolling :show="isAddGold" @close="isAddGold=false" class="coinsroll"></coinsRolling>
    <chouJing :show='show77' @closepop='show77=false;show5=true' @notGold='show7=true;show77=false' @drawcode='getDrawCode' :drawNum='mallDetail.level'></chouJing>
  </div>
</template>

<script>
import axios from 'axios'
const TronWeb = require('tronweb');
import bigNumber from 'bignumber.js'
import { getStore, objIsNull } from "@/config/utils";
import alert1 from './globelModel'
import alert2 from './globelModel2'
import scene from '@/components/scene'
import mallmodel from './mallModel'
import contracts from '@/api/contracts'
import {verifyZjadReward,withdrawIncome,getdraw,payOwlOrder,queryMyOwlList,feedMyOwls,getIndexInfo,queryMyFriends,queryPalaceOwls,queryIncomeList,queryNoticeList,readNoticeContent,createBuyOwlOrder,getPlayWay,queryWithdrawList,queryWalletList} from '@/api/user'
import people from '@/components/people.vue'
import wizard from '@/components/wizard.vue'
import general from '@/components/general.vue'
import commander from '@/components/commander.vue'
import captain from '@/components/captain.vue'
import guard from '@/components/guard.vue'
import king from '@/components/king.vue'
import coinsRolling from '@/components/coinsRolling'
import { Notify } from 'vant';
import { List } from 'vant'
import chouJing from './shouJing'
export default {
  components: {
    alert1,
    scene,
    alert2,
    mallmodel,
    people,
    wizard,
    general,
    commander,
    captain,
    guard,
    king,
    coinsRolling,
    chouJing
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show55: false,
      show6: false,
      show56: false,
      toindex: 0,
      show7: false,
      show77: false,
      show8:false,
      mallList:[],
      friendList:[],
      homeInfo:{},
      mallPlace:[],
      mallDetail:[],
      incomeList:[],
      noticeList:[],
      noticeDetail:{},
      orderDetail:{},
      playWayDetail:'',
      approvedBalance:0,
      usdtBalance:0,
      isApproved:false,
      withdrawList:[],
      idctPrice:0,
      drawCode:'',
      withdrawNum:'',
      password:'',
      mallName:'',
      loading: false,
      finished: false,
      pageNum:0,
      loading1: false,
      finished1: false,
      pageNum1:0,
      loading2: false,
      finished2: false,
      pageNum2:0,
      loading3: false,
      finished3: false,
      pageNum3:0,
      isAddGold:false
    }
  },
  created(){
    // if(!window.tronWeb){
    //   this.getTronWeb()
    // }else{
    //   this.allowance()
    //   this.getUsdtBalance()
    // }
    this.getHomeInfo()
    this.getMyOwlList()
  },
  methods: {
    getTronWeb(){
      let that = this
      let walletItem = getStore("walletItem");
      let privateKey = ''
      if (!objIsNull(walletItem)) {
        walletItem = JSON.parse(walletItem)
        privateKey = walletItem.wallet.privateKey
      }
      const fullNode = 'https://api.trongrid.io';
      const solidityNode = 'https://api.trongrid.io';
      const eventServer = 'https://api.trongrid.io';
      window.tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)
      if(window.tronWeb){
        window.tronWeb.setAddress(window.tronWeb.defaultAddress.base58)
        that.allowance()
        that.getUsdtBalance()
      }
    },
    getDrawCode(code){
      this.show77 = false
      this.show5 = true
      this.mallDetail.buyType=='buy'
      this.drawCode = code
    },
    setIndex(item,index) {
      this.toindex = index
      this.mallDetail = item
      if(this.approvedBalance && this.approvedBalance>this.mallDetail.usdtPrice){
        this.isApproved = true
      }else{
        this.isApproved = false
      }
    },
    feeGold(){
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        ZjJSAdSdk.loadAd('zjad_241253',getStore('token'),'videoReward', 1,'rewardVideo');
      }else if(isiOS){
        window.webkit.messageHandlers.loadAd.postMessage({'adid':'33011066','type':'rewardVideo'});
      }
    },
    getMyOwlList(){
      let that = this
      queryMyOwlList().then(res=>{
        if(res.data.resultCode==999999){
          that.mallList = res.data.resultData
        }
        console.log(res)
      })
    },
    feedOwls(){
      let that = this
      
      feedMyOwls().then(res=>{
        if(res.data.resultCode==999999){
          that.getMyOwlList()
          
        }else if(res.data.resultCode==100006){
          that.show7 = true
        }
      })
    },
    getFeecoin(){
      this.show7 = false
      this.feeGold()
    },
    getHomeInfo(){
      let that = this
      getIndexInfo().then(res=>{
        if(res.data.resultCode==999999){
          that.homeInfo = res.data.resultData
        }
      })
    },
    getMyFriends(){
      let that = this
      that.show4 = true
      that.loading3 = true
      queryMyFriends({pageNum:this.pageNum3}).then(res=>{
        that.loading3 = true
        if(that.pageNum3<res.data.pages){
          that.pageNum3++
        }else{
          that.finished3 = true;
        }
        if(res.data.resultCode==999999){
          res.data.resultData.forEach((item,index)=>{
            that.friendList.push(item)  
          })
        }
      })
    },
    doDraw(){
      let that = this
      getdraw({'level':this.mallDetail.level}).then(res=>{
        if(res.data.resultCode==999999){
          if(res.data.resultData.result=='Y'){
            that.drawCode = res.data.resultData
          }
        }
      })
    },
    getPalaceOwls(){
      let that = this
      that.show5 = true
      // this.getMyToken()
      queryPalaceOwls().then(res=>{
        if(res.data.resultCode==999999){
          that.mallPlace = res.data.resultData
          that.mallDetail = res.data.resultData[0]
          if(that.approvedBalance && that.approvedBalance>that.mallDetail.usdtPrice){
            that.isApproved = true
          }else{
            that.isApproved = false
          }
        }
      })
    },
    getIncomeList(){
      let that = this
      that.show3 = true
      that.loading = true
      queryIncomeList({pageNum:this.pageNum}).then(res=>{
        if(res.data.resultCode==999999){
          that.loading = false;
          res.data.resultData.forEach((item,index)=>{
            that.incomeList.push(item)  
          })
          if(that.pageNum<res.data.pages){
            that.pageNum++
          }else{
            that.finished = true;
          }
          
        }
      })
    },
    getNoticeList(){
      let that = this
      that.show2 = true
      that.loading1 = true
      queryNoticeList({pageNum:this.pageNum1}).then(res=>{
        that.loading1 = false;
        if(that.pageNum1<res.data.pages){
          that.pageNum1++
        }else{
          that.finished1 = true;
        }
        if(res.data.resultCode==999999){
          res.data.resultData.forEach((item,index)=>{
            that.noticeList.push(item)  
          })
        }
      })
    },
    getNoticeDetail(item){
      this.show6 = true
      this.show2 = false
      readNoticeContent({noticeId:item.id}).then(res=>{
        if(res.data.resultCode==999999){
          that.noticeDetail = res.data.resultData
        }
      })
    },
    checkPlayWay(){
      let that = this
      this.show = true
      getPlayWay().then(res=>{
        if(res.data.resultCode==999999){
          that.playWayDetail = res.data.resultData
        }
      })
    },
    getWithdrawList(){
      let that = this
      this.show8 = true
      this.show3 = false
      that.loading2 = true
      queryWithdrawList({pageNum:this.pageNum2}).then(res=>{
        that.loading2 = false
        if(that.pageNum2<res.data.pages){
          that.pageNum2++
        }else{
          that.finished2 = true;
        }
        if(res.data.resultCode==999999){
          res.data.resultData.forEach((item,index)=>{
            that.withdrawList.push(item)  
          })
        }
      })
    },
    getMyToken(){
      let that = this
      queryWalletList().then((res)=>{
        if(res.data.resultCode==999999){
          let coinList = res.data.resultData.lstWallet
          coinList.forEach(element => {
            if(element.coinCode.toUpperCase=='IDCT'){
              that.idctPrice = element
            }
          });
        }
      })
    },
    checkAppreve(){
      if(this.isApproved){
        this.show56 = true
        // this.createOrder()
      }else{
        this.approved()
      }
    },
    createOrder(){
      let that = this
      this.show56 = false
      let namePsd = getStore('namepsd')
      namePsd = JSON.parse(namePsd)
      let passwordTrue = namePsd.walletPassword
      if(this.password!==passwordTrue){
        Notify({ type: 'warning', message: '密码不正确' });
        return
      }
      let data = {
        nickName:this.mallName,
        owlLevel:this.mallDetail.level,
        drawCode:this.mallDetail.level>2?this.drawCode:''
      }
      createBuyOwlOrder(data).then(res=>{
        if(res.data.resultCode==999999){
          that.orderDetail = res.data.resultData
          debugger
          if(that.approvedBalance && that.approvedBalance>that.mallDetail.usdtPrice){
            that.sendToken()
          }else{
            that.isApproved = false
          }
        }
      })
    },
    allowance(){
      let that = this
      var functionSelector = 'allowance(address,address)'
      var parameter = [
        { type: 'address', value: window.tronWeb.defaultAddress.base58 },
        { type: 'address', value: contracts.OWL }
      ]
      window.tronWeb.transactionBuilder.triggerConstantContract(contracts.IDC, functionSelector, {}, parameter).then((res) => {
        let hex = ''
        if (res._hex) {
          hex = parseInt(res._hex, 16)
        }
        if (res.remaining) {
          hex = parseInt(res.remaining._hex, 16)
        }
        if (res.constant_result) {
          hex = parseInt(res.constant_result[0], 16)
        }
        that.approvedBalance = hex/Math.pow(10,6)
        console.log('approvedBalance======='+that.approvedBalance)
      })
    },
    async approved(){
      let that = this
      let func = 'approve(address,uint256)'
      let appNum = new bigNumber(100000000000000000000000)
      let params = [
        {'type':'address','value':contracts.OWL},
        {'type':'uint256','value':appNum.toFixed()}
      ]
      let transfer = await window.tronWeb.transactionBuilder.triggerSmartContract(contracts.IDC,func, {},params)
      window.tronWeb.trx.sign(transfer.transaction).then(function(signedTransaction) {
          window.tronWeb.trx
            .sendRawTransaction(signedTransaction)
            .then(function(res) {
              that.isApproved = true
              that.allowance()
            })
        })
    },
    async sendToken(){
      let that = this
      let func = 'buy(uint256,string)'
      let idcnum = new bigNumber(this.mallDetail.usdtPrice)
      // idcnum = idcnum.div(that.orderDetail.idctPrice)
      idcnum = idcnum.times(Math.pow(10,6))
      let params = [
        {'type':'uint256','value':idcnum.toFixed(0)},
        {'type':'string','value':'aaa'}
      ]
      let transfer = await window.tronWeb.transactionBuilder.triggerSmartContract(contracts.OWL,func, {},params)
      window.tronWeb.trx.sign(transfer.transaction).then(function(signedTransaction) {
          window.tronWeb.trx
            .sendRawTransaction(signedTransaction)
            .then(function(res) {
              that.payOrder(res.txid)
            })
        })
    },
    async doWithdraw(){
      let that = this
      if(!this.withdrawNum){
        return
      }
      let data = {
        amount:this.withdrawNum
      }
      withdrawIncome(data).then((res)=>{
        that.show8 = false
        if(res.data.resultCode==999999){
          Notify({ type: 'success', message: res.data.resultDesc });
        }else{
          Notify({ type: 'warning', message: res.data.resultDesc });
        }
      })
    },
    payOrder(txid){
      let that = this
      let data = {
        orderId:that.orderDetail.id,
        txHash:txid
      }
      payOwlOrder(data).then((res)=>{
        that.show55 = false
        if(res.data.resultCode==999999){
          Notify({ type: 'success', message: res.data.resultDesc });
        }else{
          Notify({ type: 'warning', message: res.data.resultDesc });
        }
      })
    },
    async getUsdtBalance(){
      let that = this
      let func = 'balanceOf(address)'
      let params = [{'type':'address','value':window.tronWeb.defaultAddress.base58}]
      window.tronWeb.transactionBuilder.triggerConstantContract(contracts.IDC,func, {},params).then(res=>{
        let balance = parseInt(res.constant_result[0],16)
        that.usdtBalance = balance/Math.pow(10,6)
        console.log('usdtBalance====='+that.usdtBalance)
      })
    },
    zjJSAdSdkCallBack(type,msg) {
        switch (type) {
            case 'onZjAdLoaded':
                alert(1);
                break;
            case 'onZjAdShow':
                alert(2);
                break;
            case 'onZjAdClick':
                alert(3);
                break;
            case 'onZjAdShow':
                alert(4);
                break;
            case 'onZjAdClose':
                alert(5);
                break;
            case 'onZjAdError':
                alert(6);
                break;
            case 'onZjAdVideoCached':
                alert(7);
                ZjJSAdSdk.showAd();
                break;
            case 'onZjAdShowError':
                alert(8);
                break;
            case 'onZjAdVideoComplete':
                alert(9);
                break;
            case 'onZjAdExpose':
                alert(10);
                break;
            case 'onZjAdReward':
                alert("获取奖励");
                this.verifyAdReward(msg);
                break;
        }
    },
    verifyAdReward(transId){
      let that = this
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let device = ''
      if(isAndroid){
        device = 'android'
      }else if(isiOS){
        device = 'ios'
      }
      verifyZjadReward({"device":device,"transId": transId}).then(res=>{
        if(res.data.resultCode==999999){
          that.isAddGold = true
          Notify({ type: 'success', message: res.data.resultDesc });
        }else{
          Notify({ type: 'warning', message: res.data.resultDesc });
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.scene{height:100%;}
ul {
  li {
    width: auto;
    height: auto;
  }
}
.announcement {
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 0 10px;
  padding-top: 34px;
  max-height: 316px;
  overflow: auto;
  .an11{
    height:130px;
    overflow:auto;
  }
  .an1 {
    height:340px;
    overflow-y:scroll;
    .an1li {
      width: auto;
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      margin-bottom: 10px;
      padding: 13px 19px 13px 10px;
      p:nth-child(1) {
        font-size: 12px;
        font-weight: 400;
        color: #8d91ab;
      }
      p:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        color: #303030;
        margin-top: 7px;
      }
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    // background: red;
  }
}
.announcement2 {
  max-height: 530px;
  .accets {
    background: linear-gradient(180deg, #ebedf6 0%, #ffffff 100%);
    border-radius: 5px;
    padding: 25px 0;
    p {
      text-align: center;
    }
    p:nth-child(1) {
      font-size: 30px;
      font-weight: 600;
      color: #303030;
      span {
        font-size: 14px;
        color: #494c61;
      }
    }
    p:nth-child(2) {
      font-size: 12px;
      font-weight: 600;
      color: #8d91ab;
    }
  }
  .an2 {
    min-height: 100px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
    .an2li {
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      padding: 13px 0 13px 10px;
      margin-top: 10px;
      p {
        font-size: 14px;
        font-weight: 400;
        color: #303030;
      }
      p:nth-child(1) {
        font-size: 12px;
        color: #8d91ab;
      }
      p:nth-child(2) {
        margin-top: 8px;
      }
    }
  }
  .btns {
    height: 50px;
    line-height: 50px;
    background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
  }
}
.friend {
  .friendul {
    height: 280px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .friendli {
      background: #f9fbff;
      box-shadow: 2px 2px 2px 0px #bfc2d8;
      border-radius: 5px;
      display: flex;
      padding: 10px;
      margin-bottom: 10px;
      div:nth-child(1) {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        background: cornflowerblue;
        img {
          width: 40px;
        }
      }
      div:nth-child(2) {
        p {
          font-weight: 400;
        }
        p:nth-child(1) {
          font-size: 14px;
          color: #303030;
        }
        p:nth-child(2) {
          font-size: 12px;
          color: #8d91ab;
          margin-top: 3px;
        }
      }
    }
  }
}
.mall {
  // background: #dadeec;
  // box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  // border-radius: 5px;
  .scoll {
    padding: 10px;
    height: 160px;
    overflow: auto;
  }
  .mallul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 10px 15px;

    .mallli {
      width: 75px;
      height: 75px;
      background: #fff;
      border-radius:5px;
      .malllibg {
        background: #ffb679;
        width: 100%;
        height: 100%;
        img{
          width:70px;
          height:70px;
        }
      }
    }
  }
  .mall_dtail {
    padding: 0 10px;
    display: flex;
    padding-top: 20px;
    padding-bottom: 30px;
    background: #fff;
    .dt_lt {
      flex: 1;
      p {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #494c61;
      }
      p:nth-child(1) {
        font-size: 16px;
        font-weight: 600;
        color: #303030;
        span {
          font-size: 18px;
          color: #e34b4b;
          margin-left: 10px;
          span {
            margin-left: 4px;
            font-size: 10px;
          }
        }
      }
      p:nth-child(2) {
        margin-top: 5px;
      }
    }
    .dt_rg {
      .btns {
        width: 110px;
        height: 40px;
        background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
        border-radius: 21px;
        border: 1px solid #4b56a0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: 104px;
          height: 34px;
          background: linear-gradient(180deg, #a3afff 0%, #6f7cd2 100%);
          border-radius: 17px;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          line-height: 34px;
        }
      }
    }
  }
}
.inputs {
      display: flex;
      margin-top: 10px;
      input {
        flex: 1;
        height: 50px;
        background: #ffffff;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        border: 1px solid #cad5de;
        font-size: 14px;
        font-weight: 400;
        color: #000;
        padding-left: 10px;
        width: auto;
        &::placeholder {
          color: #b6c6d3;
        }
      }
    }
.willt_pwd {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
    }    
.mall2 {
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 25px 10px 10px;
  .ditals_bg {
  }
  .dital2 {
    background: #f9fbff;
    box-shadow: 2px 2px 2px 0px #bfc2d8;
    border-radius: 5px;
    padding: 38px 12px 33px 10px;
    
    
    .imgs {
      text-align: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .weib {
      font-size: 16px;
      font-weight: 600;
      color: #303030;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 5px;
    }
    .linwe {
      font-size: 12px;
      font-weight: 400;
      color: #4f5f7f;
      text-indent: 30px;
    }
  }
  .btn_slet {
    display: flex;
    align-items: center;
    margin: 12px 0;
    img {
      width: 14px;
      height: 14px;
    }
    .seta {
      font-size: 14px;
      font-weight: 600;
      color: #303030;
      margin: 0 10px;
    }
    .seta1 {
      font-size: 12px;
      font-weight: 400;
      color: #8997b3;
    }
  }
  .btns {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
    box-shadow: 2px 2px 0px 0px rgba(224, 225, 255, 0.5);
    border-radius: 6px;
    color: #ffffff;
    border: 1px solid #4b56a0;
    font-size: 16px;
    font-weight: 500;
    &.btnst {
      margin-top: 10px;
    }
  }
}
.mall3 {
  padding-top: 6px;
  .mall_center {
    background: #ffcb02;
    border-radius: 5px;
    .imgs {
      display: flex;
      justify-content: space-between;
      padding: 5px 8px;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  .mall3_body {
    padding: 0 10px;

    .relad {
      padding: 13px;
      background: #ffaa01;
      border-radius: 5px;
      .hends {
        position: absolute;
        top: 90px;
        right: -13px;
        text-align: right;
        .hend_top {
          width: 13px;
          height: 46px;
          background: linear-gradient(90deg, #eda214 0%, #fffe6d 100%);
          border-radius: 4px;
          position: absolute;
          top: -46px;
          left: 14px;
        }
        .hend_b {
          width: 18px;
          height: 37px;
          border-radius: 0 0 6px 0;
          border-bottom: 5px solid #e57223;
          border-right: 5px solid #e57223;
        }
      }

      .re_list {
        background: #de3507;
        border-radius: 5px;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        .re_img {
          img {
            width: 80px;
          }
        }
      }
    }
  }
  .mall3btn {
    margin-top: 18px;
    padding-bottom: 8px;
    div {
      background: url(../../assets/mall3btn.svg) no-repeat;
      background-size: 100% 100%;
      width: 170px;
      height: 42px;
      line-height: 42px;
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
      margin: 0 auto;
    }
  }
}
.ct_cneter {
  padding: 35px 10px 20px;
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #303030;
}
.ps_list {
  position: absolute;
  right: 20px;
  top: 105px;
  z-index: 666;
  .play {
    position: relative;
    height: 40px;
    .num{
      position:absolute;
      top:-5px;
      right:-3px;
      border-radius: 50%;
      text-align:center;
      font-size:12px;
      color:#fff;
      line-height:18px;
      width:18px;
      height:18px;
      background:#ff0000
    }
    &.play1 {
      margin-top: 17px;
    }
    img {
      width: 36px;
      height: 36px;
    }
    .play_size {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 36px;
      height: 16px;
      background: #524ddf;
      border-radius: 8px;
      height: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      line-height: 16px;
      text-align: center;
      &.p_announcement {
        background: #1499ea;
      }
      &.p_mall {
        background: #d33131;
      }
      &.p_earnings {
        background: #eb9130;
      }
    }
  }
}
.ps_nav {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  z-index: 666;
  display: flex;
  justify-content: space-around;
  .play {
    position: relative;
    width: 50px;
    height: 57px;
    img {
      width: 50px;
      height: 50px;
    }
    .play_size {
      position: absolute;
      left: 4px;
      bottom: 0;
      width: 42px;
      height: 16px;
      background: #03346c;
      border-radius: 8px;
      height: 16px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      line-height: 16px;
      text-align: center;
    }
    .play_sizec {
      left: -4px;
      width: 58px;
      background: #a52222;
    }
  }
  .play1 {
    position: relative;
    height: 57px;

    .ceter_img {
      width: 140px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
      background: url('../../assets/jibi.svg') no-repeat;
      background-size: 100% 100%;
    }
    .play_size {
      position: absolute;
      bottom: 0;
      left: 36px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      width: 70px;
      height: 16px;
      background: #e34b4b;
      border-radius: 8px;
      text-align: center;
    }
  }
}
.styme_model {
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 5px;
  padding: 25px 10px 10px;
  .stemes {
    background: #f9fbff;
    box-shadow: 2px 2px 2px 0px #bfc2d8;
    border-radius: 5px;
    padding-bottom: 24px;
    .img {
      text-align: center;
      padding-top: 48px;
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      text-align: center;
    }
  }
  .btns {
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    background: linear-gradient(360deg, #545fa8 0%, #8894e4 100%);
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
  }
}
.ct_ditile {
  height: 240px;
  background: #dadeec;
  box-shadow: 2px 2px 1px 0px rgba(38, 47, 131, 0.61);
  border-radius: 6px;
  overflow: auto;
  padding: 0 10px;
  div {
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #303030;
    text-align: center;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #303030;
  }
}
.widthrawList{
  background: #f9fbff;
  box-shadow: 0.05333rem 0.05333rem 0.05333rem 0 #bfc2d8;
  border-radius: 0.13333rem;
  padding: 0.34667rem 0 0.34667rem 0.26667rem;
  margin-bottom: 0.26667rem;
  margin-top:0.3rem;
  overflow:hidden;
  .widthrawBar{
    height:3rem;
    p{
      font-size: 0.32rem;
      color: #303030;
      font-weight: 400;
      padding-right:0.34667rem;
      line-height:0.6rem;
      span{
        float:right;
        color:#8D91AB;
        font-size:0.3rem;
      }
    }
  }
}
.tipbox{
  padding-top:0.3rem;
  h2{
    font-size:0.32rem;
    color:#8D91AB;
    line-height:100%;
  }
  p{
    font-size:0.32rem;
    color:#303030;
    line-height:0.6rem;
  }
}
.malltop{
      position: fixed;
    top: 22%;
    z-index: 999;
    width: 135px;
    height: 135px;
    left: 32%;
}
.coinsroll{
  position: absolute;
  bottom:50%;
  left:45%;
  width:50px;
  height:50px;
}
</style>
