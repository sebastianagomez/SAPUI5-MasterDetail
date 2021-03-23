/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EjercicioMasterApp/EjercicioMasterApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
