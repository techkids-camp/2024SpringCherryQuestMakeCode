
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum CarType {
    //% block="スポーツカー"
    Sports = 1,
    //% block="ワゴン"
    Wagon = 2,
    //% block="トラック"
    Truck = 3,
    //% block="バイク"
    Bike,
    //% block="セダン"
    Sedan,
    //% block="コンパクトカー"
    Compact
}

let carType: CarType | null = null

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf1b9" block="カーディーラー"
namespace custom {
    //% blockId=whenStartZero
    //% block=くるまをつくるとき
    export function whenStartZero(handler: () => void): void {
        player.execute("scoreboard players add @s phase 1")
    }

    //% blockId=whenStartOne
    //% block=くるまをつくるとき
    export function whenStartOne(handler: () => void): void {
        handler();
        if(
            carType == CarType.Sedan,
        ){
            player.execute("scoreboard players add @s phase 1")
        } else {
            player.execute("scoreboard players add @s phase 2")
        }
    }
}


/**
 * Custom blocks
 */
//% weight=100 color=#2f4f4f icon="\uf0ad" block="くるまづくり"
namespace custom2 {
    //% blockId=selectCarType
    //% block="車のタイプを$newCarTypeにする"
    export function selectCarType(newCarType: CarType): void {
        carType = newCarType
    }
}

