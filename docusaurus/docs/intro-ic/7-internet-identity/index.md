---
# Display h2 to h4 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
title: Internet Identity
image: './img/astronaut.jpg'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, Internet Computer, Internet Computer Protocol, Web3, Crypto, Blockchain, 区块链, 加密货币, DApp, 去中心化, 去中心化应用, developer, startup, Identity, Internet Identity, DID ]
---

# 注册互联网身份 {#how-to-register}

![identity](./img/astronaut.jpg)

## 介绍 {#introduction}

由总部在瑞士的 DFINITY 基金会研发开创的互联网计算机代表了最先进的第三代区块链技术，可以将分布于全世界的独立数据中心组合成一个可以无限扩容的虚拟主机，以去中心化的方式为开发者提供存储和算力。自从2021年5月10日主网上线以来，`互联网计算机` (`Internet Computer`, 或者 `IC`)的生态迅猛发展，已经涌现出了几百个`去中心化应用` (`Decentralized app`，或者 `Dapp`)，开始逐步颠覆各个互联网传统领域。

要想使用构建在 IC 这条公链上的应用，首先需要注册一个`互联网身份` (`Internet Identity`, 或者 `II`)。在传统的中心化互联网平台上，Apple ID, Gmail, Facebook Connect, 支付宝，微信经常被用来验证用户身份，方便新用户登录网站。在 IC 上，对应的 DID (Digital ID) 系统则是 II。有了 II，就可以解锁 IC 生态上的所有应用。

## 注册 {#register-ii}

II 注册主要通过 Chrome 浏览器进行，不同的硬件设备能工提供的识别方式不同。

### 第一步：打开互联网身份 Dapp {#open-ii}

在 Chrome 浏览器（务必在 Chrome 浏览器中打开！不要再微信中或者其他浏览器中打开，以免出现各种奇怪问题。）中输入以下地址：
https://identity.ic0.app 

第一次访问这个网页（包括任何构建在 IC 上的网页），会看到安装 `Loading the Service Worker` 的提示。这是正常系统操作，稍候几秒安转完成后，就会看到网页。

### 第二步：创建一个新的互联网身份 {#create-ii}

点击下图页面中 `Create New` 按钮，开始创建新的 II 身份。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii2.jpg'/></div>

### 第三步：创建安全密钥 {#create-passkey}

点击下图中 `Create Passkey` 按钮创建安全密钥。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii3.jpg'/></div>

此处需要根据不同硬件执行不同的操作，以下根据不同设备进行说明。

#### Windows 设备 {#create-on-windows}

Windows 设备，通常可以使用 Windows Hello 功能创建万能密钥。

- **使用 PIN 码创建**

  当选择使用 PIN 码创建时，将会弹出如下对话框。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/winhellopin.jpg'/></div>

  输入 PIN 码（Windows 登录时的 PIN 码），即可创建万能密钥。

- **使用面容识别**

  如果使用的是带有面容识别硬件的 Windows 系统（通常会出现在带有面容识别登录的 Windows 笔记本设备中），会优先提示使用面容识别，进行登录。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/winhello.png'/></div>

- **使用 YubiKey**

  如果您拥有 YubiKey，可以再弹出的 `Windows Hello` 对话框中选择使用 `安全密钥`，通过 YubiKey 创建密钥。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/winyubikey.jpg'/></div>

  点击确定，进入下一步。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/winyubikey2.jpg'/></div>

  当看到这个提示时，插入 YubiKey（如果已经插入，则系统不会弹出这一步窗口）。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/yubikey.png'/></div>

  插入 YubiKey 后，自动进入下一步如图。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/winyubikey3.jpg'/></div>

  输入 YubiKey 的 PIN 码，此 PIN 码为 YubiKey 自身的PIN码，不是 Windows 的 PIN 码。

  <div style={{textAlign: 'center'}}><img src='/img/internet-identity/winyubikey4.jpg'/></div>

  完成触摸后，将进行下一步。

#### Android 设备 {#create-on-android}

Android 设备可以使用手机自带的安全认证功能（如指纹、面部识别）创建密钥。

此处点击选择 `在此设备上使用屏幕锁定`（不同硬件系统提示可能略有不同，此处笔者使用的是三星 S20 Ultra 手机。）

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii4.jpg'/></div>

进行指纹识别/面容识别后，即可创建密钥。

#### iOS 设备 {#create-on-ios}

***待补充***

### 第四步：输入验证码 {#complete-captcha}

这个页面主要用于判断是否为机器人操作，请输入正确的验证码。需要特别注意的是，验证码区分大小写。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii5.jpg'/></div>

### 第五步：记录互联网身份号 {#copy-ii-anchor}

这个页面提示你记下最新创建的属于你的互联网身份号，它将作为互联网身份标识，在其它设备登录时使用，请务必保存。点击 `Copy` 按钮，可以自动将互联网身份号保存在设备黏贴板中。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii6.jpg'/></div>

### 完成 {#finish-registration}

