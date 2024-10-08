var capacitorCapacitorWifiConnectPlugin = (function (exports, core) {
    'use strict';

    exports.ConnectState = void 0;
    (function (ConnectState) {
        ConnectState[ConnectState["Ok"] = 0] = "Ok";
        ConnectState[ConnectState["Denied"] = -1] = "Denied";
        ConnectState[ConnectState["Ko"] = -2] = "Ko";
        ConnectState[ConnectState["UnknowSsid"] = -3] = "UnknowSsid";
        ConnectState[ConnectState["WifiDisabled"] = -4] = "WifiDisabled";
        ConnectState[ConnectState["AppLocalizationPermission"] = -5] = "AppLocalizationPermission";
        ConnectState[ConnectState["SystemLocalizationPermission"] = -6] = "SystemLocalizationPermission";
    })(exports.ConnectState || (exports.ConnectState = {}));

    const CapacitorWifiConnect = core.registerPlugin('CapacitorWifiConnect', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorWifiConnectPluginWeb()),
    });

    class CapacitorWifiConnectPluginWeb extends core.WebPlugin {
        checkPermission() {
            throw new Error('Method not implemented.');
        }
        requestPermission() {
            throw new Error('Method not implemented.');
        }
        disconnect() {
            throw new Error('Method not implemented.');
        }
        getAppSSID() {
            throw new Error('Method not implemented.');
        }
        getDeviceSSID() {
            throw new Error('Method not implemented.');
        }
        getSSIDs() {
            throw new Error('Method not implemented.');
        }
        connect(options) {
            throw new Error('Method not implemented.');
        }
        prefixConnect(options) {
            throw new Error('Method not implemented.');
        }
        secureConnect(options) {
            throw new Error('Method not implemented.');
        }
        connectByWifiNetworkSuggestionAndroid(options) {
            throw new Error('Method not implemented.');
        }
        securePrefixConnect(options) {
            throw new Error('Method not implemented.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorWifiConnectPluginWeb: CapacitorWifiConnectPluginWeb
    });

    exports.CapacitorWifiConnect = CapacitorWifiConnect;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
