/**
 * 核心配置文件
 * 你可以在这里修改贝壳数量、照片、祝福语音频、背景音乐等。
 */

// 每个贝壳对应的媒体文件（照片/视频）
// 支持格式：.jpg / .png / .mp4 / .webm / .mov
// 每个贝壳可以有不同的数量和顺序，按实际情况修改下面的数组
const shellMediaFiles = [
  ['photo_01_01.JPG', 'photo_01_02.MP4'],   // 贝壳 1
  ['photo_02_01.MP4'],   // 贝壳 2
  ['photo_03_01.JPG', 'photo_03_02.MP4', 'photo_03_03.JPG', 'photo_03_04.JPG', 'photo_03_05.JPG', 'photo_03_06.JPG', 'photo_03_07.MP4', 'photo_03_08.JPG', 'photo_03_09.JPG', 'photo_03_10.JPG', 'photo_03_11.JPG', 'photo_03_12.JPG', 'photo_03_13.jpg', 'photo_03_14.jpg'],   // 贝壳 3
  ['photo_04_01.JPG', 'photo_04_02.jpg', 'photo_04_03.jpg'],   // 贝壳 4
  ['photo_05_01.jpg', 'photo_05_02.jpg'],   // 贝壳 5
  ['photo_06_01.jpg'],   // 贝壳 6
  ['photo_07_01.JPG', 'photo_07_02.JPG', 'photo_07_03.JPG', 'photo_07_04.JPG', 'photo_07_05.JPG', 'photo_07_06.JPG', 'photo_07_07.JPG', 'photo_07_08.JPG', 'photo_07_09.MP4'],   // 贝壳 7
  ['photo_08_01.jpg'],   // 贝壳 8
  ['photo_09_01.MP4'],   // 贝壳 9
  ['photo_10_01.JPG', 'photo_10_02.JPG', 'photo_10_03.JPG'],   // 贝壳 10
  ['photo_11_01.JPG', 'photo_11_02.jpg', 'photo_11_03.jpg', 'photo_11_04.jpg', 'photo_11_05.JPG', 'photo_11_06.JPG', 'photo_11_07.JPG', 'photo_11_08.JPG'],   // 贝壳 11
  ['photo_12_01.JPG', 'photo_12_02.JPG', 'photo_12_03.MP4'],   // 贝壳 12
  ['photo_13_01.JPG', 'photo_13_02.JPG', 'photo_13_03.JPG', 'photo_13_04.JPG', 'photo_13_05.JPG', 'photo_13_06.JPG', 'photo_13_07.JPG', 'photo_13_08.JPG'],   // 贝壳 13
  ['photo_14_01.jpg', 'photo_14_02.jpg', 'photo_14_03.jpg', 'photo_14_04.jpg', 'photo_14_05.jpg', 'photo_14_06.jpg', 'photo_14_07.jpg', 'photo_14_08.jpg', 'photo_14_09.mp4', 'photo_14_10.mp4', 'photo_14_11.mp4'],   // 贝壳 14
  [  'photo_15_01.jpg',
  'photo_15_02.jpg',
  'photo_15_03.jpg',
  'photo_15_04.jpg',
  'photo_15_05.MP4',
  'photo_15_06.MP4',
  'photo_15_07.jpg',
  'photo_15_08.jpg',
  'photo_15_09.jpg',
  'photo_15_10.jpg',
  'photo_15_11.jpg',
  'photo_15_12.jpg',
  'photo_15_13.jpg',
  'photo_15_14.jpg',
  'photo_15_15.jpg',
  'photo_15_16.jpg',
  'photo_15_17.jpg',
  'photo_15_18.jpg',
  'photo_15_19.MP4',
  'photo_15_20.MP4'],   // 贝壳 15
  ['photo_16_01.jpg'],   // 贝壳 16
  ['photo_17_01.jpg'],   // 贝壳 17
  ['photo_18_01.jpg'],   // 贝壳 18
  ['photo_19_01.jpg'],   // 贝壳 19
  ['photo_20_01.jpg'],   // 贝壳 20
];

