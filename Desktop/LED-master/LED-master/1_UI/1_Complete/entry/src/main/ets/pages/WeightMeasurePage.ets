import { router } from '@kit.ArkUI'
import { sensor } from '@kit.SensorServiceKit'

interface MaterialItem {
  name: string
  density: number
}

@Entry
@ComponentV2
struct WeightMeasurePage {
  @Local phoneAngleX: number = 0
  @Local phoneAngleY: number = 0
  @Local referenceWeight: string = '100'
  @Local calculatedWeight: number = 0
  @Local measureMethod: number = 0
  @Local isBalanced: boolean = false
  @Local balanceHistory: string[] = []
  @Local currentDensity: number = 1.0
  @Local objectVolume: string = '100'

  private accelerometerCallback: (data: sensor.AccelerometerResponse) => void = (data: sensor.AccelerometerResponse) => {}

  aboutToAppear(): void {
    this.subscribeAccelerometer()
  }

  aboutToDisappear(): void {
    this.unsubscribeAccelerometer()
  }

  subscribeAccelerometer(): void {
    this.accelerometerCallback = (data: sensor.AccelerometerResponse) => {
      let x = data.x
      let y = data.y
      let z = data.z
      
      this.phoneAngleX = Math.atan2(x, z) * 180 / Math.PI
      this.phoneAngleY = Math.atan2(y, z) * 180 / Math.PI
      
      this.isBalanced = Math.abs(this.phoneAngleX) < 3 && Math.abs(this.phoneAngleY) < 3
    }
    
    try {
      sensor.on(sensor.SensorId.ACCELEROMETER, this.accelerometerCallback, { interval: 100000000 })
    } catch (error) {
      console.error('Accelerometer subscription failed')
    }
  }

  unsubscribeAccelerometer(): void {
    try {
      sensor.off(sensor.SensorId.ACCELEROMETER, this.accelerometerCallback)
    } catch (error) {
      console.error('Accelerometer unsubscription failed')
    }
  }

  calculateByBalance(): void {
    let refWeight = parseFloat(this.referenceWeight)
    if (isNaN(refWeight) || refWeight <= 0) {
      return
    }
    
    let ratio = Math.tan(this.phoneAngleX * Math.PI / 180)
    this.calculatedWeight = refWeight * (1 + Math.abs(ratio) * 2)
    
    let timestamp = new Date().toLocaleTimeString()
    this.balanceHistory.unshift(`${timestamp}: ${this.calculatedWeight.toFixed(1)}g`)
    if (this.balanceHistory.length > 5) {
      this.balanceHistory.pop()
    }
  }

