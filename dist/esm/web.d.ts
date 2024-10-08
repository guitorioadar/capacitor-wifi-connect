import { WebPlugin, PermissionState } from '@capacitor/core';
import type { CapacitorWifiConnectPlugin, ConnectState } from './definitions';
export declare class CapacitorWifiConnectPluginWeb extends WebPlugin implements CapacitorWifiConnectPlugin {
    checkPermission(): Promise<{
        value: PermissionState;
    }>;
    requestPermission(): Promise<{
        value: PermissionState;
    }>;
    disconnect(): Promise<{
        value: boolean;
    }>;
    getAppSSID(): Promise<{
        value: string;
        status: ConnectState;
    }>;
    getDeviceSSID(): Promise<{
        value: string;
        status: ConnectState;
    }>;
    getSSIDs(): Promise<{
        value: string[];
        status: ConnectState;
    }>;
    connect(options: {
        ssid: string;
        saveNetwork?: boolean | undefined;
    }): Promise<{
        value: number;
    }>;
    prefixConnect(options: {
        ssid: string;
        saveNetwork?: boolean | undefined;
    }): Promise<{
        value: number;
    }>;
    secureConnect(options: {
        ssid: string;
        password: string;
        saveNetwork?: boolean | undefined;
        isWep?: boolean | undefined;
    }): Promise<{
        value: number;
    }>;
    connectByWifiNetworkSuggestionAndroid(options: {
        ssid: string;
        password: string;
    }): Promise<{
        value: number;
    }>;
    securePrefixConnect(options: {
        ssid: string;
        password: string;
        saveNetwork?: boolean | undefined;
        isWep?: boolean | undefined;
    }): Promise<{
        value: number;
    }>;
}
