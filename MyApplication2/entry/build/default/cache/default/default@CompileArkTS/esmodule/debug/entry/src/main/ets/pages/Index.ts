if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    currentTab?: number;
    selectedMood?: number;
    showSuccess?: boolean;
    aiRecommendation?: string;
    isLoading?: boolean;
    diaryList?: string[];
    moodList?: number[];
    diaryCount?: number;
    moodStats?: string;
    diaryContent?: string;
    tabletConnected?: boolean;
    watchConnected?: boolean;
    syncStatus?: string;
    isFlowing?: boolean;
    flowTarget?: string;
    flowHistory?: string[];
    selectedBackground?: number;
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentTab = new ObservedPropertySimplePU(0, this, "currentTab");
        this.__selectedMood = new ObservedPropertySimplePU(0, this, "selectedMood");
        this.__showSuccess = new ObservedPropertySimplePU(false, this, "showSuccess");
        this.__aiRecommendation = new ObservedPropertySimplePU('点击下方按钮获取智能推荐', this, "aiRecommendation");
        this.__isLoading = new ObservedPropertySimplePU(false, this, "isLoading");
        this.__diaryList = new ObservedPropertyObjectPU([], this, "diaryList");
        this.__moodList = new ObservedPropertyObjectPU([], this, "moodList");
        this.__diaryCount = new ObservedPropertySimplePU(0, this, "diaryCount");
        this.__moodStats = new ObservedPropertySimplePU('', this, "moodStats");
        this.__diaryContent = new ObservedPropertySimplePU('', this, "diaryContent");
        this.__tabletConnected = new ObservedPropertySimplePU(false, this, "tabletConnected");
        this.__watchConnected = new ObservedPropertySimplePU(false, this, "watchConnected");
        this.__syncStatus = new ObservedPropertySimplePU('未同步', this, "syncStatus");
        this.__isFlowing = new ObservedPropertySimplePU(false, this, "isFlowing");
        this.__flowTarget = new ObservedPropertySimplePU('', this, "flowTarget");
        this.__flowHistory = new ObservedPropertyObjectPU([], this, "flowHistory");
        this.__selectedBackground = new ObservedPropertySimplePU(0, this, "selectedBackground");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.currentTab !== undefined) {
            this.currentTab = params.currentTab;
        }
        if (params.selectedMood !== undefined) {
            this.selectedMood = params.selectedMood;
        }
        if (params.showSuccess !== undefined) {
            this.showSuccess = params.showSuccess;
        }
        if (params.aiRecommendation !== undefined) {
            this.aiRecommendation = params.aiRecommendation;
        }
        if (params.isLoading !== undefined) {
            this.isLoading = params.isLoading;
        }
        if (params.diaryList !== undefined) {
            this.diaryList = params.diaryList;
        }
        if (params.moodList !== undefined) {
            this.moodList = params.moodList;
        }
        if (params.diaryCount !== undefined) {
            this.diaryCount = params.diaryCount;
        }
        if (params.moodStats !== undefined) {
            this.moodStats = params.moodStats;
        }
        if (params.diaryContent !== undefined) {
            this.diaryContent = params.diaryContent;
        }
        if (params.tabletConnected !== undefined) {
            this.tabletConnected = params.tabletConnected;
        }
        if (params.watchConnected !== undefined) {
            this.watchConnected = params.watchConnected;
        }
        if (params.syncStatus !== undefined) {
            this.syncStatus = params.syncStatus;
        }
        if (params.isFlowing !== undefined) {
            this.isFlowing = params.isFlowing;
        }
        if (params.flowTarget !== undefined) {
            this.flowTarget = params.flowTarget;
        }
        if (params.flowHistory !== undefined) {
            this.flowHistory = params.flowHistory;
        }
        if (params.selectedBackground !== undefined) {
            this.selectedBackground = params.selectedBackground;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentTab.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedMood.purgeDependencyOnElmtId(rmElmtId);
        this.__showSuccess.purgeDependencyOnElmtId(rmElmtId);
        this.__aiRecommendation.purgeDependencyOnElmtId(rmElmtId);
        this.__isLoading.purgeDependencyOnElmtId(rmElmtId);
        this.__diaryList.purgeDependencyOnElmtId(rmElmtId);
        this.__moodList.purgeDependencyOnElmtId(rmElmtId);
        this.__diaryCount.purgeDependencyOnElmtId(rmElmtId);
        this.__moodStats.purgeDependencyOnElmtId(rmElmtId);
        this.__diaryContent.purgeDependencyOnElmtId(rmElmtId);
        this.__tabletConnected.purgeDependencyOnElmtId(rmElmtId);
        this.__watchConnected.purgeDependencyOnElmtId(rmElmtId);
        this.__syncStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__isFlowing.purgeDependencyOnElmtId(rmElmtId);
        this.__flowTarget.purgeDependencyOnElmtId(rmElmtId);
        this.__flowHistory.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedBackground.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentTab.aboutToBeDeleted();
        this.__selectedMood.aboutToBeDeleted();
        this.__showSuccess.aboutToBeDeleted();
        this.__aiRecommendation.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__diaryList.aboutToBeDeleted();
        this.__moodList.aboutToBeDeleted();
        this.__diaryCount.aboutToBeDeleted();
        this.__moodStats.aboutToBeDeleted();
        this.__diaryContent.aboutToBeDeleted();
        this.__tabletConnected.aboutToBeDeleted();
        this.__watchConnected.aboutToBeDeleted();
        this.__syncStatus.aboutToBeDeleted();
        this.__isFlowing.aboutToBeDeleted();
        this.__flowTarget.aboutToBeDeleted();
        this.__flowHistory.aboutToBeDeleted();
        this.__selectedBackground.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentTab: ObservedPropertySimplePU<number>;
    get currentTab() {
        return this.__currentTab.get();
    }
    set currentTab(newValue: number) {
        this.__currentTab.set(newValue);
    }
    private __selectedMood: ObservedPropertySimplePU<number>;
    get selectedMood() {
        return this.__selectedMood.get();
    }
    set selectedMood(newValue: number) {
        this.__selectedMood.set(newValue);
    }
    private __showSuccess: ObservedPropertySimplePU<boolean>;
    get showSuccess() {
        return this.__showSuccess.get();
    }
    set showSuccess(newValue: boolean) {
        this.__showSuccess.set(newValue);
    }
    private __aiRecommendation: ObservedPropertySimplePU<string>;
    get aiRecommendation() {
        return this.__aiRecommendation.get();
    }
    set aiRecommendation(newValue: string) {
        this.__aiRecommendation.set(newValue);
    }
    private __isLoading: ObservedPropertySimplePU<boolean>;
    get isLoading() {
        return this.__isLoading.get();
    }
    set isLoading(newValue: boolean) {
        this.__isLoading.set(newValue);
    }
    private __diaryList: ObservedPropertyObjectPU<string[]>;
    get diaryList() {
        return this.__diaryList.get();
    }
    set diaryList(newValue: string[]) {
        this.__diaryList.set(newValue);
    }
    private __moodList: ObservedPropertyObjectPU<number[]>;
    get moodList() {
        return this.__moodList.get();
    }
    set moodList(newValue: number[]) {
        this.__moodList.set(newValue);
    }
    private __diaryCount: ObservedPropertySimplePU<number>;
    get diaryCount() {
        return this.__diaryCount.get();
    }
    set diaryCount(newValue: number) {
        this.__diaryCount.set(newValue);
    }
    private __moodStats: ObservedPropertySimplePU<string>;
    get moodStats() {
        return this.__moodStats.get();
    }
    set moodStats(newValue: string) {
        this.__moodStats.set(newValue);
    }
    private __diaryContent: ObservedPropertySimplePU<string>;
    get diaryContent() {
        return this.__diaryContent.get();
    }
    set diaryContent(newValue: string) {
        this.__diaryContent.set(newValue);
    }
    private __tabletConnected: ObservedPropertySimplePU<boolean>;
    get tabletConnected() {
        return this.__tabletConnected.get();
    }
    set tabletConnected(newValue: boolean) {
        this.__tabletConnected.set(newValue);
    }
    private __watchConnected: ObservedPropertySimplePU<boolean>;
    get watchConnected() {
        return this.__watchConnected.get();
    }
    set watchConnected(newValue: boolean) {
        this.__watchConnected.set(newValue);
    }
    private __syncStatus: ObservedPropertySimplePU<string>;
    get syncStatus() {
        return this.__syncStatus.get();
    }
    set syncStatus(newValue: string) {
        this.__syncStatus.set(newValue);
    }
    private __isFlowing: ObservedPropertySimplePU<boolean>;
    get isFlowing() {
        return this.__isFlowing.get();
    }
    set isFlowing(newValue: boolean) {
        this.__isFlowing.set(newValue);
    }
    private __flowTarget: ObservedPropertySimplePU<string>;
    get flowTarget() {
        return this.__flowTarget.get();
    }
    set flowTarget(newValue: string) {
        this.__flowTarget.set(newValue);
    }
    private __flowHistory: ObservedPropertyObjectPU<string[]>;
    get flowHistory() {
        return this.__flowHistory.get();
    }
    set flowHistory(newValue: string[]) {
        this.__flowHistory.set(newValue);
    }
    private __selectedBackground: ObservedPropertySimplePU<number>;
    get selectedBackground() {
        return this.__selectedBackground.get();
    }
    set selectedBackground(newValue: number) {
        this.__selectedBackground.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(this.getBackgroundColor());
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('心情日记');
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 20, bottom: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('20%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 0;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('写日记');
            Text.fontColor(this.currentTab === 0 ? '#0A59F7' : '#666666');
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('20%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 1;
                this.updateStats();
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('日记列表');
            Text.fontColor(this.currentTab === 1 ? '#0A59F7' : '#666666');
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('20%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 2;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('心情推荐');
            Text.fontColor(this.currentTab === 2 ? '#0A59F7' : '#666666');
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('20%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 3;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('设备管理');
            Text.fontColor(this.currentTab === 3 ? '#0A59F7' : '#666666');
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('20%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 4;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('设置');
            Text.fontColor(this.currentTab === 4 ? '#0A59F7' : '#666666');
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentTab === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('选择心情');
                        Text.fontSize(16);
                        Text.margin({ top: 20, bottom: 16 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.justifyContent(FlexAlign.SpaceEvenly);
                        Row.margin({ bottom: 12 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 0 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 0;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😊');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 1 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 1;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😢');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 2 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 2;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😠');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 3 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 3;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😌');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 4 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 4;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('🤩');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 5 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 5;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😰');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.justifyContent(FlexAlign.SpaceEvenly);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 6 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 6;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😴');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 7 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 7;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😊');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(50);
                        Column.height(50);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 8 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 8;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😤');
                        Text.fontSize(24);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('保存');
                        Button.width(200);
                        Button.height(50);
                        Button.margin({ top: 30 });
                        Button.onClick(() => {
                            this.saveDiary();
                        });
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.showSuccess) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('保存成功！');
                                    Text.fontSize(18);
                                    Text.fontColor('#4CAF50');
                                    Text.margin({ top: 16 });
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentTab === 1) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('心情统计');
                        Text.fontSize(18);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ top: 20, bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.moodStats);
                        Text.fontSize(14);
                        Text.fontColor('#666666');
                        Text.width('90%');
                        Text.margin({ bottom: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('日记列表');
                        Text.fontSize(18);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 16 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.diaryCount === 0) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('暂无日记');
                                    Text.fontSize(16);
                                    Text.fontColor('#999999');
                                    Text.margin({ top: 20 });
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Column.create();
                                    Column.width('100%');
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    ForEach.create();
                                    const forEachItemGenFunction = (_item, index: number) => {
                                        const diary = _item;
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Column.create();
                                            Column.width('90%');
                                            Column.padding(12);
                                            Column.backgroundColor('#F5F5F5');
                                            Column.borderRadius(8);
                                            Column.margin({ bottom: 8 });
                                        }, Column);
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Text.create(diary);
                                            Text.fontSize(14);
                                            Text.width('100%');
                                        }, Text);
                                        Text.pop();
                                        Column.pop();
                                    };
                                    this.forEachUpdateFunction(elmtId, this.diaryList, forEachItemGenFunction, undefined, true, false);
                                }, ForEach);
                                ForEach.pop();
                                Column.pop();
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentTab === 2) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('智能推荐');
                        Text.fontSize(20);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ top: 20, bottom: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.aiRecommendation);
                        Text.fontSize(14);
                        Text.fontColor('#333333');
                        Text.width('90%');
                        Text.margin({ bottom: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel(this.isLoading ? '正在分析...' : '获取推荐');
                        Button.width(200);
                        Button.height(50);
                        Button.enabled(!this.isLoading);
                        Button.onClick(() => {
                            this.getAIRecommendation();
                        });
                    }, Button);
                    Button.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentTab === 3) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('设备管理');
                        Text.fontSize(20);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ top: 20, bottom: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('90%');
                        Column.margin({ bottom: 24 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('📱 当前设备');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.padding(16);
                        Row.backgroundColor('#F5F5F5');
                        Row.borderRadius(12);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.alignItems(HorizontalAlign.Start);
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('手机');
                        Text.fontSize(14);
                        Text.fontWeight(FontWeight.Medium);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('在线');
                        Text.fontSize(12);
                        Text.fontColor('#4CAF50');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('✓');
                        Text.fontSize(20);
                        Text.fontColor('#4CAF50');
                    }, Text);
                    Text.pop();
                    Row.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('90%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('🔍 可用设备');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.padding(16);
                        Row.backgroundColor('#F5F5F5');
                        Row.borderRadius(12);
                        Row.margin({ bottom: 12 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.alignItems(HorizontalAlign.Start);
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('平板');
                        Text.fontSize(14);
                        Text.fontWeight(FontWeight.Medium);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.tabletConnected ? '已连接' : '未连接');
                        Text.fontSize(12);
                        Text.fontColor(this.tabletConnected ? '#4CAF50' : '#999999');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel(this.tabletConnected ? '断开' : '连接');
                        Button.fontSize(12);
                        Button.width(60);
                        Button.height(30);
                        Button.backgroundColor(this.tabletConnected ? '#FF5722' : '#0A59F7');
                        Button.onClick(() => {
                            this.tabletConnected = !this.tabletConnected;
                            this.updateSyncStatus();
                        });
                    }, Button);
                    Button.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.padding(16);
                        Row.backgroundColor('#F5F5F5');
                        Row.borderRadius(12);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.alignItems(HorizontalAlign.Start);
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('手表');
                        Text.fontSize(14);
                        Text.fontWeight(FontWeight.Medium);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.watchConnected ? '已连接' : '未连接');
                        Text.fontSize(12);
                        Text.fontColor(this.watchConnected ? '#4CAF50' : '#999999');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel(this.watchConnected ? '断开' : '连接');
                        Button.fontSize(12);
                        Button.width(60);
                        Button.height(30);
                        Button.backgroundColor(this.watchConnected ? '#FF5722' : '#0A59F7');
                        Button.onClick(() => {
                            this.watchConnected = !this.watchConnected;
                            this.updateSyncStatus();
                        });
                    }, Button);
                    Button.pop();
                    Row.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('90%');
                        Column.padding(16);
                        Column.backgroundColor('#F5F5F5');
                        Column.borderRadius(12);
                        Column.margin({ top: 20 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('📊 数据同步');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.margin({ bottom: 12 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('同步状态：');
                        Text.fontSize(14);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.syncStatus);
                        Text.fontSize(14);
                        Text.fontColor(this.syncStatus === '已同步' ? '#4CAF50' : '#999999');
                    }, Text);
                    Text.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('立即同步');
                        Button.width('100%');
                        Button.height(40);
                        Button.enabled(this.tabletConnected || this.watchConnected);
                        Button.onClick(() => {
                            this.syncData();
                        });
                    }, Button);
                    Button.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('90%');
                        Column.padding(16);
                        Column.backgroundColor('#F5F5F5');
                        Column.borderRadius(12);
                        Column.margin({ top: 20 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('🔄 界面流转');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('将当前界面流转到其他设备');
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.justifyContent(FlexAlign.SpaceBetween);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('45%');
                        Column.height(60);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.tabletConnected ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            if (this.tabletConnected) {
                                this.flowTo('平板');
                            }
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('流转到平板');
                        Text.fontSize(14);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('45%');
                        Column.height(60);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.watchConnected ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            if (this.watchConnected) {
                                this.flowTo('手表');
                            }
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('流转到手表');
                        Text.fontSize(14);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.isFlowing) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('正在流转到 ' + this.flowTarget + '...');
                                    Text.fontSize(12);
                                    Text.fontColor('#0A59F7');
                                    Text.margin({ top: 12 });
                                }, Text);
                                Text.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.flowHistory.length > 0) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Column.create();
                                    Column.width('90%');
                                    Column.padding(16);
                                    Column.backgroundColor('#F5F5F5');
                                    Column.borderRadius(12);
                                    Column.margin({ top: 20 });
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('📋 流转历史');
                                    Text.fontSize(16);
                                    Text.fontWeight(FontWeight.Bold);
                                    Text.margin({ bottom: 12 });
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Column.create();
                                    Column.width('100%');
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    ForEach.create();
                                    const forEachItemGenFunction = _item => {
                                        const record = _item;
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Text.create(record);
                                            Text.fontSize(12);
                                            Text.fontColor('#666666');
                                            Text.margin({ bottom: 8 });
                                        }, Text);
                                        Text.pop();
                                    };
                                    this.forEachUpdateFunction(elmtId, this.flowHistory, forEachItemGenFunction);
                                }, ForEach);
                                ForEach.pop();
                                Column.pop();
                                Column.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('💡 提示：连接设备后可以实现数据同步和无缝流转');
                        Text.fontSize(12);
                        Text.fontColor('#999999');
                        Text.margin({ top: 20 });
                        Text.width('90%');
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.currentTab === 4) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('个性化设置');
                        Text.fontSize(20);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ top: 20, bottom: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('90%');
                        Column.padding(16);
                        Column.backgroundColor('#F5F5F5');
                        Column.borderRadius(12);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('🎨 背景颜色');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 16 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('选择您喜欢的背景颜色');
                        Text.fontSize(12);
                        Text.fontColor('#666666');
                        Text.margin({ bottom: 20 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.justifyContent(FlexAlign.SpaceEvenly);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 0;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#FFFFFF');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 0 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('默认');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 1;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#E3F2FD');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 1 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡蓝');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 2;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#FCE4EC');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 2 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡粉');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 3;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#E8F5E9');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 3 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡绿');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.justifyContent(FlexAlign.SpaceEvenly);
                        Row.margin({ top: 12 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 4;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#FFF9C4');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 4 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡黄');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 5;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#F3E5F5');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 5 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡紫');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 6;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#FFF3E0');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 6 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡橙');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.onClick(() => {
                            this.selectedBackground = 7;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(40);
                        Column.height(40);
                        Column.backgroundColor('#E0F7FA');
                        Column.borderRadius(8);
                        Column.border({ width: 2, color: this.selectedBackground === 7 ? '#0A59F7' : '#E0E0E0' });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('淡青');
                        Text.fontSize(10);
                        Text.fontColor('#666666');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('90%');
                        Column.padding(16);
                        Column.backgroundColor('#F5F5F5');
                        Column.borderRadius(12);
                        Column.margin({ top: 20 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('📋 当前选择');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.getBackgroundName());
                        Text.fontSize(14);
                        Text.fontColor('#666666');
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('💡 提示：背景颜色将应用到整个应用');
                        Text.fontSize(12);
                        Text.fontColor('#999999');
                        Text.margin({ top: 20 });
                        Text.width('90%');
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    saveDiary() {
        let moodText = this.getMoodText(this.selectedMood);
        let now = new Date();
        let time = now.getHours() + ':' + now.getMinutes();
        let diary = '📅 ' + time + ' | ' + moodText;
        this.diaryList.push(diary);
        this.moodList.push(this.selectedMood);
        this.diaryCount = this.diaryCount + 1;
        this.showSuccess = true;
    }
    updateStats() {
        if (this.diaryCount === 0) {
            this.moodStats = '还没有记录，快去写日记吧！';
            return;
        }
        let happy = 0;
        let sad = 0;
        let angry = 0;
        let calm = 0;
        for (let i = 0; i < this.moodList.length; i++) {
            let mood = this.moodList[i];
            if (mood === 0 || mood === 4 || mood === 7) {
                happy = happy + 1;
            }
            else if (mood === 1 || mood === 5) {
                sad = sad + 1;
            }
            else if (mood === 2 || mood === 8) {
                angry = angry + 1;
            }
            else {
                calm = calm + 1;
            }
        }
        this.moodStats = '总记录：' + this.diaryCount + ' 次\n';
        this.moodStats += '😊 开心：' + happy + ' 次\n';
        this.moodStats += '😢 难过：' + sad + ' 次\n';
        this.moodStats += '😠 生气：' + angry + ' 次\n';
        this.moodStats += '😌 平静：' + calm + ' 次';
    }
    getMoodText(mood: number): string {
        if (mood === 0)
            return '😊开心';
        if (mood === 1)
            return '😢难过';
        if (mood === 2)
            return '😠生气';
        if (mood === 3)
            return '😌平静';
        if (mood === 4)
            return '🤩兴奋';
        if (mood === 5)
            return '😰焦虑';
        if (mood === 6)
            return '😴疲惫';
        if (mood === 7)
            return '😊幸福';
        return '😤烦躁';
    }
    getAIRecommendation() {
        this.isLoading = true;
        let moodText = this.getMoodText(this.selectedMood);
        let recommendation = '根据您【' + moodText + '】的心情：\n\n';
        if (this.selectedMood === 0 || this.selectedMood === 4 || this.selectedMood === 7) {
            recommendation += '🎨 适合的颜色：金色\n温暖明亮的颜色能延续好心情\n\n';
            recommendation += '🎵 适合听的音乐：\n《Happy》- Pharrell Williams\n\n';
            recommendation += '🍜 适合吃的食物：\n水果沙拉或冰淇淋\n\n';
            recommendation += '💡 建议：和朋友聚会、看喜剧电影';
        }
        else if (this.selectedMood === 1 || this.selectedMood === 5) {
            recommendation += '🎨 适合的颜色：天蓝色\n平静安宁的颜色抚慰心灵\n\n';
            recommendation += '🎵 适合听的音乐：\n《Fix You》- Coldplay\n\n';
            recommendation += '🍜 适合吃的食物：\n热巧克力或蛋糕\n\n';
            recommendation += '💡 建议：写日记、听音乐、散步';
        }
        else if (this.selectedMood === 2 || this.selectedMood === 8) {
            recommendation += '🎨 适合的颜色：绿色\n自然舒缓的颜色平复情绪\n\n';
            recommendation += '🎵 适合听的音乐：\n《Weightless》- Marconi Union\n\n';
            recommendation += '🍜 适合吃的食物：\n坚果或全麦面包\n\n';
            recommendation += '💡 建议：深呼吸、冥想、做运动';
        }
        else if (this.selectedMood === 6) {
            recommendation += '🎨 适合的颜色：淡蓝色\n宁静的颜色帮助休息\n\n';
            recommendation += '🎵 适合听的音乐：\n轻音乐或白噪音\n\n';
            recommendation += '🍜 适合吃的食物：\n热牛奶或燕麦粥\n\n';
            recommendation += '💡 建议：早点休息、泡个热水澡';
        }
        else {
            recommendation += '🎨 适合的颜色：淡紫色\n优雅宁静的颜色保持平和\n\n';
            recommendation += '🎵 适合听的音乐：\n《River Flows in You》- Yiruma\n\n';
            recommendation += '🍜 适合吃的食物：\n绿茶配点心\n\n';
            recommendation += '💡 建议：读书、品茶、做瑜伽';
        }
        this.aiRecommendation = recommendation;
        this.isLoading = false;
    }
    updateSyncStatus() {
        if (this.tabletConnected || this.watchConnected) {
            this.syncStatus = '待同步';
        }
        else {
            this.syncStatus = '未同步';
        }
    }
    syncData() {
        if (this.diaryCount === 0) {
            this.syncStatus = '无数据';
            return;
        }
        this.syncStatus = '同步中...';
        let deviceCount = 0;
        if (this.tabletConnected) {
            deviceCount = deviceCount + 1;
        }
        if (this.watchConnected) {
            deviceCount = deviceCount + 1;
        }
        this.syncStatus = '已同步 ' + this.diaryCount + ' 条日记到 ' + deviceCount + ' 台设备';
    }
    flowTo(device: string) {
        this.isFlowing = true;
        this.flowTarget = device;
        let now = new Date();
        let time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        let tabName = '';
        if (this.currentTab === 0) {
            tabName = '写日记';
        }
        else if (this.currentTab === 1) {
            tabName = '日记列表';
        }
        else if (this.currentTab === 2) {
            tabName = '心情推荐';
        }
        else {
            tabName = '设备管理';
        }
        let record = '📅 ' + time + ' | 流转到' + device + ' | 页面：' + tabName;
        this.flowHistory.unshift(record);
        if (this.flowHistory.length > 5) {
            this.flowHistory.pop();
        }
        this.isFlowing = false;
        this.flowTarget = '';
    }
    getBackgroundColor(): string {
        if (this.selectedBackground === 0)
            return '#FFFFFF';
        if (this.selectedBackground === 1)
            return '#E3F2FD';
        if (this.selectedBackground === 2)
            return '#FCE4EC';
        if (this.selectedBackground === 3)
            return '#E8F5E9';
        if (this.selectedBackground === 4)
            return '#FFF9C4';
        if (this.selectedBackground === 5)
            return '#F3E5F5';
        if (this.selectedBackground === 6)
            return '#FFF3E0';
        return '#E0F7FA';
    }
    getBackgroundName(): string {
        if (this.selectedBackground === 0)
            return '默认白色';
        if (this.selectedBackground === 1)
            return '淡蓝色';
        if (this.selectedBackground === 2)
            return '淡粉色';
        if (this.selectedBackground === 3)
            return '淡绿色';
        if (this.selectedBackground === 4)
            return '淡黄色';
        if (this.selectedBackground === 5)
            return '淡紫色';
        if (this.selectedBackground === 6)
            return '淡橙色';
        return '淡青色';
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
