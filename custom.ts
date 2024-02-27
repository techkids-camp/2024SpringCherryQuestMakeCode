
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/


let water: Boolean = false

/**
 * Custom blocks
 */
//% weight=100 color=#ffc0cb icon="\uf043" block="水"
namespace custom {
    //% blockId=draw
    //% block=水をくむ
    export function draw(): void {
        if (agent.inspect(AgentInspection.Block, DOWN) == 9) {
            water = 1
            player.say("水を汲んだ")
            player.say(water)
        } else {
            player.say("水がない")
            player.say(water)
        }
    }
    //% blockId=sprinkle
    //% block=水をまく
    export function sprinkle(): void {
        if (agent.inspect(AgentInspection.Block, DOWN) == 22) {
            if (water == 1) {
                player.say("水を撒いた")
            } else {
                player.say("まだ水を汲んでない")
            }
        } else {
            player.say("ここじゃぁない")
        }
    }
}

