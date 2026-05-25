if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    currentTab?: number;
    selectedMood?: number;
    showSuccess?: boolean;
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
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentTab.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedMood.purgeDependencyOnElmtId(rmElmtId);
        this.__showSuccess.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentTab.aboutToBeDeleted();
        this.__selectedMood.aboutToBeDeleted();
        this.__showSuccess.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
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
            Column.width('33%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 0;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('写日记');
            Text.fontColor(this.currentTab === 0 ? '#0A59F7' : '#666666');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('33%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 1;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('日记列表');
            Text.fontColor(this.currentTab === 1 ? '#0A59F7' : '#666666');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('33%');
            Column.height(50);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentTab = 2;
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('心情推荐');
            Text.fontColor(this.currentTab === 2 ? '#0A59F7' : '#666666');
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
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(60);
                        Column.height(60);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 0 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 0;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😊');
                        Text.fontSize(28);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(60);
                        Column.height(60);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 1 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 1;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😢');
                        Text.fontSize(28);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(60);
                        Column.height(60);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 2 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 2;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😠');
                        Text.fontSize(28);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(60);
                        Column.height(60);
                        Column.justifyContent(FlexAlign.Center);
                        Column.backgroundColor(this.selectedMood === 3 ? '#E3F2FD' : '#F5F5F5');
                        Column.borderRadius(8);
                        Column.onClick(() => {
                            this.selectedMood = 3;
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('😌');
                        Text.fontSize(28);
                    }, Text);
                    Text.pop();
                    Column.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('保存');
                        Button.width(200);
                        Button.height(50);
                        Button.margin({ top: 40 });
                        Button.onClick(() => {
                            this.showSuccess = true;
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
                        Text.create('暂无日记');
                        Text.fontSize(16);
                        Text.fontColor('#999999');
                        Text.margin({ top: 40 });
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
            if (this.currentTab === 2) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.layoutWeight(1);
                        Column.margin({ top: 20 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('适合的颜色：金色');
                        Text.fontSize(16);
                        Text.margin({ bottom: 16 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.margin({ bottom: 24 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width(60);
                        Row.height(60);
                        Row.backgroundColor('#FFD700');
                        Row.borderRadius(12);
                    }, Row);
                    Row.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('适合听的音乐');
                        Text.fontSize(18);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('《Happy》- Pharrell Williams');
                        Text.fontSize(16);
                        Text.fontColor('#0A59F7');
                        Text.margin({ bottom: 24 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('适合吃的食物');
                        Text.fontSize(18);
                        Text.fontWeight(FontWeight.Bold);
                        Text.margin({ bottom: 12 });
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('水果沙拉或冰淇淋');
                        Text.fontSize(16);
                        Text.fontColor('#4CAF50');
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
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.myapplication2", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
