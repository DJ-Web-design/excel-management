var AddTable = {
	template:`
	<div id="add-table">
		<div id="shadow"></div>
		<div id="container">
			<div id="head">
				<button @click="$parent._data.addTable = false">Cerrar</button>
			</div>
			<h4>Añadir Registros</h4>
			<div>
				<div>
					<span>Nombre de la columna</span>
					<span>Tipo</span>
				</div>
				<ul>
					<li>
						<span>Nombre de la Columna</span>
						<span>Texto</span>
						<button>Eliminar</button>
					</li>
				</ul>
				<input type="text" placeholder="Nombre Columna">
				<select>
					<option>Texto</option>
					<option>Numerico</option>
				</select>
				<button>Añadir Columna</button>
			</div>
			<button>Crear Tabla</button>
		</div>
	</div>`
}