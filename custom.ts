
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/


let water: Boolean = false
let isStop: Boolean = false

/**
 * Custom blocks
 */
//% weight=100 color=#ffc0cb icon="\uf043" block="水"
namespace custom {
    /**
     * 水を汲むのに失敗した時:1
     * 水をまくのに失敗した(水を汲んでいない):2
     * 水をまくのに失敗した(まけない):3
     * 成功:4
     */

    //% blockId=draw
    //% block=水をくむ
    export function draw(): void {
        if(isStop == true) return;
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND_BLOCK) {
            water = true
        } else {
            isStop = true
            player.execute("scoreboard players add @a seq 1")
        }
    }
    //% blockId=sprinkle
    //% block=水をまく
    export function sprinkle(): void {
        if (isStop == true) return;
        isStop = true
        if (agent.inspect(AgentInspection.Block, DOWN) == 22) {
            if (water == true) {
                player.execute("scoreboard players add @a seq 4")
            } else {
                player.execute("scoreboard players add @a seq 2")
            }
        } else {
            player.execute("scoreboard players add @a seq 3")
        }
    }
}

