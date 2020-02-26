document.write('<script src="/js/vue.js" type="text/javascript" charset="utf-8"></script>')
document.write('<script src="/js/botui.js" type="text/javascript" charset="utf-8"></script>')

// 自定义聊天机器人
function bot_ui_ini() {
    var botui = new BotUI("hello-mashiro")
    botui.message.add({
        delay: 1000,
        content: "Hi, there👋"
    }).then(function () {
        botui.message.add({
            delay: 1000,
            content: "这里是 楠沐"
        }).then(function () {
            botui.message.add({
                delay: 1000,
                content: "一个可爱的蓝孩子~"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "然后呢？ 😃",
                        value: "sure"
                    }, {
                        text: "少废话！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 1000,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 1000,
                content: "![...](https://cdn.jsdelivr.net/gh/Youjianan/cdn@1.4/img/meme/end.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1000,
                content: "目前就读于杭州电子科技大学"
            }).then(function () {
                botui.message.add({
                    delay: 1000,
                    content: "软件工程专业"
            }).then(function () {
                botui.message.add({
                    delay: 1000,
                    content: "本以为"
            }).then(function () {
                botui.action.button({
                    delay: 1100,
                    action: [{
                        text: "为什么叫Mashiro呢？ 🤔",
                        value: "why-mashiro"
                    }]
            }).then(function (a) {
                thirdpart()
            })
            })
            })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "Mashiro以及站名都来自一部动画，因为和主角有一样的爱好~ 如果有兴趣可以找找首页上的视频~"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "为什么是白猫呢？ 🤔",
                        value: "why-cat"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "因为对GitHub有种执念… "
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "而且我真的是猫控！"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "域名有什么含意吗？(ง •_•)ง",
                            value: "why-domain"
                        }]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "emmmm，看备案信息你就知道了=.= 本来想要zheng.xin的，但50万真买不起。。"
            }).then(function () {
                botui.message.add({
                    delay: 1600,
                    content: "那么，仔细看看我的博客吧？ ^_^"
                })
            })
        }
}