export class Utils {
    static async sleep(ms: number) {
        await new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
}
