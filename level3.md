### @flyoutOnly true
### @hideIteration true

# はるげんていクエスト

## 水やりをしよう！

水やりをして、さくらをさかせよう！

```ghost
custom2.level3("run", function () {
    custom.sprinkle()
    agent.move(FORWARD, 1)
    custom.draw()
    agent.turn(LEFT_TURN)
})
```

```template
custom2.level3("run", function () {
})
```