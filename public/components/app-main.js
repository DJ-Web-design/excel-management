var AppMain = {
	template:`
	<div id="app-main" :style="!anim ? {animation: 'fade ease 1s'}:{animation: 'none'}">
		<h2 id="title">Administrador De Registos Diarios</h2>
		<aside id="lateral">
			<button @click="addTable = !addTable">Crear Nueva Tabla</button>
			<button>Editar Registros</button>
			<button>Eliminar Registros</button>
		</aside>
		<div id="registros">
			<div id="tools-container">
				<button id="download-data">Descargar Datos</button>
				<div id="search-control">
					<input type="date" id="date-search">
					<button>Buscar</button>
				</div>
				<button class="add-plus">+</button>
			</div>
			<ul id="lista-registros">
				<li class="item-registro">
					<span class="fecha">Registro 12/23/1999</span>
					<span class="filas">filas(10)</span>
					<br>
					<span class="total">Total Ganado 100$</span>
					<div class="buttons">
						<button>Añadir</button>
						<button>Ver</button>
						<button>Eliminar</button>
					</div>
				</li>
			</ul>
		</div>
		<add-table v-if="addTable"></add-table>
	</div>`,
	components:{
		"add-table":AddTable
	},
	data:function(){
		return {
			anim:this.$parent._data.anim,
			addTable:false,
		}
	},
};