到达这个页面，您的互联网身份已经创建完毕。别急着关闭页面，虽然互联网身份已经创建完成，但是没有任何备份措施。按照互联网身份的设计思路，有两个办法可以加强安全性：[添加更多的设备](#add-passkey)和[创建恢复短语](#recovery-phrase)，下面我们将分别介绍这两种方法。

## 创建恢复短语 {#recovery-phrase}

恢复短语能够让我们在多个设备上登录本次创建的互联网身份，也是在丢失或更换硬件设备后，找回互联网身份的最终途径，推荐在创建完互联网身份后的第一时间，创建恢复短语。

### 第一步：开始创建恢复短语 {#start-recovery-phrase}

如果仍然停留在之前界面，点击页面上方条幅中 `Create` 按钮，可以开始创建恢复短语。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii7.jpg'/></div>

如果已经退出，再次通过该设备登录账号后，系统将会提示你创建恢复短语，如下界面，点击 `Create Recovery Phrase`，开始创建恢复短语。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/recovery1.jpg'/></div>

### 第二步：创建恢复短语 {#create-recovery-phrase}

页面将跳转到短语页面如下图，请务必保存所有短语内容，可以点击 `Copy` 按钮 ，自动将短语保存在设备的黏贴板中。勾选单选框 `I have safely stored my recovery phrase.`，并点击 `Continue`。

⚠️ 警告 ⚠️
> 任何人如果知道了这个助记词，就可以获取这个身份地址相关联的应用和数据。最好用一支笔把助字抄在一张纸上，然后把这张纸保存在一个只有你可以接触到的地方，譬如，保险柜。如果条件允许，尽量不要让这个助记词出现在除了这个界面以外的任何互联网平台上。最安全的信息保管方式，就是不要让它接触到互联网。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/recovery2.jpg'/></div>

### 第三步：验证恢复短语 {#verify-recovery-phrase}

此处需要验证刚才存储的恢复短语，以确保存储的短语准确无误。在下图中，填写对应的短语。并点击 `Finish`。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/recovery3.jpg'/></div>

### 完成 {#finish-recovery-phrase}

再次来到这个页面，顶部提示创建恢复短语的条幅已不再显示。此时，你已完成恢复短语的创建。再次提醒，请务必妥善保管您的恢复短语。现在你已经可以安全的畅游整个 IC 网络了。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/ii8.jpg'/></div>

## 添加设备 {#add-passkey}

作为一个最佳实践，每个身份地址都应该可以通过起码两部设备登录。每个身份地址可以关联最多8部设备。

假设上述步骤里设置好的设备是 A，我们在第二部移动设备 B 里也关联这个身份地址。

### 第一步：开始添加设备 {#start-new-passkey}

在管理界面中滑动到 `Passkeys` 区域，点击 `Add new Passkey` 按钮。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/add1.jpg'/></div>

### 第二步：在新设备中打开添加链接 {#visit-url-on-new-device}

点击 `Add new Passkey` 后将会跳转至如下界面：

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/add2.jpg'/></div>

在设备 B 中通过 Chrome 浏览器（请不要使用微信直接打开链接）打开上图中的链接。

> Tips: 可以通过手机扫码（手机自带的扫码功能，而非微信或支付宝提供的扫码工具），选择 Chrome 浏览器打开链接。

在设备 B 中打开链接后，会提示创建安全密钥，请参考注册互联网身份章节中 [第三步：创建安全密钥](#create-passkey) 步骤，完成密钥创建。

### 第三步：输入验证码确认添加 {#verify-new-passkey}

此时，设备 B 中会跳转至如下界面，请记下 `Verification Code`。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/add4.jpg'/></div>

在设备 A 中，将会跳转至如下界面，请输入在设备 B 中记录的 `Verification Code`，并点击 `Verify Passkey` 按钮继续。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/add3.jpg'/></div>

### 完成 {#finish-new-passkey}
完成后将跳转至如下界面，点击继续后，实现新设备绑定。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/add5.jpg'/></div>

## 重命名设备 {#rename-passkey}

在互联网身份中同时绑定了多个设备时，有可能发生两个设备昵称都是 `Chrome` 的情况。这会造成不知道到其中的设备指向自己的哪一个硬件，所以建议绑定设备后，设置一个昵称，便于区分管理。

在管理界面中滑动到 `Passkeys` 区域，点击页面中想要更改的安全密钥右侧 `...`按钮，在弹出的菜单中选择 `Rename`，修改昵称。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/rename1.jpg'/></div>

输入你想要修改的昵称，并点击 `Next`。完成安全密钥的重命名。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/rename2.jpg'/></div>

## 删除设备 {#delete-passkey}

如果更换了自己的硬件设备，或者丢失了硬件设备，请最快速度通过其它已经认证的设备登录互联网身份页面，并删除丢失或弃用的硬件安全密钥。因为得到设备的人有可能可以通过该设备获得你互联网身份的管理权限。

在管理界面中滑动到 `Passkeys` 区域，点击页面中想要更改的安全密钥右侧 `...` 按钮，在弹出的菜单中选择 `Remove`，删除密钥。

<div style={{textAlign: 'center'}}><img src='/img/internet-identity/rename1.jpg'/></div>

## FAQ

### 什么是安全密钥

安全密钥是存储在所属设备的硬件安全芯片中的唯一公钥/私钥对，它可以方便且安全的替代密码，允许您通过解锁设备登录 dapps（例如使用 FaceID 或 TouchID） 

### 当创建了安全密钥后会发生什么

您的设备将提示您进行身份验证（使用 FaceID, TouchID 或其他解锁设备的方法），一遍它可以创建并保存一个唯一的加密密钥对，您将使用该密钥对访问互联网身份。它并不会在 II 或其他基于 II 的 dapps 上共享您的个人资料，也没有任何软件会下载到您的硬件设备上。
