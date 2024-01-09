sap.ui.define(
    [
  "sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel",
  "sap/ui/core/Fragment"
    ],
    function(BaseController,MessageToast,JSONModel,ResourceModel, Fragment) {
      "use strict";
  
      return BaseController.extend("com.demo.walkthrough.walkthrough.controller.HelloPanel", {

/*        -------------BURADAKI VERİLER COMPONENT.JS DOSYASINA AKTARILDIĞI İÇİN KAPATILDI------------
        onInit: function() {

          // görünümde veri modeli ayarlama input alanının değişken verisi için oData'sı
          const oData = {
            recipient : {
              name : "World"
            }
          };
          const oModel = new JSONModel(oData);
          this.getView().setModel(oModel);

        // i18n modelini görünümde ayarlama
          const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
          });
          this.getView().setModel(i18nModel, "i18n");
        },
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        onShowHello : function () {
          //mesajları i18n den okumak için sabit değerler
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);

          // Mesajı gösteren tost mesaj :D
          MessageToast.show(sMsg);
        },
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        onOpenDialog : function () { 
          var oView = this.getView();
    
          // create dialog lazily
          if (!this.byId("helloDialog")) {
            // load asynchronous XML fragment
            Fragment.load({
              id: oView.getId(),
              name: "com.demo.walkthrough.walkthrough.view.HelloDialog",
              controller: this
            }).then(function (oDialog) {
              // connect dialog to the root view of this component (models, lifecycle)
              oView.addDependent(oDialog);
              oDialog.open();
            });
          } else {
            this.byId("helloDialog").open();
          }
        },
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        onCloseDialog: function() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



      });
    }
  );
  