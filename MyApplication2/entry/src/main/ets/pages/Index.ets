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
  @State tabletConnected: boolean = false
  @State watchConnected: boolean = false
  @State syncStatus: string = '未同步'
  @State isFlowing: boolean = false
  @State flowTarget: string = ''
  @State flowHistory: string[] = []
  @State selectedBackground: number = 0

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
            .fontSize(12)
        }
        .width('20%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 0
        })

        Column() {
          Text('日记列表')
            .fontColor(this.currentTab === 1 ? '#0A59F7' : '#666666')
            .fontSize(12)
        }
        .width('20%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 1
          this.updateStats()
        })

        Column() {
          Text('心情推荐')
            .fontColor(this.currentTab === 2 ? '#0A59F7' : '#666666')
            .fontSize(12)
        }
        .width('20%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 2
        })

        Column() {
          Text('设备管理')
            .fontColor(this.currentTab === 3 ? '#0A59F7' : '#666666')
            .fontSize(12)
        }
        .width('20%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 3
        })

        Column() {
          Text('设置')
            .fontColor(this.currentTab === 4 ? '#0A59F7' : '#666666')
            .fontSize(12)
        }
        .width('20%')
        .height(50)
        .justifyContent(FlexAlign.Center)
        .onClick(() => {
          this.currentTab = 4
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

      if (this.currentTab === 3) {
        Column() {
          Text('设备管理')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 20, bottom: 20 })

          Column() {
            Text('📱 当前设备')
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 12 })

            Row() {
              Column() {
                Text('手机')
                  .fontSize(14)
                  .fontWeight(FontWeight.Medium)
                Text('在线')
                  .fontSize(12)
                  .fontColor('#4CAF50')
                  .margin({ top: 4 })
              }
              .alignItems(HorizontalAlign.Start)
              .layoutWeight(1)

              Text('✓')
                .fontSize(20)
                .fontColor('#4CAF50')
            }
            .width('100%')
            .padding(16)
            .backgroundColor('#F5F5F5')
            .borderRadius(12)
          }
          .width('90%')
          .margin({ bottom: 24 })

          Column() {
            Text('🔍 可用设备')
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 12 })

            Row() {
              Column() {
                Text('平板')
                  .fontSize(14)
                  .fontWeight(FontWeight.Medium)
                Text(this.tabletConnected ? '已连接' : '未连接')
                  .fontSize(12)
                  .fontColor(this.tabletConnected ? '#4CAF50' : '#999999')
                  .margin({ top: 4 })
              }
              .alignItems(HorizontalAlign.Start)
              .layoutWeight(1)

              Button(this.tabletConnected ? '断开' : '连接')
                .fontSize(12)
                .width(60)
                .height(30)
                .backgroundColor(this.tabletConnected ? '#FF5722' : '#0A59F7')
                .onClick(() => {
                  this.tabletConnected = !this.tabletConnected
                  this.updateSyncStatus()
                })
            }
            .width('100%')
            .padding(16)
            .backgroundColor('#F5F5F5')
            .borderRadius(12)
            .margin({ bottom: 12 })

            Row() {
              Column() {
                Text('手表')
                  .fontSize(14)
                  .fontWeight(FontWeight.Medium)
                Text(this.watchConnected ? '已连接' : '未连接')
                  .fontSize(12)
                  .fontColor(this.watchConnected ? '#4CAF50' : '#999999')
                  .margin({ top: 4 })
              }
              .alignItems(HorizontalAlign.Start)
              .layoutWeight(1)

              Button(this.watchConnected ? '断开' : '连接')
                .fontSize(12)
                .width(60)
                .height(30)
                .backgroundColor(this.watchConnected ? '#FF5722' : '#0A59F7')
                .onClick(() => {
                  this.watchConnected = !this.watchConnected
                  this.updateSyncStatus()
                })
            }
            .width('100%')
            .padding(16)
            .backgroundColor('#F5F5F5')
            .borderRadius(12)
          }
          .width('90%')

          Column() {
            Text('📊 数据同步')
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 12 })

            Row() {
              Text('同步状态：')
                .fontSize(14)
              Text(this.syncStatus)
                .fontSize(14)
                .fontColor(this.syncStatus === '已同步' ? '#4CAF50' : '#999999')
            }
            .width('100%')
            .margin({ bottom: 12 })

            Button('立即同步')
              .width('100%')
              .height(40)
              .enabled(this.tabletConnected || this.watchConnected)
              .onClick(() => {
                this.syncData()
              })
          }
          .width('90%')
          .padding(16)
          .backgroundColor('#F5F5F5')
          .borderRadius(12)
          .margin({ top: 20 })

          Column() {
            Text('🔄 界面流转')
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 12 })

            Text('将当前界面流转到其他设备')
              .fontSize(12)
              .fontColor('#666666')
              .margin({ bottom: 12 })

            Row() {
              Column() {
                Text('流转到平板')
                  .fontSize(14)
              }
              .width('45%')
              .height(60)
              .justifyContent(FlexAlign.Center)
              .backgroundColor(this.tabletConnected ? '#E3F2FD' : '#F5F5F5')
              .borderRadius(8)
              .onClick(() => {
                if (this.tabletConnected) {
                  this.flowTo('平板')
                }
              })

              Column() {
                Text('流转到手表')
                  .fontSize(14)
              }
              .width('45%')
              .height(60)
              .justifyContent(FlexAlign.Center)
              .backgroundColor(this.watchConnected ? '#E3F2FD' : '#F5F5F5')
              .borderRadius(8)
              .onClick(() => {
                if (this.watchConnected) {
                  this.flowTo('手表')
                }
              })
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceBetween)

            if (this.isFlowing) {
              Text('正在流转到 ' + this.flowTarget + '...')
                .fontSize(12)
                .fontColor('#0A59F7')
                .margin({ top: 12 })
            }
          }
          .width('90%')
          .padding(16)
          .backgroundColor('#F5F5F5')
          .borderRadius(12)
          .margin({ top: 20 })

          if (this.flowHistory.length > 0) {
            Column() {
              Text('📋 流转历史')
                .fontSize(16)
                .fontWeight(FontWeight.Bold)
                .margin({ bottom: 12 })

              Column() {
                ForEach(this.flowHistory, (record: string) => {
                  Text(record)
                    .fontSize(12)
                    .fontColor('#666666')
                    .margin({ bottom: 8 })
                })
              }
              .width('100%')
            }
            .width('90%')
            .padding(16)
            .backgroundColor('#F5F5F5')
            .borderRadius(12)
            .margin({ top: 20 })
          }

          Text('💡 提示：连接设备后可以实现数据同步和无缝流转')
            .fontSize(12)
            .fontColor('#999999')
            .margin({ top: 20 })
            .width('90%')
        }
        .width('100%')
        .layoutWeight(1)
      }

      if (this.currentTab === 4) {
        Column() {
          Text('个性化设置')
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
            .margin({ top: 20, bottom: 20 })

          Column() {
            Text('🎨 背景颜色')
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 16 })

            Text('选择您喜欢的背景颜色')
              .fontSize(12)
              .fontColor('#666666')
              .margin({ bottom: 20 })

            Row() {
              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#FFFFFF')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 0 ? '#0A59F7' : '#E0E0E0' })

                Text('默认')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 0
              })

              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#E3F2FD')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 1 ? '#0A59F7' : '#E0E0E0' })

                Text('淡蓝')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 1
              })

              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#FCE4EC')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 2 ? '#0A59F7' : '#E0E0E0' })

                Text('淡粉')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 2
              })

              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#E8F5E9')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 3 ? '#0A59F7' : '#E0E0E0' })

                Text('淡绿')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 3
              })
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceEvenly)

            Row() {
              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#FFF9C4')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 4 ? '#0A59F7' : '#E0E0E0' })

                Text('淡黄')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 4
              })

              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#F3E5F5')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 5 ? '#0A59F7' : '#E0E0E0' })

                Text('淡紫')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 5
              })

              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#FFF3E0')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 6 ? '#0A59F7' : '#E0E0E0' })

                Text('淡橙')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 6
              })

              Column() {
                Column() {
                  Text('')
                }
                .width(40)
                .height(40)
                .backgroundColor('#E0F7FA')
                .borderRadius(8)
                .border({ width: 2, color: this.selectedBackground === 7 ? '#0A59F7' : '#E0E0E0' })

                Text('淡青')
                  .fontSize(10)
                  .fontColor('#666666')
                  .margin({ top: 4 })
              }
              .onClick(() => {
                this.selectedBackground = 7
              })
            }
            .width('100%')
            .justifyContent(FlexAlign.SpaceEvenly)
            .margin({ top: 12 })
          }
          .width('90%')
          .padding(16)
          .backgroundColor('#F5F5F5')
          .borderRadius(12)

          Column() {
            Text('📋 当前选择')
              .fontSize(16)
              .fontWeight(FontWeight.Bold)
              .margin({ bottom: 12 })

            Text(this.getBackgroundName())
              .fontSize(14)
              .fontColor('#666666')
          }
          .width('90%')
          .padding(16)
          .backgroundColor('#F5F5F5')
          .borderRadius(12)
          .margin({ top: 20 })

          Text('💡 提示：背景颜色将应用到整个应用')
            .fontSize(12)
            .fontColor('#999999')
            .margin({ top: 20 })
            .width('90%')
        }
        .width('100%')
        .layoutWeight(1)
      }
    }
    .width('100%')
    .height('100%')
    .backgroundColor(this.getBackgroundColor())
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

  updateSyncStatus() {
    if (this.tabletConnected || this.watchConnected) {
      this.syncStatus = '待同步'
    } else {
      this.syncStatus = '未同步'
    }
  }

  syncData() {
    if (this.diaryCount === 0) {
      this.syncStatus = '无数据'
      return
    }
    
    this.syncStatus = '同步中...'
    
    let deviceCount = 0
    if (this.tabletConnected) {
      deviceCount = deviceCount + 1
    }
    if (this.watchConnected) {
      deviceCount = deviceCount + 1
    }
    
    this.syncStatus = '已同步 ' + this.diaryCount + ' 条日记到 ' + deviceCount + ' 台设备'
  }

  flowTo(device: string) {
    this.isFlowing = true
    this.flowTarget = device

    let now = new Date()
    let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
    let tabName = ''
    
    if (this.currentTab === 0) {
      tabName = '写日记'
    } else if (this.currentTab === 1) {
      tabName = '日记列表'
    } else if (this.currentTab === 2) {
      tabName = '心情推荐'
    } else {
      tabName = '设备管理'
    }

    let record = '📅 ' + time + ' | 流转到' + device + ' | 页面：' + tabName
    this.flowHistory.unshift(record)

    if (this.flowHistory.length > 5) {
      this.flowHistory.pop()
    }

    this.isFlowing = false
    this.flowTarget = ''
  }

  getBackgroundColor(): string {
    if (this.selectedBackground === 0) return '#FFFFFF'
    if (this.selectedBackground === 1) return '#E3F2FD'
    if (this.selectedBackground === 2) return '#FCE4EC'
    if (this.selectedBackground === 3) return '#E8F5E9'
    if (this.selectedBackground === 4) return '#FFF9C4'
    if (this.selectedBackground === 5) return '#F3E5F5'
    if (this.selectedBackground === 6) return '#FFF3E0'
    return '#E0F7FA'
  }

  getBackgroundName(): string {
    if (this.selectedBackground === 0) return '默认白色'
    if (this.selectedBackground === 1) return '淡蓝色'
    if (this.selectedBackground === 2) return '淡粉色'
    if (this.selectedBackground === 3) return '淡绿色'
    if (this.selectedBackground === 4) return '淡黄色'
    if (this.selectedBackground === 5) return '淡紫色'
    if (this.selectedBackground === 6) return '淡橙色'
    return '淡青色'
  }
}
