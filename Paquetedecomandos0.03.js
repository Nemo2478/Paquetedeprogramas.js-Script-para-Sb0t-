var userCount = 0; // Holds the current user count
var maxUsers = 80;  // Set this to the maximum users you want

function onLoad() {
	print("Bienvenido al script Paquetedecomandos.js 0.03!");
	print("Para ver los comandos pon /Mostrarcomandos");
}

function onCommand(userobj, command, target, args) {
	if(command == "Mostrarcomandos") {
		if(userobj.level >= 1) {
			print(userobj, "/Fijarlimiteusuarios <cantidad>");
			print(userobj, "/Warn <id>-<razon> (Advertir a un usuario (A las tres advertencias un Kick!))");
		}
		print(userobj, "/Version");	
	}
	if(command.substr(0, 20) == "Fijarlimiteusuarios ") {
		if(userobj.level >= 1) {
			maxUsers = parseInt(command.substr(20));	
			print(userobj, "La maxima cantidad de usuarios en esta sala ha sido fijada a " + command.substr(20));
		}
	}
	if(command.substr(0, 5) == "Warn ") {
		if(userobj.level >= 1) {
			var ejemplo = command.substr(5);
			str = ejemplo.split("-");
			var id = parseInt(str[0]);
			print(user(id), "Fuiste advertido! Razon: " + str[1]);
		}
	}
	if(command == "Version") {
		print(userobj, "Paquete de comandos 0.03.");
	}
}

function onJoinCheck(userobj) {
	if(userCount + 1 > maxUsers) {	
		print(userobj, "Lo siento " + userobj.name + " pero esta sala ha llegado al limite de la cantidad de usuarios permitida.");
		return false;
	}
	userCount++;
	return true;
}

function onPart(userobj) {
	userCount = userCount - 1;
}