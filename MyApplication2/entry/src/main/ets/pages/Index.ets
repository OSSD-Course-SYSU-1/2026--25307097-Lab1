@Entry
@Component
struct Index {
  @State currentTab: number = 0
  @State selectedMood: number = 0
  @State showSuccess: boolean = false
  @State aiRecommendation: string = '点击下方按钮获取智能推荐'
  @State isLoading: boolean = false
  @State diaryList: string[] = []
  @State moodList: number[] = []
  @State diaryCount: number = 0
  @State moodStats: string = ''
  @State diaryContent: string = ''

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
          this.updateStats()
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
              Text('😊').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 0 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 0
            })

            Column() {
              Text('😢').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 1 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 1
            })

            Column() {
              Text('😠').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 2 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 2
            })

            Column() {
              Text('😌').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 3 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 3
            })

            Column() {
              Text('🤩').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 4 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 4
            })

            Column() {
              Text('😰').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 5 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 5
            })
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceEvenly)
          .margin({ bottom: 12 })

          Row() {
            Column() {
              Text('😴').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 6 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 6
            })

            Column() {
              Text('😊').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 7 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 7
            })

            Column() {
              Text('😤').fontSize(24)
            }
            .width(50)
            .height(50)
            .justifyContent(FlexAlign.Center)
            .backgroundColor(this.selectedMood === 8 ? '#E3F2FD' : '#F5F5F5')
            .borderRadius(8)
            .onClick(() => {
              this.selectedMood = 8
            })
          }
          .width('100%')
          .justifyContent(FlexAlign.SpaceEvenly)

          Button('保存')
            .width(200)
            .height(50)
            .margin({ top: 30 })
            .onClick(() => {
              this.saveDiary()
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
          Text('心情统计')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 20, bottom: 12 })

          Text(this.moodStats)
            .fontSize(14)
            .fontColor('#666666')
            .width('90%')
            .margin({ bottom: 20 })

          Text('日记列表')
            .fontSize(18)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 16 })

          if (this.diaryCount === 0) {
            Text('暂无日记')
              .fontSize(16)
              .fontColor('#999999')
              .margin({ top: 20 })
          } else {
            Column() {
              ForEach(this.diaryList, (diary: string, index: number) => {
                Column() {
                  Text(diary)
                    .fontSize(14)
                    .width('100%')
                }
                .width('90%')
                .padding(12)
                .backgroundColor('#F5F5F5')
                .borderRadius(8)
                .margin({ bottom: 8 })
              })
            }
            .width('100%')
          }
        }
        .width('100%')
        .layoutWeight(1)
      }

      if (this.currentTab === 2) {
        Column() {
          Text('智能推荐')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 20, bottom: 20 })

          Text(this.aiRecommendation)
            .fontSize(14)
            .fontColor('#333333')
            .width('90%')
            .margin({ bottom: 20 })

          Button(this.isLoading ? '正在分析...' : '获取推荐')
            .width(200)
            .height(50)
            .enabled(!this.isLoading)
            .onClick(() => {
              this.getAIRecommendation()
            })
        }
        .width('100%')
        .layoutWeight(1)
      }
    }
    .width('100%')
    .height('100%')
  }

  saveDiary() {
    let moodText = this.getMoodText(this.selectedMood)
    let now = new Date()
    let time = now.getHours() + ':' + now.getMinutes()
    let diary = '📅 ' + time + ' | ' + moodText
    
    this.diaryList.push(diary)
    this.moodList.push(this.selectedMood)
    this.diaryCount = this.diaryCount + 1
    this.showSuccess = true
  }

  updateStats() {
    if (this.diaryCount === 0) {
      this.moodStats = '还没有记录，快去写日记吧！'
      return
    }

    let happy = 0
    let sad = 0
    let angry = 0
    let calm = 0
    
    for (let i = 0; i < this.moodList.length; i++) {
      let mood = this.moodList[i]
      if (mood === 0 || mood === 4 || mood === 7) {
        happy = happy + 1
      } else if (mood === 1 || mood === 5) {
        sad = sad + 1
      } else if (mood === 2 || mood === 8) {
        angry = angry + 1
      } else {
        calm = calm + 1
      }
    }

    this.moodStats = '总记录：' + this.diaryCount + ' 次\n'
    this.moodStats += '😊 开心：' + happy + ' 次\n'
    this.moodStats += '😢 难过：' + sad + ' 次\n'
    this.moodStats += '😠 生气：' + angry + ' 次\n'
    this.moodStats += '😌 平静：' + calm + ' 次'
  }

  getMoodText(mood: number): string {
    if (mood === 0) return '😊开心'
    if (mood === 1) return '😢难过'
    if (mood === 2) return '😠生气'
    if (mood === 3) return '😌平静'
    if (mood === 4) return '🤩兴奋'
    if (mood === 5) return '😰焦虑'
    if (mood === 6) return '😴疲惫'
    if (mood === 7) return '😊幸福'
    return '😤烦躁'
  }

  getAIRecommendation() {
    this.isLoading = true
    
    let moodText = this.getMoodText(this.selectedMood)
    let recommendation = '根据您【' + moodText + '】的心情：\n\n'
    
    if (this.selectedMood === 0 || this.selectedMood === 4 || this.selectedMood === 7) {
      recommendation += '🎨 适合的颜色：金色\n温暖明亮的颜色能延续好心情\n\n'
      recommendation += '🎵 适合听的音乐：\n《Happy》- Pharrell Williams\n\n'
      recommendation += '🍜 适合吃的食物：\n水果沙拉或冰淇淋\n\n'
      recommendation += '💡 建议：和朋友聚会、看喜剧电影'
    } else if (this.selectedMood === 1 || this.selectedMood === 5) {
      recommendation += '🎨 适合的颜色：天蓝色\n平静安宁的颜色抚慰心灵\n\n'
      recommendation += '🎵 适合听的音乐：\n《Fix You》- Coldplay\n\n'
      recommendation += '🍜 适合吃的食物：\n热巧克力或蛋糕\n\n'
      recommendation += '💡 建议：写日记、听音乐、散步'
    } else if (this.selectedMood === 2 || this.selectedMood === 8) {
      recommendation += '🎨 适合的颜色：绿色\n自然舒缓的颜色平复情绪\n\n'
      recommendation += '🎵 适合听的音乐：\n《Weightless》- Marconi Union\n\n'
      recommendation += '🍜 适合吃的食物：\n坚果或全麦面包\n\n'
      recommendation += '💡 建议：深呼吸、冥想、做运动'
    } else if (this.selectedMood === 6) {
      recommendation += '🎨 适合的颜色：淡蓝色\n宁静的颜色帮助休息\n\n'
      recommendation += '🎵 适合听的音乐：\n轻音乐或白噪音\n\n'
      recommendation += '🍜 适合吃的食物：\n热牛奶或燕麦粥\n\n'
      recommendation += '💡 建议：早点休息、泡个热水澡'
    } else {
      recommendation += '🎨 适合的颜色：淡紫色\n优雅宁静的颜色保持平和\n\n'
      recommendation += '🎵 适合听的音乐：\n《River Flows in You》- Yiruma\n\n'
      recommendation += '🍜 适合吃的食物：\n绿茶配点心\n\n'
      recommendation += '💡 建议：读书、品茶、做瑜伽'
    }
    
    this.aiRecommendation = recommendation
    this.isLoading = false
  }
}
