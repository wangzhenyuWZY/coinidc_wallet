<template>
	<div class="info-span04" style="color: #333333;position:absolute;z-index:999;top:40%;">
		中奖号码：
		<div style="vertical-align: middle;display: inline-block;">
			<div class="openNumber" v-for="(item, index) in awardCode">
				<div class="num mui-text-center">
					<div class="span value">
						<transition name="down-up-translate-fade">
							<div :key="item.value">{{item.value}}</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'numberRolling',
		data () {
			return {
				interval: null,
				interval_one: null,
				interval_two: null,
				awardCode: [
					{name: 'oneDigit', value: '?'},
					{name: 'tenDigit', value: '?'},
					{name: 'hundredsDigit', value: '?'}
				],
			}
		},
		props:{
			
        },
        created(){
            this.start()
        },
		// 开奖效果方法
		methods: {
			start() {
				var _this = this;
				if (!this.interval) {
					let i = 0
					this.interval = setInterval(function() {
						_this.awardCode[0].value = ++i <= 9 ? i : (i=-1,++i)
					}, 3000)
				}
			},
			end(i) {
				this.awardCode[0].value = i;
				this.show = !this.show
				clearInterval(this.interval)
				this.interval = null
			},
			start_one() {
				var _this = this;
				if (!this.interval_one) {
					let j = 0
					this.interval_one = setInterval(function() {
						_this.awardCode[1].value = ++j <= 9 ? j : (j=-1,++j)
					}, 100)
				}
			},
			end_one(j) {
				this.awardCode[1].value = j;
				clearInterval(this.interval_one)
				this.interval_one = null
			},
			start_two() {
				this.show_two = !this.show_two
				var _this = this;
				let k = 0
				if (!this.interval_two) {
					this.interval_two = setInterval(function() {
						// _this.k = Math.floor(Math.random() * 10);
						// if (k < 10) {
						// 	_this.awardCode[2].value = k++;
						// } else {
						// 	k = 0
						// 	_this.awardCode[2].value = k++;
						// }
						_this.awardCode[2].value = ++k <= 9 ? k : (k=-1,++k)
					}, 100)
				}
			},
			end_two(k) {
				this.awardCode[2].value = k;
				this.show_two = !this.show_two
				clearInterval(this.interval_two)
				this.interval_two = null
			},
			prizeNumber(code) {
				this.awardCode[0].value = code.substr(0,1)
				this.awardCode[1].value = code.substr(1,1)
				this.awardCode[2].value = code.substr(2,1)
			},
		},
		beforeDestroy: function() {
			if(this.interval){
			  clearInterval(this.interval)
			}
			if(this.interval_one){
			  clearInterval(this.interval_one)
			}
			if(this.interval_two){
			  clearInterval(this.interval_two)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.openNumber {
		display: inline-block;
		width: vw(52);
		height: vw(52);
		padding-right: vw(36);
		.num {
			width: vw(52);
			height: vw(52);
			overflow: hidden;
			.span {
				color: #fff;
				width: vw(52);
				height: vw(52);
				font-weight: bold;
				float: left;
				.span div {
					text-align: center;
				}
			}
			.down-up-translate-fade-enter-active,
			.down-up-translate-fade-leave-active {
				transition: all 1s;
				-webkit-transition: all 1s;
				-moz-transition: all 1s;
				-o-transition: all 1s;
			}
			.down-up-translate-fade-enter,
			.down-up-translate-fade-leave-active {
				opacity: 1;
			}
			.down-up-translate-fade-leave-active {
				transform: translateY(-50px);
				-webkit-transform: translateY(-50px);
				-moz-transform: translateY(-50px);
				-o-transform: translateY(-50px);
			}
			.value {
				background: #000;
				background-size: 100% 100%;
				width: vw(52);
				height: vw(52);
				line-height: vw(52);
				font-size: 22px;
				font-weight: bold;
			}
		}
	}
</style>