  calculateByVolume(): void {
    let volume = parseFloat(this.objectVolume)
    if (isNaN(volume) || volume <= 0) {
      return
    }
    
    this.calculatedWeight = volume * this.currentDensity
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
        
        Text('重量测量')
          .fontSize(20)
          .fontColor('#000000')
          .fontWeight(FontWeight.Bold)
          .layoutWeight(1)
          .textAlign(TextAlign.Center)
        
        Text('')
          .width(60)
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .justifyContent(FlexAlign.SpaceBetween)

      Column() {
        Row() {
          Column() {
            Text('天平法')
              .fontSize(14)
              .fontColor(this.measureMethod === 0 ? '#FFFFFF' : '#333333')
          }
          .width('48%')
          .padding(12)
          .backgroundColor(this.measureMethod === 0 ? '#0A59F7' : '#E5E5EA')
          .borderRadius(8)
          .onClick(() => { this.measureMethod = 0 })

          Column() {
            Text('估算法')
              .fontSize(14)
              .fontColor(this.measureMethod === 1 ? '#FFFFFF' : '#333333')
          }
          .width('48%')
          .padding(12)
          .backgroundColor(this.measureMethod === 1 ? '#4CAF50' : '#E5E5EA')
          .borderRadius(8)
          .onClick(() => { this.measureMethod = 1 })
        }
        .width('100%')
        .justifyContent(FlexAlign.SpaceBetween)
        .padding({ left: 16, right: 16 })
      }
      .width('100%')
      .margin({ top: 12 })

      if (this.measureMethod === 0) {
        Column() {
          Column() {
            Text('手机倾斜角度')
              .fontSize(14)
              .fontColor('#666666')
              .margin({ bottom: 8 })

            Row() {
              Column() {
                Text('X轴')
                  .fontSize(12)
                  .fontColor('#999999')
                Text(this.phoneAngleX.toFixed(1) + '°')
                  .fontSize(24)
                  .fontColor('#0A59F7')
                  .fontWeight(FontWeight.Bold)
              }
              .layoutWeight(1)

              Column() {
                Text('Y轴')
                  .fontSize(12)
                  .fontColor('#999999')
                Text(this.phoneAngleY.toFixed(1) + '°')
                  .fontSize(24)
                  .fontColor('#4CAF50')
                  .fontWeight(FontWeight.Bold)
              }
              .layoutWeight(1)

              Column() {
                Text('状态')
                  .fontSize(12)
                  .fontColor('#999999')
                Text(this.isBalanced ? '平衡' : '倾斜')
                  .fontSize(16)
                  .fontColor(this.isBalanced ? '#4CAF50' : '#FF5722')
                  .fontWeight(FontWeight.Bold)
              }
              .layoutWeight(1)
            }
            .width('100%')
          }
          .width('100%')
          .padding(16)
          .backgroundColor(Color.White)
          .borderRadius(16)

          Column() {
            Text('参考重量(g)')
              .fontSize(14)
              .fontColor('#666666')
              .margin({ bottom: 8 })
            
            TextInput({ text: this.referenceWeight })
              .type(InputType.Number)
              .height(40)
              .backgroundColor('#F5F5F5')
              .borderRadius(8)
              .onChange((value: string) => {
                this.referenceWeight = value
              })
          }
          .width('100%')
          .padding(16)
          .margin({ top: 16 })

          Button('计算重量')
            .width('100%')
            .height(44)
            .backgroundColor('#0A59F7')
            .margin({ top: 16 })
            .onClick(() => {
              this.calculateByBalance()
            })

          if (this.calculatedWeight > 0) {
            Column() {
              Text('估算重量')
                .fontSize(14)
                .fontColor('#666666')
                .margin({ bottom: 8 })
              
              Text(this.calculatedWeight.toFixed(1) + ' g')
                .fontSize(36)
                .fontColor('#0A59F7')
                .fontWeight(FontWeight.Bold)
            }
            .width('100%')
            .padding(16)
            .margin({ top: 16 })
            .backgroundColor('#E8F5E9')
            .borderRadius(16)
          }
        }
        .width('100%')
        .padding(16)
      } else {
        Column() {
          Column() {
            Text('材料密度(g/cm³)')
              .fontSize(14)
              .fontColor('#666666')
              .margin({ bottom: 8 })
            
            Row() {
              ForEach([
                { name: '水', density: 1.0 } as MaterialItem,
                { name: '木', density: 0.6 } as MaterialItem,
                { name: '铝', density: 2.7 } as MaterialItem,
                { name: '铁', density: 7.8 } as MaterialItem
              ], (item: MaterialItem) => {
                Button(item.name)
                  .fontSize(12)
                  .backgroundColor(this.currentDensity === item.density ? '#0A59F7' : '#E5E5EA')
                  .fontColor(this.currentDensity === item.density ? '#FFFFFF' : '#333333')
                  .height(32)
                  .onClick(() => {
                    this.currentDensity = item.density
                  })
              })
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceBetween)
          }
          .width('100%')
          .padding(16)
          .backgroundColor(Color.White)
          .borderRadius(16)

          Column() {
            Text('体积(cm³)')
              .fontSize(14)
              .fontColor('#666666')
              .margin({ bottom: 8 })
            
            TextInput({ text: this.objectVolume })
              .type(InputType.Number)
              .height(40)
              .backgroundColor('#F5F5F5')
              .borderRadius(8)
              .onChange((value: string) => {
                this.objectVolume = value
              })
          }
          .width('100%')
          .padding(16)
          .margin({ top: 16 })

          Button('计算重量')
            .width('100%')
            .height(44)
            .backgroundColor('#4CAF50')
            .margin({ top: 16 })
            .onClick(() => {
              this.calculateByVolume()
            })

          if (this.calculatedWeight > 0) {
            Column() {
              Text('估算重量')
                .fontSize(14)
                .fontColor('#666666')
                .margin({ bottom: 8 })
              
              Text(this.calculatedWeight.toFixed(1) + ' g')
                .fontSize(36)
                .fontColor('#4CAF50')
                .fontWeight(FontWeight.Bold)
              
              Text('重量 = 体积 × 密度')
                .fontSize(12)
                .fontColor('#999999')
                .margin({ top: 8 })
            }
            .width('100%')
            .padding(16)
            .margin({ top: 16 })
            .backgroundColor('#E8F5E9')
            .borderRadius(16)
          }
        }
        .width('100%')
        .padding(16)
      }
    }
    .width('100%')
    .height('100%')
    .background('#F1F3F5')
  }
}