// 自动生成贝壳数据
const shellsData = shellMediaFiles.map((files, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: i + 1,
    shellImage: `assets/images/shells/shell_${num}.png`,
    media: files.map(f => `assets/images/photos/${f}`),
    texts: files.map((_, idx) => `第 ${i + 1} 个贝壳，第 ${idx + 1} 段文字`),
    voice: `assets/audio/voices/voice_${num}.mp3`
  };
});

// 进入回忆后轮流播放的背景音乐
const memoryPlaylist = [
  'assets/audio/bgm/memory_01.mp3',
  'assets/audio/bgm/memory_02.mp3',
  'assets/audio/bgm/memory_03.mp3'
];

// DOM 元素
const wavesAudio = document.getElementById('wavesAudio');
const bgmAudio = document.getElementById('bgmAudio');
const voiceAudio = document.getElementById('voiceAudio');
const sfxAudio = document.getElementById('sfxAudio');
const screenOverlay = document.getElementById('screenOverlay');

const homeScene = document.getElementById('homeScene');
const cassetteScene = document.getElementById('cassetteScene');
const shellsScene = document.getElementById('shellsScene');
const cakeScene = document.getElementById('cakeScene');
const brokenCassetteScene = document.getElementById('brokenCassetteScene');
const endingScene = document.getElementById('endingScene');

const enterBtn = document.getElementById('enterBtn');
const cassetteImg = document.getElementById('cassetteImg');
const cassetteAfterImg = document.getElementById('cassetteAfterImg');
const cassetteAfterLeft = document.getElementById('cassetteAfterLeft');
const cassetteAfterRight = document.getElementById('cassetteAfterRight');
const shellsContainer = document.getElementById('shellsContainer');
const shellsHint = document.getElementById('shellsHint');
const scrollStage = document.getElementById('scrollStage');
const shellsBgImg = document.getElementById('shellsBgImg');

const winWindow = document.getElementById('winWindow');
const winClose = document.getElementById('winClose');
const winPhoto = document.getElementById('winPhoto');
const winText = document.getElementById('winText');
const winCaption = document.getElementById('winCaption');
const photoPrev = document.getElementById('photoPrev');
const photoNext = document.getElementById('photoNext');

const matchLayer = document.getElementById('matchLayer');
const matchImg = document.getElementById('matchImg');
const candleZone = document.getElementById('candleZone');
const darkOverlay = document.getElementById('darkOverlay');
const eyeMask = document.getElementById('eyeMask');
const eyeOpenMask = document.getElementById('eyeOpenMask');

const brokenAfterLeft = document.getElementById('brokenAfterLeft');
const brokenAfterRight = document.getElementById('brokenAfterRight');
const storyText = document.getElementById('storyText');
const choiceButtons = document.getElementById('choiceButtons');
const repairBtn = document.getElementById('repairBtn');
const removeBtn = document.getElementById('removeBtn');

const cakeImg = document.getElementById('cakeImg');
const cakeAfterImg = document.getElementById('cakeAfterImg');
const cakeMask = document.getElementById('cakeMask');
const wishBtn = document.getElementById('wishBtn');
const wishHint = document.getElementById('wishHint');
const blowBtn = document.getElementById('blowBtn');
const birthdayText = document.getElementById('birthdayText');
const endingNecklace = document.getElementById('endingNecklace');
const endingMessage = document.getElementById('endingMessage');
const returnBtn = document.getElementById('returnBtn');

const wavesMuteBtn = document.getElementById('wavesMuteBtn');
const bgmVolDownBtn = document.getElementById('bgmVolDownBtn');
const bgmVolUpBtn = document.getElementById('bgmVolUpBtn');
const skipBtn = document.getElementById('skipBtn');

// 背景图尺寸配置（用于精确计算贝壳位置）
const BG_IMAGE_WIDTH = 1312;
const BG_IMAGE_HEIGHT = 3424;
const BG_TOP_MARGIN = 800;

