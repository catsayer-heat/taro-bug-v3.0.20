# taro-bug-v3.0.20

## bug1 已fix
[taro bug](https://github.com/NervJS/taro/issues/8516)

bug1造成原因：ReactDOM 里有调用 batchedEventUpdates 的逻辑，但是在 Taro 内部用于代替 ReactDOM 的 renderer 没有实现这部分逻辑，从而导致这个问题。（taro官方回复）
