sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/Device"
], (UIComponent, JSONModel, ResourceModel, Device) => {
	"use strict";

	return UIComponent.extend("com.demo.walkthrough.walkthrough.Component", {
		metadata : {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		 },
/*		metadata: {
			
			"interfaces": ["sap.ui.core.IAsyncContentCreation"],
			"rootView": {
				"viewName": "com.demo.walkthrough.walkthrough.view.App",
				"type": "XML",
				"id": "app"
			}
		},
*/
		init() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			// set data model on view
			const oData = {
				recipient: {
					name: "World"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// set i18n model on view
			const i18nModel = new ResourceModel({
				bundleName: "com.demo.walkthrough.walkthrough.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			this.getRouter().initialize();
		}
	});
});

