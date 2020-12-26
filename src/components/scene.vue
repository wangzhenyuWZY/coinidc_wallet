<template>
  <div class="scene">
    <div class="moon">
      <img src="themes/images/scene/moon.svg" alt="">
    </div>
    <div class="branch-1"></div>
    <div class="branch-2"></div>
    <div class="branch-3"></div>
    <div class="branch-4"></div>
    <div class="branch-5"></div>
    <div class="branch-6"></div>
    <div class="branch-7"></div>
    <!-- <div class="cartoon-left"></div>
    <div class="cartoon-right"></div>
    <div class="grass"></div>
    <div class="broadleaf"></div> -->
    <div class=""></div>
    <div class="people-container">
      <people></people>
    </div>
    <div class="general-container">
      <general></general>
    </div>
    <div class="captain-container">
      <captain></captain>
    </div>
    <div class="commander-container">
      <commander></commander>
    </div>
    <div class="wizard-container">
      <wizard></wizard>
    </div>
    <div class="guard-container">
      <guard></guard>
    </div>
    <div class="coins-container">
        <coins-rolling></coins-rolling>
    </div>
    <slot>
    </slot>
  </div>
</template>
<script>
import people from './people.vue'
import wizard from './wizard.vue'
import general from './general.vue'
import commander from './commander.vue'
import captain from './captain.vue'
import guard from './guard.vue'
import coinsRolling from './coinsRolling.vue'
export default {
  name: 'Scene',
  data() {
    return {

    }
  },
  components: {
    people,
    wizard,
    general,
    commander,
    captain,
    guard,
    coinsRolling
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang="less">
@import '../themes/style/scene.less';

.people-container {
  position: absolute;
  top: 220px;
  left: 50px;
  width: 100px;
  height: 100px;
}

.wizard-container {
  position: absolute;
  top: 420px;
  right: 70px;
  width: 100px;
  height: 100px;
}

.general-container {
  position: absolute;
  top: 370px;
  left: 60px;
  width: 100px;
  height: 100px;
}

.captain-container {
  position: absolute;
  top: 130px;
  right: 70px;
  width: 100px;
  height: 100px;
}

.commander-container {
  position: absolute;
  top: 270px;
  right: 70px;
  width: 100px;
  height: 100px;
}

.guard-container {
  position: absolute;
  top: 550px;
  left: 70px;
  width: 100px;
  height: 100px;
}

.coins-container {
    position: absolute;
    top: 550px;
    left: 250px;
    width: 30px;
    height: 30px;
  }
</style>
