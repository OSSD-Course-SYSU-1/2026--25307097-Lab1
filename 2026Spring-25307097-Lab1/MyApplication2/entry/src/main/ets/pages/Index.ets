@Entry
@Component
struct Index {
  @State currentTab: number = 0
  @State selectedMood: number = 0
  @State showSuccess: boolean = false

  build() {
    Column() {
      Text('心情日记')
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 20, bottom: 20 })

      Row() {
        Column() {
          Text('写日记')
            .fontColor(this.currentTab === 0 ? '#0A59F7' : '#666666')
        }
        .width('33%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 0
        })

        Column() {
          Text('日记列表')
            .fontColor(this.currentTab === 1 ? '#0A59F7' : '#666666')
        }
        .width('33%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 1
        })

        Column() {
          Text('心情推荐')
            .fontColor(this.currentTab === 2 ? '#0A59F7' : '#666666')
        }
        .width('33%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 2
        })
      }
      .width('100%')

      if (this.currentTab === 0) {
        Column() {
          Text('选择心情')
            .fontSize(16)
            .margin({ top: 20, bottom: 16 })

          Row() {
            Column() {
              Text('😊').fontSize(28)
            }
            .width(60)
            .height(60)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 0 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 0
            })

            Column() {
              Text('😢').fontSize(28)
            }
            .width(60)
            .height(60)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 1 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 1
            })

            Column() {
              Text('😠').fontSize(28)
            }
            .width(60)
            .height(60)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 2 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 2
            })

            Column() {
              Text('😌').fontSize(28)
            }
            .width(60)
            .height(60)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 3 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 3
            })
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceEvenly)

          Button('保存')
            .width(200)
            .height(50)
            .margin({ top: 40 })
            .onClick(() => {
              this.showSuccess = true
            })

          if (this.showSuccess) {
            Text('保存成功！')
              .fontSize(18)
              .fontColor('#4CAF50')
              .margin({ top: 16 })
          }
        }
        .width('100%')
        .layoutWeight(1)
      }

      if (this.currentTab === 1) {
        Column() {
          Text('暂无日记')
            .fontSize(16)
            .fontColor('#999999')
            .margin({ top: 40 })
        }
        .width('100%')
        .layoutWeight(1)
      }

      if (this.currentTab === 2) {
        Column() {
          Text('适合的颜色：金色')
            .fontSize(16)
            .margin({ bottom: 16 })

          Row() {
            Row()
              .width(60)
              .height(60)
              .backgroundColor('#FFD700')
              .borderRadius(12)
          }
          .margin({ bottom: 24 })

          Text('适合听的音乐')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 12 })

          Text('《Happy》- Pharrell Williams')
            .fontSize(16)
            .fontColor('#0A59F7')
            .margin({ bottom: 24 })

          Text('适合吃的食物')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 12 })

          Text('水果沙拉或冰淇淋')
            .fontSize(16)
            .fontColor('#4CAF50')
        }
        .width('100%')
        .layoutWeight(1)
        .margin({ top: 20 })
      }
    }
    .width('100%')
    .height('100%')
  }
}