// 状态
let currentScene = 'home';
let collectedShells = new Set();
let currentShellIndex = null;
let currentPhotoIndex = 0;
let memoryTrackIndex = 0;
let isCassetteClicked = false;
let hasFinished = sessionStorage.getItem('hasFinished') === 'true';
let wavesMuted = false;
let bgmVolume = 0.35;

// 初始化
function init() {
  bindEvents();
  if (shellsBgImg.complete) {
    setupShells();
  } else {
    shellsBgImg.addEventListener('load', setupShells, { once: true });
  }
}

// 绑定事件
function bindEvents() {
  enterBtn.addEventListener('click', enterCassetteScene);
  cassetteImg.addEventListener('click', clickCassette);
  winClose.addEventListener('click', closeWindow);
  photoPrev.addEventListener('click', () => changePhoto(-1));
  photoNext.addEventListener('click', () => changePhoto(1));
  blowBtn.addEventListener('click', blowCandle);
  wishBtn.addEventListener('click', startWish);

  // 贝壳页空白处点击显示提示
  shellsScene.addEventListener('click', (e) => {
    if (e.target === shellsScene || e.target.classList.contains('shells-bg') || e.target.classList.contains('scroll-stage') || e.target.classList.contains('shells-layer')) {
      showShellsHint();
    }
  });

  // 火柴拖拽
  setupMatchDrag();

  // 控制面板
  wavesMuteBtn.addEventListener('click', toggleWavesMute);
  bgmVolDownBtn.addEventListener('click', () => changeBgmVolume(-0.05));
  bgmVolUpBtn.addEventListener('click', () => changeBgmVolume(0.05));
  skipBtn.addEventListener('click', skipToCake);

  // ending 页
  endingNecklace.addEventListener('click', showEndingMessage);
  returnBtn.addEventListener('click', returnToHome);

  // 坏掉的随身听场景
  storyText.addEventListener('click', advanceStoryText);
  repairBtn.addEventListener('click', clickRepair);
  removeBtn.addEventListener('click', clickRemove);

  // 蛋糕页鼠标追踪
  cakeScene.addEventListener('mousemove', trackCakeMouse);
  cakeScene.addEventListener('mouseleave', resetCakeMouse);

  // 音频播放结束后的处理
  bgmAudio.addEventListener('ended', playNextMemoryTrack);
  voiceAudio.addEventListener('ended', () => {
    fadeAudio(bgmAudio, 1, 800);
  });
}

// 切换场景
function switchScene(sceneName) {
  [homeScene, cassetteScene, shellsScene, cakeScene, brokenCassetteScene, endingScene].forEach(s => s.classList.remove('active'));

  const sceneMap = {
    home: homeScene,
    cassette: cassetteScene,
    shells: shellsScene,
    cake: cakeScene,
    brokenCassette: brokenCassetteScene,
    ending: endingScene
  };

  if (sceneMap[sceneName]) {
    sceneMap[sceneName].classList.add('active');
    currentScene = sceneName;
  }
}

// 首页进入磁带页
function enterCassetteScene() {
  playAudio(wavesAudio, true, 0.4);
  switchScene('cassette');
}

// 点击磁带
function clickCassette() {
  if (isCassetteClicked) return;
  isCassetteClicked = true;

  // 隐藏 before，在原位置显示 after，同时显示左右两张 after
  cassetteImg.style.display = 'none';
  cassetteAfterImg.style.display = 'block';
  cassetteAfterLeft.style.display = 'block';
  cassetteAfterRight.style.display = 'block';

  // 屏幕变黑
  setTimeout(() => {
    screenOverlay.classList.add('active');

    // 海浪声变小，开始播放回忆背景音乐
    fadeAudio(wavesAudio, 0.1, 1500);

    setTimeout(() => {
      playNextMemoryTrack();
      fadeAudio(bgmAudio, 0.5, 300);

      // 进入贝壳页
      setTimeout(() => {
        switchScene('shells');
        screenOverlay.classList.remove('active');
        showShellsHint();
      }, 2000);
    }, 1500);
  }, 1200);
}

