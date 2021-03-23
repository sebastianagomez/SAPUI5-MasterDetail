sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("EjercicioMasterApp.EjercicioMasterApp.controller.Detail", {
			onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteDetail").attachPatternMatched(this._onRoutedMatched, this)                
            },
            _onRoutedMatched: function (oEvent){
                this._productId = oEvent.getParameter("arguments")._productId;
            }
		
		});
	});
