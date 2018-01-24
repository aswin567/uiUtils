export namespace UiUtils {

    export function isObjectEmpty(obj: any): boolean{
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    export function isArrayEmpty(ary: any[]): boolean{
        if(ary.length === 0){
            return true;
        } else {
            return false;
        }
    }
}