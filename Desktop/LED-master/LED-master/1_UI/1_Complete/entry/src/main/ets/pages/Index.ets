import { router } from '@kit.ArkUI'

@Entry
@ComponentV2
struct Index {

  build() {
    Column() {
      Column() {
        Text('简易测量工具')
          .fontSize(26)
          .fontColor('#000000')
          .fontWeight(FontWeight.Bold)
          .margin({ left: 16 })
          .height(56)
      }
      .width('100%')
      .alignItems(HorizontalAlign.Start)

      Column() {
        Text('测量功能')
          .fontSize(14)
          .fontColor('#99000000')
          .fontWeight(FontWeight.Medium)
          .margin({ left: 28 })

        Column() {
          Row() {
            Column() {
              Image($r('app.media.startIcon'))
                .width(48)
                .height(48)
                .borderRadius(24)
              Text('长度测量')
                .fontSize(14)
                .fontColor('#FFFFFF')
                .margin({ top: 8 })
            }
            .width('45%')
            .padding(16)
            .backgroundColor('#0A59F7')
            .borderRadius(16)
            .onClick(() => {
              router.pushUrl({ url: 'pages/LengthMeasurePage' })
            })

            Column() {
              Image($r('app.media.startIcon'))
                .width(48)
                .height(48)
                .borderRadius(24)
              Text('重量测量')
                .fontSize(14)
                .fontColor('#FFFFFF')
                .margin({ top: 8 })
            }
            .width('45%')
            .padding(16)
            .backgroundColor('#4CAF50')
            .borderRadius(16)
            .onClick(() => {
              router.pushUrl({ url: 'pages/WeightMeasurePage' })
            })
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceBetween)
        }
        .width('100%')
        .padding({ left: 16, right: 16, top: 16, bottom: 16 })
      }
      .width('100%')
      .margin({ top: 28 })
      .alignItems(HorizontalAlign.Start)

      Column() {
        Text('使用说明')
          .fontSize(14)
          .fontColor('#99000000')
          .fontWeight(FontWeight.Medium)
          .margin({ left: 28, bottom: 12 })

        Column() {
          Row() {
            Text('📏')
              .fontSize(20)
            Text('长度测量：使用屏幕刻度尺测量小物体')
              .fontSize(14)
              .fontColor('#333333')
              .margin({ left: 8 })
          }
          .width('100%')
          .margin({ bottom: 12 })

          Row() {
            Text('⚖️')
              .fontSize(20)
            Text('重量测量：通过手机传感器估算物体重量')
              .fontSize(14)
              .fontColor('#333333')
              .margin({ left: 8 })
          }
          .width('100%')
        }
        .width('100%')
        .padding(16)
        .backgroundColor(Color.White)
        .borderRadius(16)
        .margin({ top: 8 })
      }
      .width('100%')
      .padding({ left: 16, right: 16 })
      .alignItems(HorizontalAlign.Start)
    }
    .width('100%')
    .height('100%')
    .background('#F1F3F5')
  }
}
