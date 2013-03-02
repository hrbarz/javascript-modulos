define(
	['modulos/contador', 'modulos/ingreso', 'modulos/validar'],
	function() {
		var modules = Array.prototype.slice.call(arguments);

		return {
			iniciar : function() {
				for(var name in modules) {
					modules[name].iniciar();
				}
			}
		}
	}
)