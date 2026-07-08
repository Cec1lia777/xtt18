# 🎂 生日惊喜照片书

一个可爱复古风格的生日惊喜网页，支持照片翻页、音频播放、弹幕祝福语。

## 功能

- 📖 照片书翻页：按时间顺序浏览照片
- 🎵 音频祝福：每张照片对应一段 MP3 和文字
- 💬 弹幕祝福：页面漂浮简短祝福语
- 📱 响应式：手机和电脑都能打开

## 文件结构

```
.
├── index.html          # 页面结构
├── style.css           # 样式（可爱复古风）
├── script.js           # 交互逻辑
├── README.md           # 本说明
└── assets/
    ├── images/         # 放照片
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ...
    └── audio/          # 放音频
        ├── voice1.mp3
        ├── voice2.mp3
        └── ...
```

## 如何替换内容

### 1. 替换照片

把你的照片放进 `assets/images/` 文件夹，建议命名为 `photo1.jpg`、`photo2.jpg`……

然后打开 `script.js`，找到 `albumData`，修改 `image` 字段：

```js
{
  image: 'assets/images/photo1.jpg',
  date: '2020 年',
  audio: 'assets/audio/voice1.mp3',
  text: '这里写这段音频对应的文字内容。'
}
```

### 2. 替换音频

把 MP3 文件放进 `assets/audio/` 文件夹，建议命名为 `voice1.mp3`、`voice2.mp3`……

在 `script.js` 中修改对应条目的 `audio` 字段。

### 3. 修改文字

- 每页音频文字：修改 `albumData` 里的 `text`
- 弹幕文字：修改 `danmakuTexts` 数组
- 封面标题/副标题：修改 `index.html`
- 结尾页文字：修改 `index.html` 中 `endingText` 的内容

### 4. 修改照片时间

修改 `albumData` 里的 `date` 字段，例如 `'2020 年夏天'`、`'我们认识的第一天'`。

## 如何本地预览

### 方法 1：直接双击打开

用浏览器打开 `index.html` 文件即可。

### 方法 2：用本地服务器（推荐）

在终端进入项目文件夹，运行：

```bash
python3 -m http.server 8000
```

然后用浏览器打开：http://localhost:8000

## 如何部署成网址（GitHub Pages）

1. 注册/登录 [GitHub](https://github.com)
2. 新建一个仓库，名字例如 `birthday-surprise`
3. 把本项目所有文件上传到这个仓库
4. 进入仓库 Settings → Pages
5. Source 选择 `Deploy from a branch`，Branch 选择 `main` / `root`
6. 等待 1–2 分钟，会得到一个 `https://你的用户名.github.io/birthday-surprise` 的链接

对方点击链接就能在手机/电脑上打开。

## 常见问题

**Q：照片显示不出来？**  
A：检查照片文件名和 `script.js` 里的 `image` 路径是否一致，注意大小写。

**Q：音频点击没声音？**  
A：浏览器通常需要用户先点击页面，才能播放音频。先点一下页面任意位置，再点播放按钮。

**Q：想加更多照片？**  
A：在 `albumData` 数组里继续添加对象即可，注意照片和音频文件要对应好。

**Q：想换配色？**  
A：打开 `style.css`，修改 `:root` 里的颜色变量。

## 温馨提示

- 照片建议提前裁剪成统一比例（如 4:3 或 1:1），效果更好。
- 音频文件尽量小，建议控制在 30 秒以内。
- 提前在手机上测试一遍翻页和播放效果。

祝你朋友生日快乐！🎉