// 播放回忆背景音乐列表
function playNextMemoryTrack() {
  if (memoryPlaylist.length === 0) return;
  bgmAudio.src = memoryPlaylist[memoryTrackIndex];
  bgmAudio.loop = false;
  bgmAudio.volume = bgmVolume;
  bgmAudio.play().catch(() => {});
  memoryTrackIndex = (memoryTrackIndex + 1) % memoryPlaylist.length;
}

// 生成贝壳，均匀分布避免重叠
function setupShells() {
  shellsContainer.innerHTML = '';

  // 根据背景图实际显示高度计算
  const stageHeight = shellsBgImg.clientHeight || window.innerWidth * (BG_IMAGE_HEIGHT / BG_IMAGE_WIDTH);
  scrollStage.style.minHeight = `${stageHeight}px`;

  const rows = 10;
  const cols = 2;
  const positions = [];
  const bottomMargin = 120;
  const usableTop = BG_TOP_MARGIN;
  const usableHeight = Math.max(stageHeight - usableTop - bottomMargin, 100);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const topPx = usableTop + (r / rows) * usableHeight + Math.random() * (usableHeight / rows * 0.5);
      const colLeft = c === 0 ? 5 + Math.random() * 38 : 55 + Math.random() * 38;
      positions.push({ top: topPx, left: colLeft });
    }
  }

  // 打乱顺序
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  shellsData.forEach((shell, index) => {
    const el = document.createElement('img');
    el.src = shell.shellImage;
    el.className = 'shell-item';
    el.alt = '';
    el.dataset.index = index;

    const pos = positions[index];
    el.style.top = `${pos.top}px`;
    el.style.left = `${pos.left}%`;

    const scale = 1.5 + Math.random() * 0.5;
    const rotate = -25 + Math.random() * 50;
    el.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      openShell(index);
    });

    shellsContainer.appendChild(el);
  });
}

// 显示贝壳提示
function showShellsHint() {
  shellsHint.classList.add('show');
  setTimeout(() => {
    shellsHint.classList.remove('show');
  }, 3000);
}

// 打开贝壳弹窗
function openShell(index) {
  currentShellIndex = index;
  currentPhotoIndex = 0;
  const shell = shellsData[index];

  // 背景音乐变小
  fadeAudio(bgmAudio, 0.08, 200);

  // 播放祝福语音
  voiceAudio.volume = 1.0;
  voiceAudio.src = shell.voice;
  voiceAudio.play().catch(() => {});

  renderWindowPhoto();
  winWindow.classList.add('open');
}

// 渲染弹窗媒体（图片或视频）
function renderWindowPhoto() {
  const shell = shellsData[currentShellIndex];
  const media = shell.media;
  const src = media[currentPhotoIndex];
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  winPhoto.innerHTML = '';

  if (isVideo) {
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = false;
    video.volume = 0.4;
    video.playsInline = true;
    winPhoto.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onerror = () => {
      img.src = 'assets/images/placeholder.svg';
    };
    winPhoto.appendChild(img);
  }

  winCaption.textContent = `${currentPhotoIndex + 1} / ${media.length}`;
  photoPrev.disabled = currentPhotoIndex === 0;
  photoNext.disabled = currentPhotoIndex === media.length - 1;

  // 加载对应文本
  loadWinText();
}

// 加载弹窗文本
function loadWinText() {
  const shell = shellsData[currentShellIndex];
  const num = String(shell.id).padStart(2, '0');
  const idx = String(currentPhotoIndex + 1).padStart(2, '0');
  const textPath = `assets/texts/txt_${num}_${idx}.txt`;
  const defaultText = shell.texts[currentPhotoIndex] || '';

  winText.textContent = defaultText.trim();
  fetch(textPath)
    .then(res => res.ok ? res.text() : '')
    .then(text => {
      if (text.trim()) {
        winText.textContent = text.trim();
      }
    })
    .catch(() => {
      // 保持默认文字
    });
}

