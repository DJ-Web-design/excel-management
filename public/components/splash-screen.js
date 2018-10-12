var SplashScreen = {
	template:`<div id="splash" :style="anim ? {animation:'leave .5s ease'} : {animation:'' }">
		<h1>Bienvenido</h1>
	</div>`,
	data:function(){
		return {
			anim:this.$parent._data.anim
		}
	}
}