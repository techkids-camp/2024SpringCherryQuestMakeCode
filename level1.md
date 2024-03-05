### @flyoutOnly true
### @hideIteration true

# はるげんていクエスト

## 水やりをしよう！

水やりをして、さくらをさかせよう！

```ghost
custom2.level1("run", function () {
    custom.sprinkle()
    agent.move(FORWARD, 1)
    custom.draw()
})
```

```template
custom2.level1("run", function () {
})
```