// 切换照片/视频
function changePhoto(dir) {
  const shell = shellsData[currentShellIndex];
  const newIndex = currentPhotoIndex + dir;
  if (newIndex >= 0 && newIndex < shell.media.length) {
    currentPhotoIndex = newIndex;
    renderWindowPhoto();
  }
}

// 关闭弹窗
function closeWindow() {
  winWindow.classList.remove('open');

  // 停止祝福语音
  voiceAudio.pause();
  voiceAudio.currentTime = 0;

  // 背景音乐恢复
  fadeAudio(bgmAudio, bgmVolume, 800);

  // 贝壳消失
  if (currentShellIndex !== null) {
    collectedShells.add(currentShellIndex);
    const shellEl = shellsContainer.querySelector(`[data-index="${currentShellIndex}"]`);
    if (shellEl) {
      shellEl.classList.add('collected');
    }
    currentShellIndex = null;
  }

  // 检查是否所有贝壳都被收集
  if (collectedShells.size >= shellsData.length) {
    setTimeout(startMatchScene, 800);
  }
}

// 控制面板：静音海浪
function toggleWavesMute() {
  wavesMuted = !wavesMuted;
  wavesAudio.muted = wavesMuted;
  wavesMuteBtn.classList.toggle('muted', wavesMuted);
}

// 控制面板：调节背景音乐音量
function changeBgmVolume(delta) {
  bgmVolume = Math.max(0, Math.min(1, bgmVolume + delta));
  bgmAudio.volume = bgmVolume;
  bgmVolDownBtn.style.opacity = bgmVolume <= 0 ? '0.2' : '1';
  bgmVolUpBtn.style.opacity = bgmVolume >= 1 ? '0.4' : '1';
}

// 控制面板：跳过所有贝壳，直接进入火柴场景
function skipToCake() {
  // 关闭弹窗
  if (winWindow.classList.contains('open')) {
    winWindow.classList.remove('open');
    voiceAudio.pause();
    voiceAudio.currentTime = 0;
  }

  // 收集所有贝壳
  shellsData.forEach((_, index) => {
    collectedShells.add(index);
    const shellEl = shellsContainer.querySelector(`[data-index="${index}"]`);
    if (shellEl) {
      shellEl.classList.add('collected');
    }
  });

  // 进入火柴场景
  setTimeout(startMatchScene, 500);
}

// 开始火柴场景
function startMatchScene() {
  // 画面变黑，海浪变大，音乐变小
  screenOverlay.classList.add('active');
  fadeAudio(bgmAudio, 0.05, 1500);
  fadeAudio(wavesAudio, 0.6, 1500);

  setTimeout(() => {
    switchScene('shells'); // 保持在贝壳页背景
    matchLayer.classList.add('active');
    screenOverlay.classList.remove('active');
    positionMatchCenter();
  }, 1800);
}

// 火柴居中初始位置
function positionMatchCenter() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2 + 150;
  updateMatchPosition(cx, cy);

  // 触发区域放在屏幕正中央（隐藏）
  const czLeft = window.innerWidth / 2 - 40;
  const czTop = window.innerHeight / 2 - 60;
  candleZone.style.left = `${czLeft}px`;
  candleZone.style.top = `${czTop}px`;
}

// 更新火柴位置
function updateMatchPosition(x, y) {
  matchImg.style.left = `${x - 25}px`;
  matchImg.style.top = `${y - 50}px`;

  // 更新黑暗蒙版的光圈位置
  const xPct = (x / window.innerWidth) * 100;
  const yPct = (y / window.innerHeight) * 100;
  darkOverlay.style.setProperty('--match-x', `${xPct}%`);
  darkOverlay.style.setProperty('--match-y', `${yPct}%`);
}

