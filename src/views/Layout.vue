<template>
<AppTopnav></AppTopnav>
<AppHeader></AppHeader>
<Home></Home>
<AppFooter></AppFooter>
</template>

<script >
import  AppTopnav from '../views/components/app-topnav.vue'
import  AppHeader from '../views/components/app-header.vue'
import  AppFooter from '../views/components/app-footer.vue'
import Home from './components/home/Home.vue'

export default {
  data() {
  	return {
      datalist:[]
  	}
	},
  components:{
    AppFooter,
    AppHeader,
    AppTopnav,
    Home
  },

}
</script>