<template>
  <div class="scene">
    <div class="meteor" ref="meteor">
    </div>
    <div class="moon">
      <img src="themes/images/scene/moon.svg" alt="">
    </div>
    <div class="branch-1"></div>
    <div class="branch-2"></div>
    <!-- <div class="branch-3"></div>
    <div class="branch-4"></div>
    <div class="branch-5"></div>
    <div class="branch-6"></div>
    <div class="branch-7"></div> -->
    <!-- <div class="cartoon-left"></div>
    <div class="cartoon-right"></div>
    <div class="grass"></div>
    <div class="broadleaf"></div> -->
  <div v-for="(item,index) in mallList" :key="index">
    <div class="people-container" v-show="item.level==0">
      <people :defaultBranch="people.defaultBranch">
        <div class="scene-branch-4"></div>
      </people>
    </div>
    <div class="general-container" v-show="item.level==1">
      <general :defaultBranch="general.defaultBranch">
        <div class="scene-branch-6"></div>
      </general>
    </div>
    <div class="captain-container" v-show="item.level==2">
      <captain :defaultBranch="captain.defaultBranch">
        <div class="scene-branch-3"></div>
      </captain>
    </div>
    <div class="commander-container" v-show="item.level==3">
      <commander :defaultBranch="commander.defaultBranch">
        <div class="scene-branch-5"></div>
      </commander>
    </div>
    <div class="wizard-container" v-show="item.level==4">
      <wizard :defaultBranch="wizard.defaultBranch">
        <div class="scene-branch-7"></div>
      </wizard>
    </div>
    <div class="guard-container" v-show="item.level==5">
      <guard :defaultBranch="guard.defaultBranch">
        <div class="scene-branch"></div>
      </guard>
    </div>
    <div class="coins-container" v-show="item.level==6">
      <coins-rolling></coins-rolling>
    </div>
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
    props:{
      mallList: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        people: {
          defaultBranch: false
        },
        wizard: {
          defaultBranch: false
        },
        general: {
          defaultBranch: false
        },
        commander: {
          defaultBranch: false
        },
        captain: {
          defaultBranch: false
        },
        guard: {
          defaultBranch: false
        }
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
      randomCoordinates() {
        let self = this;
        let meteor = self.$refs.meteor;
        setInterval(function() {
          meteor.style.transform = 'translateY(' + 400 * Math.random() + '%)';
        }, 5000)
      }
    },
    mounted() {
      let self = this;
      self.randomCoordinates();
    }
  }
</script>
<style lang="less">
  @import '../themes/style/scene.less';
</style>