// 火柴拖拽逻辑
function setupMatchDrag() {
  let isDragging = false;

  const startDrag = (x, y) => {
    isDragging = true;
  };

  const moveDrag = (x, y) => {
    if (!isDragging) return;
    updateMatchPosition(x, y);
    checkIgnition();
  };

  const endDrag = () => {
    isDragging = false;
  };

  // 鼠标
  matchImg.addEventListener('mousedown', (e) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  });
  window.addEventListener('mousemove', (e) => {
    moveDrag(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', endDrag);

  // 触摸
  matchImg.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);
  }, { passive: false });
  window.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    moveDrag(t.clientX, t.clientY);
  }, { passive: false });
  window.addEventListener('touchend', endDrag);
}

// 检测是否点燃蜡烛
function checkIgnition() {
  const matchRect = matchImg.getBoundingClientRect();
  const candleRect = candleZone.getBoundingClientRect();

  const matchCenterX = matchRect.left + matchRect.width / 2;
  const matchCenterY = matchRect.top + matchRect.height / 2;

  if (
    matchCenterX >= candleRect.left &&
    matchCenterX <= candleRect.right &&
    matchCenterY >= candleRect.top &&
    matchCenterY <= candleRect.bottom
  ) {
    igniteCandle();
  }
}

// 点燃蜡烛
function igniteCandle() {
  // 火柴层淡出
  matchLayer.style.transition = 'opacity 0.8s ease';
  matchLayer.style.opacity = '0';

  setTimeout(() => {
    matchLayer.classList.remove('active');
    matchLayer.style.opacity = '';
    matchLayer.style.transition = '';

    // 切换到蛋糕页，此时 screenOverlay 仍 active（全黑）
    switchScene('cake');

    // 播放点火音效
    sfxAudio.src = 'assets/audio/sfx/ignite.mp3';
    sfxAudio.play().catch(() => {});

    // 2 秒后减小海浪，播放生日歌
    setTimeout(() => {
      fadeAudio(wavesAudio, 0.1, 1500);
      bgmAudio.pause();
      bgmAudio.src = 'assets/audio/bgm/birthday_song.mp3';
      bgmAudio.loop = true;
      playAudio(bgmAudio, true, 0.7);
    }, 2000);

    // 屏幕慢慢变亮，露出蛋糕页和蒙版
    setTimeout(() => {
      screenOverlay.classList.remove('active');
    }, 1500);
  }, 800);
}

// 点击许愿按钮
function startWish() {
  wishBtn.style.opacity = '0';
  wishBtn.style.pointerEvents = 'none';

  // 触发闭眼动画
  eyeMask.classList.add('active');
  // 强制重绘
  void eyeMask.offsetWidth;
  eyeMask.classList.add('closed');

  setTimeout(() => {
    // 闭眼完成后显示吹蜡烛按钮（在黑屏上）
    blowBtn.classList.add('show');
  }, 1500);
}

function showWishHint() {
  wishHint.classList.add('show');
  setTimeout(() => {
    wishHint.classList.remove('show');
    setTimeout(() => {
      blowBtn.classList.add('show');
    }, 1000);
  }, 2000);
}

// 吹蜡烛
function blowCandle() {
  blowBtn.classList.remove('show');

  // 移除闭眼蒙版，准备睁眼
  eyeMask.classList.remove('closed');
  eyeMask.classList.remove('active');

  // 触发睁眼动画
  eyeOpenMask.classList.add('active');
  void eyeOpenMask.offsetWidth;
  eyeOpenMask.classList.add('opening');

  // 睁眼过程中切换到 cake_after
  setTimeout(() => {
    cakeImg.style.display = 'none';
    cakeAfterImg.style.display = 'block';
    birthdayText.style.display = 'none';
    cakeMask.classList.add('fade-out');
  }, 600);

  // 睁眼完成后停顿 1 秒，然后变黑切换到坏掉的随身听场景
  setTimeout(() => {
    eyeOpenMask.classList.remove('opening');
    eyeOpenMask.classList.remove('active');

    // 停顿 1 秒
    setTimeout(() => {
      screenOverlay.classList.add('active');
      bgmAudio.pause();

      setTimeout(() => {
        switchScene('brokenCassette');
        startBrokenCassetteScene();
        screenOverlay.classList.remove('active');
      }, 1500);
    }, 1000);
  }, 1800);
}

