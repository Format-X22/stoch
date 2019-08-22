import { Utils } from './Utils';
import * as Crypto from 'crypto';
import * as Request from 'request-promise-native';

const PING_TIMEOUT = 10000;
const RETRY_TIMEOUT = 3000;
const DOMAIN = 'https://www.bitmex.com';
const API_POINT = '/api/v1/';

export default class Stock {
    private lastSync: Date | null;
    private lastError: string | null;

    constructor() {
        this.startPingLoop().catch();
    }

    async getPositions() {
        // TODO -
    }

    async hasPositionFor() {
        // TODO -
    }

    async getOrders() {
        // TODO -
    }

    async placeOrder() {
        // TODO -
    }

    async moveOrder() {
        // TODO -
    }

    async cancelOrder() {
        // TODO -
    }

    async shutdown() {
        // TODO -
    }

    async getBalanceFor() {
        // TODO -
    }

    getLastSync() {
        return new Date(this.lastSync);
    }

    getLastError() {
        return this.lastError;
    }

    getCandles() {
        // TODO -
    }

    private async request() {
        // TODO -
    }

    private async singleRequestTry() {
        // TODO -
    }

    private async startPingLoop(): Promise<void> {
        await this.getPositions();

        this.lastSync = new Date();

        await Utils.sleep(PING_TIMEOUT);
    }
}
