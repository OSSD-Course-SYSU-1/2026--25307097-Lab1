import { router } from '@kit.ArkUI'
import { display } from '@kit.ArkUI'

@Entry
@ComponentV2
struct LengthMeasurePage {
  @Local screenWidth: number = 0
  @Local screenHeight: number = 0
  @Local dpi: number = 320
  @Local pixelPerMm: number = 0
  @Local measureLength: number = 0
  @Local startX: number = 0
  @Local endX: number = 0
  @Local isMeasuring: boolean = false
  @Local measureMode: string = 'cm'

  aboutToAppear(): void {
    this.initScreenInfo()
  }

  initScreenInfo(): void {
    try {
      let displayInfo = display.getDefaultDisplaySync()
      this.screenWidth = displayInfo.width
      this.screenHeight = displayInfo.height
      this.dpi = displayInfo.densityDPI
      this.pixelPerMm = this.dpi / 25.4
    } catch (error) {
      this.screenWidth = 1080
      this.pixelPerMm = 12.6
    }
  }

  calculateLength(): number {
    let pixelDistance = Math.abs(this.endX - this.startX)
    let mmLength = pixelDistance / this.pixelPerMm
    if (this.measureMode === 'cm') {
      return mmLength / 10
    } else {
      return mmLength
    }
  }

  build() {
    Column() {
      Row() {
        Button('返回')
          .fontSize(14)
          .backgroundColor('#666666')
          .onClick(() => {
            router.back()
          })
        
        Text('长度测量')
          .fontSize(20)
          .fontColor('#000000')
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)
          .textAlign(TextAlign.Center)
        
        Button(this.measureMode === 'cm' ? '厘米' : '毫米')
          .fontSize(14)
          .backgroundColor('#0A59F7')
          .onClick(() => {
            this.measureMode = this.measureMode === 'cm' ? 'mm' : 'cm'
          })
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .justifyContent(FlexAlign.SpaceBetween)

      Column() {
        Row() {
          Text('屏幕宽度: ' + (this.screenWidth / this.pixelPerMm / 10).toFixed(1) + ' cm')
            .fontSize(12)
            .fontColor('#666666')
          Text(' | ')
            .fontSize(12)
            .fontColor('#666666')
          Text('DPI: ' + this.dpi)
            .fontSize(12)
            .fontColor('#666666')
        }
        .margin({ top: 8, bottom: 8 })
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)

      Column() {
        Stack() {
          Column() {
            ForEach([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], (cm: number) => {
              Row() {
                Column() {
                  Row()
                    .width(2)
                    .height(30)
                    .backgroundColor('#333333')
                  
                  ForEach([1, 2, 3, 4, 5, 6, 7, 8, 9], (mm: number) => {
                    Row() {
                      Row()
                        .width(mm === 5 ? 1.5 : 1)
                        .height(mm === 5 ? 20 : 15)
                        .backgroundColor(mm === 5 ? '#666666' : '#999999')
                    }
                    .width(this.pixelPerMm)
                    .justifyContent(FlexAlign.End)
                  })
                }
                .width(this.pixelPerMm * 10)
              }
            })
          }
          .width('100%')
          .alignItems(HorizontalAlign.Start)

          if (this.isMeasuring && this.startX > 0) {
            Row()
              .width(Math.abs(this.endX - this.startX))
              .height(40)
              .backgroundColor('#330A59F7')
              .position({ x: Math.min(this.startX, this.endX), y: 0 })
          }
        }
        .width('100%')
        .height(300)
        .backgroundColor('#F5F5F5')
        .borderWidth(1)
        .borderColor('#CCCCCC')
        .gesture(
          PanGesture()
            .onActionStart((event: GestureEvent) => {
              this.isMeasuring = true
              this.startX = event.offsetX
              this.endX = event.offsetX
            })
            .onActionUpdate((event: GestureEvent) => {
              this.endX = event.offsetX
              this.measureLength = this.calculateLength()
            })
            .onActionEnd(() => {
              this.isMeasuring = false
              this.measureLength = this.calculateLength()
            })
        )

        Column() {
          Text('测量结果')
            .fontSize(14)
            .fontColor('#99000000')
            .margin({ bottom: 8 })

          Text(this.measureLength.toFixed(2) + (this.measureMode === 'cm' ? ' cm' : ' mm'))
            .fontSize(48)
            .fontColor('#0A59F7')
            .fontWeight(FontWeight.Bold)

          Text('使用方法：在刻度尺上滑动手指测量')
            .fontSize(12)
            .fontColor('#999999')
            .margin({ top: 16 })
        }
        .width('100%')
        .padding(24)
        .margin({ top: 16 })
        .backgroundColor(Color.White)
        .borderRadius(16)
      }
      .width('100%')
      .layoutWeight(1)
      .padding(16)
      .justifyContent(FlexAlign.Start)

      Column() {
        Text('提示：将物体边缘对齐刻度线，滑动测量')
          .fontSize(12)
          .fontColor('#999999')
          .padding(12)
      }
      .width('100%')
      .backgroundColor('#EEEEEE')
    }
    .width('100%')
    .height('100%')
    .background('#F1F3F5')
  }
}