// 开始坏掉的随身听场景
function startBrokenCassetteScene() {
  // 显示左右磁带图
  brokenAfterLeft.style.display = 'block';
  brokenAfterRight.style.display = 'block';
  brokenAfterLeft.style.opacity = '1';
  brokenAfterRight.style.opacity = '1';

  // 不播放背景音乐
  wavesAudio.pause();

  // 显示第一段文字
  currentStoryIndex = 0;
  storyText.textContent = storyTexts[0];
  storyText.classList.add('show');

  // 3 秒后自动进入第二段，或点击屏幕进入
  storyAutoTimer = setTimeout(() => {
    advanceStoryText();
  }, 3000);
}

// 故事文字
const storyTexts = [
  '咦，奇怪。怎么没声音了。',
  '该不会坏了吧。'
];
let currentStoryIndex = 0;
let storyAutoTimer = null;

function advanceStoryText() {
  if (storyAutoTimer) {
    clearTimeout(storyAutoTimer);
    storyAutoTimer = null;
  }

  currentStoryIndex++;
  if (currentStoryIndex < storyTexts.length) {
    storyText.classList.remove('show');
    setTimeout(() => {
      storyText.textContent = storyTexts[currentStoryIndex];
      storyText.classList.add('show');
      storyAutoTimer = setTimeout(() => {
        advanceStoryText();
      }, 3000);
    }, 500);
  } else {
    // 文字结束，显示选项按钮
    storyText.classList.remove('show');
    choiceButtons.style.display = 'flex';
    void choiceButtons.offsetWidth;
    choiceButtons.style.opacity = '1';
  }
}

// 修复按钮交互
let repairClickCount = 0;
function clickRepair() {
  repairClickCount++;
  // 尝试修复按钮缩小，摘下耳机按钮变大
  const repairScale = Math.max(0.6, 1 - repairClickCount * 0.15);
  const removeScale = Math.min(1.4, 0.8 + repairClickCount * 0.15);
  const repairOpacity = Math.max(0.4, 1 - repairClickCount * 0.15);
  const removeOpacity = Math.min(1, 0.6 + repairClickCount * 0.15);

  repairBtn.style.transform = `scale(${repairScale})`;
  repairBtn.style.opacity = repairOpacity;
  removeBtn.style.transform = `scale(${removeScale})`;
  removeBtn.style.opacity = removeOpacity;
}

// 摘下耳机
function clickRemove() {
  choiceButtons.style.display = 'none';

  // 左图先消失
  brokenAfterLeft.style.transition = 'opacity 1s ease';
  brokenAfterLeft.style.opacity = '0';

  setTimeout(() => {
    // 右图再消失
    brokenAfterRight.style.transition = 'opacity 1s ease';
    brokenAfterRight.style.opacity = '0';

    setTimeout(() => {
      // 切换到项链场景
      screenOverlay.classList.add('active');

      setTimeout(() => {
        switchScene('ending');
        startEndingScene();
        screenOverlay.classList.remove('active');
      }, 1500);
    }, 1200);
  }, 1200);
}

// 项链场景新流程
let endingTextIndex = 0;
const endingTexts = [
  '随身听怎么不见了。怪不得没声音。',
  '诶，这是什么。'
];

function startEndingScene() {
  endingNecklace.style.display = 'none';
  endingMessage.style.display = 'none';
  returnBtn.style.display = 'none';

  // 显示项链场景的文字提示
  storyText.textContent = endingTexts[0];
  storyText.classList.add('show');
  endingTextIndex = 0;

  // 点击屏幕进入下一段或出现项链
  endingScene.addEventListener('click', advanceEndingText, { once: true });
}

