var AddTable = {
	template:`
	<div id="add-table" :style="this.$parent._data.addTable ? {animation:'fade 1s ease'}:{animation:''}">
		<div id="shadow"></div>
		<div id="container">
			<div id="head">
				<button class="add-plus" style="background:var(--secondary-light)" @click="$parent._data.addTable = false">x</button>
			</div>
			<h4>Añadir Registros</h4>
			<div>
				<div>
					<span>Nombre de la columna</span>
					<span>Tipo</span>
				</div>
				<ul id="row-list">
					<li class="item">
						<span class="margin"></span>
						<span class="column-name">Nombre de la Columna</span>
						<span>Texto</span>
						<button class="add-plus" style="position: relative;margin-left: 145px;left: 10px;background: var(--primary-color);">x</button>
					</li>
				</ul>
				<input type="text" placeholder="Nombre Columna">
				<select>
					<option value="text">Texto</option>
					<option value="number">Numerico</option>
					<option value="money">Dinero</option>
					<option value="date">Fecha</option>
					<option value="bool">Booleano</option>
				</select>
				<button class="generic-button" style="background:var(--secondary-light)">Añadir Columna</button>
			</div>
			<button class="generic-button" style="margin: auto;display: block;margin-top: 20px;">Crear Tabla</button>
		</div>
	</div>`
}