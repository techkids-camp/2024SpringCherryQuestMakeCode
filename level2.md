### @flyoutOnly true
### @hideIteration true

# はるげんていクエスト

## 水やりをしよう！

水やりをして、さくらをさかせよう！

```ghost
custom2.level2("run", function () {
    custom.sprinkle()
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    custom.draw()
})
```

```template
custom2.level2("run", function () {
})
```