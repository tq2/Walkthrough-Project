/*global QUnit*/

sap.ui.define([
	"comdemowalkthrough/walkthrough/controller/Walkthrough.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Walkthrough Controller");

	QUnit.test("I should test the Walkthrough controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
