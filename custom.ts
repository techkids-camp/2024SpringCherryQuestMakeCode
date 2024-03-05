
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
        if (isStop == true) return;
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND_BLOCK) {
            water = true
            player.execute("tellraw @a {\"rawtext\": [{\"translate\":\"common.drawOk\"}]}")
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
        if (agent.inspect(AgentInspection.Block, DOWN) == EMERALD_BLOCK) {
            if (water == true) {
                player.execute("scoreboard players add @a seq 5")
            } else {
                player.execute("scoreboard players add @a seq 2")
            }
        } else {
            player.execute("scoreboard players add @a seq 3")
        }
    }
}
/**
 * Custom blocks
 */
//% weight=100 color=#0078D7 icon="\uf007" block="プレイヤー"
namespace custom2 {
    //% blockId=level1
    //% block=チャットコマンド$onChat|を入力した時
    //% onChat.defl=run
    export function level1(onChat: string = "run", handler: () => void): void {
        agent.teleport(world(233, -54, 442), EAST)
        const workFlow = function () {
            handler();
            if (isStop == false) {
                player.execute("scoreboard players add @a seq 4")
            }
        }
        player.onChat(onChat, workFlow)
    }
    //% blockId=level2
    //% block=チャットコマンド$onChat|を入力した時
    //% onChat.defl=run
    export function level2(onChat: string = "run", handler: () => void): void {
        agent.teleport(world(369, -54, 323), EAST)
        const workFlow = function () {
            handler();
            if (isStop == false) {
                player.execute("scoreboard players add @a seq 4")
            }
        }
        player.onChat(onChat, workFlow)
    }
    //% blockId=level3
    //% block=チャットコマンド$onChat|を入力した時
    //% onChat.defl=run
    export function level3(onChat: string = "run", handler: () => void): void {
        agent.teleport(world(201,13,309), NORTH)
        const workFlow = function () {
            handler();
            if (isStop == false) {
                player.execute("scoreboard players add @a seq 4")
            }
        }
        player.onChat(onChat, workFlow)
    }
}

