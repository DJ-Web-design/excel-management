var App = new Vue({
	el:"#app",
	components:{
		"app-main":AppMain,
		"splash-screen":SplashScreen,
	},
	data:{
		splash:true,
		anim: false,
		registros:[]
	}
})