function advanceEndingText() {
  storyText.classList.remove('show');
  endingTextIndex++;

  if (endingTextIndex < endingTexts.length) {
    setTimeout(() => {
      storyText.textContent = endingTexts[endingTextIndex];
      storyText.classList.add('show');
      endingScene.addEventListener('click', advanceEndingText, { once: true });
    }, 500);
  } else {
    // 出现项链
    setTimeout(() => {
      storyText.classList.remove('show');
      endingNecklace.style.display = 'block';
      endingNecklace.style.opacity = '0';
      void endingNecklace.offsetWidth;
      endingNecklace.style.transition = 'opacity 1s ease';
      endingNecklace.style.opacity = '1';

      // 点击项链显示最终文字和 return 按钮
      endingNecklace.addEventListener('click', showEndingMessage, { once: true });
    }, 500);
  }
}

// 蛋糕页鼠标追踪
function trackCakeMouse(e) {
  const rect = cakeScene.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  const moveX = x * 20;
  const moveY = y * 20;
  cakeImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

function resetCakeMouse() {
  cakeImg.style.transform = 'translate(0, 0)';
}

// 显示 ending 祝福文字
function showEndingMessage() {
  endingMessage.style.display = 'flex';
  void endingMessage.offsetWidth;
  endingMessage.classList.add('show');
  returnBtn.style.display = 'block';
  void returnBtn.offsetWidth;
  returnBtn.classList.add('show');
}

// 返回首页
function returnToHome() {
  // 重置流程状态
  isCassetteClicked = false;
  cassetteImg.style.display = 'block';
  cassetteImg.classList.remove('glowing');
  cassetteAfterImg.style.display = 'none';
  cassetteAfterLeft.style.display = 'none';
  cassetteAfterRight.style.display = 'none';
  collectedShells.clear();
  setupShells();

  // 重置蛋糕页
  cakeImg.style.display = 'block';
  cakeAfterImg.style.display = 'none';
  cakeMask.classList.remove('fade-out');
  wishBtn.style.opacity = '1';
  wishBtn.style.pointerEvents = 'auto';
  wishHint.style.display = 'none';
  wishHint.classList.remove('show');
  blowBtn.classList.remove('show');
  birthdayText.style.display = 'block';

  // 重置眼动画
  eyeMask.classList.remove('active', 'closed');
  eyeOpenMask.classList.remove('active', 'opening');

  // 重置坏掉的随身听场景
  brokenAfterLeft.style.display = 'none';
  brokenAfterRight.style.display = 'none';
  brokenAfterLeft.style.opacity = '1';
  brokenAfterRight.style.opacity = '1';
  brokenAfterLeft.style.transition = '';
  brokenAfterRight.style.transition = '';
  storyText.classList.remove('show');
  choiceButtons.style.display = 'none';
  choiceButtons.style.opacity = '0';
  repairBtn.style.transform = '';
  repairBtn.style.opacity = '';
  removeBtn.style.transform = '';
  removeBtn.style.opacity = '';
  repairClickCount = 0;
  currentStoryIndex = 0;
  endingTextIndex = 0;
  if (storyAutoTimer) {
    clearTimeout(storyAutoTimer);
    storyAutoTimer = null;
  }

  // 重置 ending 页
  endingNecklace.style.display = 'block';
  endingNecklace.style.opacity = '';
  endingNecklace.style.transition = '';
  endingMessage.style.display = 'none';
  endingMessage.classList.remove('show');
  returnBtn.style.display = 'none';
  returnBtn.classList.remove('show');

  switchScene('home');
}

// 通用音频播放
function playAudio(audio, loop, volume) {
  audio.loop = loop;
  audio.volume = volume;
  audio.play().catch(() => {});
}

// 音频淡入淡出
function fadeAudio(audio, targetVolume, duration) {
  const startVolume = audio.volume || 0;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    audio.volume = startVolume + (targetVolume - startVolume) * progress;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// 启动
init();
