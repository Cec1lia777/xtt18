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
  ['photo_04_01.JPG', 'photo_04_02.jpg', 'photo_04_03.jpg', 'photo_04_04.jpg'],   // 贝壳 4
  ['photo_05_01.jpg', 'photo_05_02.jpg'],   // 贝壳 5
  ['photo_06_01.jpg', 'photo_06_02.jpg'],   // 贝壳 6
  ['photo_07_01.JPG', 'photo_07_02.JPG', 'photo_07_03.JPG', 'photo_07_04.JPG', 'photo_07_05.JPG', 'photo_07_06.JPG', 'photo_07_07.JPG', 'photo_07_08.JPG', 'photo_07_09.MP4'],   // 贝壳 7
  ['photo_08_01.jpg'],   // 贝壳 8
  ['photo_09_01.MP4'],   // 贝壳 9
  ['photo_10_01.JPG', 'photo_10_02.JPG', 'photo_10_03.JPG'],   // 贝壳 10
  ['photo_11_01.JPG', 'photo_11_02.jpg', 'photo_11_03.jpg', 'photo_11_04.jpg', 'photo_11_05.JPG', 'photo_11_06.JPG', 'photo_11_07.JPG', 'photo_11_08.JPG'],   // 贝壳 11
  ['photo_12_01.JPG', 'photo_12_02.JPG', 'photo_12_03.MP4'],   // 贝壳 12
  ['photo_13_01.JPG', 'photo_13_02.JPG', 'photo_13_03.JPG', 'photo_13_04.JPG', 'photo_13_05.JPG', 'photo_13_06.JPG', 'photo_13_07.JPG', 'photo_13_08.JPG', 'photo_13_09.jpg'],   // 贝壳 13
  ['photo_14_01.jpg', 'photo_14_02.jpg', 'photo_14_03.jpg', 'photo_14_04.jpg', 'photo_14_05.jpg', 'photo_14_06.jpg', 'photo_14_07.jpg', 'photo_14_08.jpg', 'photo_14_09.mp4', 'photo_14_10.mp4', 'photo_14_11.mp4'],   // 贝壳 14
  ['photo_15_01.jpg', 'photo_15_02.jpg', 'photo_15_03.jpg', 'photo_15_04.jpg', 'photo_15_05.mp4', 'photo_15_06.mp4', 'photo_15_07.jpg', 'photo_15_08.jpg', 'photo_15_09.jpg', 'photo_15_10.jpg', 'photo_15_11.jpg', 'photo_15_12.jpg', 'photo_15_13.jpg', 'photo_15_14.jpg', 'photo_15_15.jpg', 'photo_15_16.jpg', 'photo_15_17.jpg', 'photo_15_18.jpg', 'photo_15_19.mp4', 'photo_15_20.mp4'],   // 贝壳 15
  ['photo_16_01.jpg', 'photo_16_02.jpg', 'photo_16_03.jpg', 'photo_16_04.jpg'],   // 贝壳 16
  ['photo_17_01.jpg', 'photo_17_02.jpg'],   // 贝壳 17
  ['photo_18_01.jpg', 'photo_18_02.jpg', 'photo_18_03.jpg', 'photo_18_04.jpg', 'photo_18_05.jpg', 'photo_18_06.jpg', 'photo_18_07.jpg', 'photo_18_08.jpg', 'photo_18_09.jpg', 'photo_18_10.jpg', 'photo_18_11.jpg', 'photo_18_12.jpg', 'photo_18_13.jpg', 'photo_18_14.jpg', 'photo_18_15.mp4', 'photo_18_16.mp4', 'photo_18_17.mp4', 'photo_18_18.mp4', 'photo_18_19.mp4', 'photo_18_20.MP4', 'photo_18_21.jpg'],   // 贝壳 18
  ['photo_19_01.jpg', 'photo_19_02.jpg', 'photo_19_03.jpg', 'photo_19_04.jpg', 'photo_19_05.jpg', 'photo_19_06.jpg'],   // 贝壳 19
  ['photo_20_01.jpg', 'photo_20_02.jpg', 'photo_20_03.jpg', 'photo_20_04.jpg', 'photo_20_05.jpg', 'photo_20_06.jpg', 'photo_20_07.jpg', 'photo_20_08.jpg', 'photo_20_09.jpg', 'photo_20_10.jpg'],   // 贝壳 20
  ['photo_21_01.jpg', 'photo_21_02.mp4', 'photo_21_03.mp4', 'photo_21_04.jpg', 'photo_21_05.jpg', 'photo_21_06.jpg'],   // 贝壳 21
];

// 每个贝壳对应的人名（按顺序 1-21）
const shellNames = [
  'czy', 'eason', 'fyc', 'lj', 'luke',
  'ly', 'rjr', 'ss', 'szj', 'tlr',
  'wrx', 'xjz', 'zyx', 'zyz', 'wsa',
  'CLY', 'lcy', 'wzy', 'yjx', 'ydd',
  'lyc'
];

// 自动生成贝壳数据
const shellsData = shellMediaFiles.map((files, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: i + 1,
    name: shellNames[i] || `贝壳 ${i + 1}`,
    shellImage: `assets/images/shells/shell_${num}.png`,
    media: files.map(f => `assets/images/photos/${f}`),
    texts: files.map(() => ''),
    voice: `assets/audio/voices/voice_${num}.mp3`
  };
});

// 进入回忆后轮流播放的背景音乐
const memoryPlaylist = [
  'assets/audio/bgm/memory_01.mp3',
  'assets/audio/bgm/memory_02.mp3',
  'assets/audio/bgm/memory_03.mp3'
];

// 每个视频文件的默认音量（0-1）
const videoVolumes = {
  'photo_02_01': 1.0,   // 贝壳 2 视频 louder
  'photo_09_01': 0.25,  // 贝壳 9 视频 quieter
};

// 需要增益的祝福语音（shell id -> gain multiplier）
const voiceGains = {
  16: 2.0,  // cly 的声音放大 2 倍
};

let voiceAudioCtx = null;
let voiceGainNode = null;

// DOM 元素
const wavesAudio = document.getElementById('wavesAudio');
const bgmAudio = document.getElementById('bgmAudio');
const voiceAudio = document.getElementById('voiceAudio');
const sfxAudio = document.getElementById('sfxAudio');
const birthdayAudio = document.getElementById('birthdayAudio');
const screenOverlay = document.getElementById('screenOverlay');

const homeScene = document.getElementById('homeScene');
const cassetteScene = document.getElementById('cassetteScene');
const shellsScene = document.getElementById('shellsScene');
const cakeScene = document.getElementById('cakeScene');
const brokenCassetteScene = document.getElementById('brokenCassetteScene');
const endingScene = document.getElementById('endingScene');
const galleryScene = document.getElementById('galleryScene');

const sceneMap = {
  home: homeScene,
  cassette: cassetteScene,
  shells: shellsScene,
  cake: cakeScene,
  brokenCassette: brokenCassetteScene,
  ending: endingScene,
  gallery: galleryScene
};

const enterBtn = document.getElementById('enterBtn');
const menuToggle = document.getElementById('menuToggle');
const globalMenu = document.getElementById('globalMenu');
const menuClose = document.getElementById('menuClose');
const galleryBack = document.getElementById('galleryBack');
const galleryGrid = document.getElementById('galleryGrid');
const galleryDetail = document.getElementById('galleryDetail');
const galleryDetailClose = document.getElementById('galleryDetailClose');
const galleryDetailShell = document.getElementById('galleryDetailShell');
const galleryDetailName = document.getElementById('galleryDetailName');
const galleryVoiceBtn = document.getElementById('galleryVoiceBtn');
const galleryDetailMedia = document.getElementById('galleryDetailMedia');
const galleryDetailText = document.getElementById('galleryDetailText');
const galleryDetailCaption = document.getElementById('galleryDetailCaption');
const galleryDetailPrev = document.getElementById('galleryDetailPrev');
const galleryDetailNext = document.getElementById('galleryDetailNext');
const cassetteImg = document.getElementById('cassetteImg');
const cassetteAfterImg = document.getElementById('cassetteAfterImg');
const cassetteAfterLeft = document.getElementById('cassetteAfterLeft');
const cassetteAfterRight = document.getElementById('cassetteAfterRight');
const shellsContainer = document.getElementById('shellsContainer');
const shellsHint = document.getElementById('shellsHint');
const scrollStage = document.getElementById('scrollStage');
const shellsBgImg = document.getElementById('shellsBgImg');

const winWindow = document.getElementById('winWindow');
const winTitle = document.querySelector('.win-title');
const winClose = document.getElementById('winClose');
const winPhoto = document.getElementById('winPhoto');
const winText = document.getElementById('winText');
const winCaption = document.getElementById('winCaption');
const videoVolume = document.getElementById('videoVolume');
const videoVolDown = document.getElementById('videoVolDown');
const videoVolUp = document.getElementById('videoVolUp');
const videoVolValue = document.getElementById('videoVolValue');
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
const cakeHint = document.getElementById('cakeHint');
const wishBtn = document.getElementById('wishBtn');
const wishHint = document.getElementById('wishHint');
const blowBtn = document.getElementById('blowBtn');
const birthdayText = document.getElementById('birthdayText');
const endingNecklace = document.getElementById('endingNecklace');
const endingLetter = document.getElementById('endingLetter');
const endingBottle = document.getElementById('endingBottle');
const giftGroup = document.getElementById('giftGroup');
const letterOverlay = document.getElementById('letterOverlay');
const endingMessage = document.getElementById('endingMessage');
const returnBtn = document.getElementById('returnBtn');
const meowBtn = document.getElementById('meowBtn');

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
let previousScene = 'home';
let collectedShells = new Set();
let currentShellIndex = null;
let currentPhotoIndex = 0;
let memoryTrackIndex = 0;
let isCassetteClicked = false;
let hasFinished = sessionStorage.getItem('hasFinished') === 'true';
let wavesMuted = false;
let bgmVolume = 0.35;
let galleryShellIndex = null;
let galleryPhotoIndex = 0;
let galleryVoicePlaying = false;

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
  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => clickMenuItem(btn.dataset.scene));
  });
  cassetteImg.addEventListener('click', clickCassette);
  winClose.addEventListener('click', closeWindow);
  photoPrev.addEventListener('click', () => changePhoto(-1));
  photoNext.addEventListener('click', () => changePhoto(1));
  blowBtn.addEventListener('click', blowCandle);
  wishBtn.addEventListener('click', startWish);
  letterOverlay.addEventListener('click', closeLetterZoom);

  // 画廊
  galleryBack.addEventListener('click', backFromGallery);
  galleryDetailClose.addEventListener('click', closeGalleryDetail);
  galleryDetailPrev.addEventListener('click', () => changeGalleryPhoto(-1));
  galleryDetailNext.addEventListener('click', () => changeGalleryPhoto(1));
  galleryVoiceBtn.addEventListener('click', toggleGalleryVoice);

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

  // 弹窗视频音量控制
  videoVolDown.addEventListener('click', () => changeVideoVolume(-0.1));
  videoVolUp.addEventListener('click', () => changeVideoVolume(0.1));

  // ending 页
  returnBtn.addEventListener('click', closeGiftView);
  meowBtn.addEventListener('click', returnToHome);

  // 坏掉的随身听场景
  storyText.addEventListener('click', advanceStoryText);
  repairBtn.addEventListener('click', clickRepair);
  removeBtn.addEventListener('click', clickRemove);

  // 蛋糕页鼠标追踪
  cakeScene.addEventListener('mousemove', trackCakeMouse);
  cakeScene.addEventListener('mouseleave', resetCakeMouse);

  // 蛋糕页点击空白处彩蛋
  cakeScene.addEventListener('click', handleCakeEasterEgg);

  // 音频播放结束后的处理
  bgmAudio.addEventListener('ended', playNextMemoryTrack);
  voiceAudio.addEventListener('ended', () => {
    if (currentScene === 'gallery') {
      galleryVoicePlaying = false;
      galleryVoiceBtn.textContent = '▶ 播放祝福';
      galleryVoiceBtn.classList.remove('playing');
    } else {
      fadeAudio(bgmAudio, 1, 800);
    }
  });

  // 音频解锁：第一次用户交互时解除浏览器自动播放限制
  document.addEventListener('click', unlockAudio, { once: true });
  document.addEventListener('touchstart', unlockAudio, { once: true });
}

// 音频解锁：第一次用户交互时解锁浏览器音频上下文，不干扰现有 audio 元素
function unlockAudio() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
  const buffer = ctx.createBuffer(1, 1, 22050);
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start();
}

// 切换场景
function switchScene(sceneName) {
  if (sceneName !== currentScene) {
    previousScene = currentScene;
  }

  [homeScene, cassetteScene, shellsScene, cakeScene, brokenCassetteScene, endingScene, galleryScene].forEach(s => s.classList.remove('active'));

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

// 初始化祝福语音的 Web Audio 增益节点
function setupVoiceGain(gainValue = 1.0) {
  if (voiceAudioCtx) {
    if (voiceGainNode) voiceGainNode.gain.value = gainValue;
    return;
  }
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    voiceAudioCtx = new AudioContext();
    const source = voiceAudioCtx.createMediaElementSource(voiceAudio);
    voiceGainNode = voiceAudioCtx.createGain();
    source.connect(voiceGainNode);
    voiceGainNode.connect(voiceAudioCtx.destination);
    voiceGainNode.gain.value = gainValue;
  } catch (e) {
    voiceAudioCtx = null;
    voiceGainNode = null;
  }
}

// 打开贝壳弹窗
function openShell(index) {
  currentShellIndex = index;
  currentPhotoIndex = 0;
  const shell = shellsData[index];

  // 背景音乐变小
  fadeAudio(bgmAudio, 0.08, 200);

  // 播放祝福语音
  const gain = voiceGains[shell.id] || 1.0;
  setupVoiceGain(gain);
  voiceAudio.volume = 1.0;
  voiceAudio.onerror = () => {
    // 若 .mp3 无法播放（实际是 M4A），回退到 .m4a
    if (voiceAudio.src.includes('.mp3')) {
      voiceAudio.src = shell.voice.replace('.mp3', '.m4a');
      voiceAudio.play().catch(() => {});
    }
  };
  voiceAudio.src = shell.voice;
  voiceAudio.play().catch(() => {});

  renderWindowPhoto();
  if (winTitle) {
    winTitle.textContent = shell.name;
  }
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
    const fileName = src.split('/').pop().replace(/\.[^.]+$/, '');
    const volume = videoVolumes[fileName] !== undefined ? videoVolumes[fileName] : 0.75;

    const video = document.createElement('video');
    video.id = 'currentWinVideo';
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = false;
    video.volume = volume;
    video.playsInline = true;
    winPhoto.appendChild(video);

    videoVolume.style.display = 'flex';
    updateVideoVolumeUI(volume);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onerror = () => {
      img.src = 'assets/images/placeholder.svg';
    };
    winPhoto.appendChild(img);

    videoVolume.style.display = 'none';
  }

  winCaption.textContent = `${currentPhotoIndex + 1} / ${media.length}`;
  photoPrev.disabled = currentPhotoIndex === 0;
  photoNext.disabled = currentPhotoIndex === media.length - 1;

  // 加载对应文本
  loadWinText();
}

// 更新弹窗视频音量显示
function updateVideoVolumeUI(volume) {
  videoVolValue.textContent = `${Math.round(volume * 100)}%`;
}

// 调整弹窗视频音量
function changeVideoVolume(delta) {
  const video = document.getElementById('currentWinVideo');
  if (!video) return;

  const newVolume = Math.max(0, Math.min(1, video.volume + delta));
  video.volume = newVolume;

  const fileName = video.src.split('/').pop().replace(/\.[^.]+$/, '');
  videoVolumes[fileName] = newVolume;

  updateVideoVolumeUI(newVolume);
}

// 判断是否为占位文字
function isPlaceholderText(text) {
  return text.trim() === '*这个人很高冷，想说的都在图里了*';
}

// 加载弹窗文本
function loadWinText() {
  const shell = shellsData[currentShellIndex];
  const num = String(shell.id).padStart(2, '0');
  const idx = String(currentPhotoIndex + 1).padStart(2, '0');
  const textPath = `assets/texts/txt_${num}_${idx}.txt`;
  const defaultText = shell.texts[currentPhotoIndex] || '';

  winText.textContent = defaultText.trim();
  winText.classList.toggle('placeholder-text', isPlaceholderText(defaultText));
  fetch(textPath)
    .then(res => res.ok ? res.text() : '')
    .then(text => {
      if (text.trim()) {
        winText.textContent = text.trim();
        winText.classList.toggle('placeholder-text', isPlaceholderText(text));
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

  // 停止并清空弹窗中的视频，防止关闭窗口后音频继续播放
  const video = winPhoto.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
    video.load();
  }

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
    setTimeout(showLastShellText, 800);
  }
}

// 最后一个贝壳捡完后显示过渡文字，再进入火柴场景
function showLastShellText() {
  const lines = ['沙滩上…已经没有贝壳了吗？', '居然就这样捡完了。'];
  let index = 0;

  const showLine = () => {
    storyText.textContent = lines[index];
    storyText.classList.add('show');
    setTimeout(() => {
      storyText.classList.remove('show');
      index++;
      if (index < lines.length) {
        setTimeout(showLine, 1500);
      } else {
        setTimeout(startMatchScene, 1500);
      }
    }, 4000);
  };

  showLine();
}

// 控制面板：静音海浪
function toggleWavesMute() {
  wavesMuted = !wavesMuted;
  wavesAudio.muted = wavesMuted;
  wavesMuteBtn.classList.toggle('muted', wavesMuted);
}

// 控制面板：调节背景音乐音量（触摸设备改为静音切换，因 iOS 不允许 JS 调音量）
function changeBgmVolume(delta) {
  if (window.matchMedia('(pointer: coarse)').matches) {
    bgmAudio.muted = !bgmAudio.muted;
    bgmVolDownBtn.style.opacity = bgmAudio.muted ? '0.3' : '1';
    bgmVolUpBtn.style.opacity = bgmAudio.muted ? '0.3' : '1';
    return;
  }
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

// 在用户手势中预先授权 audio 元素，使后续 setTimeout 中的 play 不被浏览器阻止
function authorizeAudio() {
  [wavesAudio, bgmAudio, voiceAudio, sfxAudio, birthdayAudio].forEach(audio => {
    if (!audio || !audio.paused) return;
    const wasMuted = audio.muted;
    audio.muted = true;
    audio.play().then(() => {
      audio.pause();
      audio.currentTime = 0;
    }).catch(() => {}).finally(() => {
      audio.muted = wasMuted;
    });
  });
}

// 点燃蜡烛
function igniteCandle() {
  // 防止重复触发
  matchImg.style.pointerEvents = 'none';

  // 在用户手势内授权后续可能被延迟播放的音频
  authorizeAudio();

  // 先黑屏
  screenOverlay.classList.add('active');

  // 火柴层淡出
  matchLayer.style.transition = 'opacity 0.8s ease';
  matchLayer.style.opacity = '0';

  // 火柴就位后立刻停止背景音乐，海浪变小
  bgmAudio.pause();
  bgmAudio.currentTime = 0;
  fadeAudio(wavesAudio, 0.15, 1000);

  setTimeout(() => {
    matchLayer.classList.remove('active');
    matchLayer.style.opacity = '';
    matchLayer.style.transition = '';

    // 切换到蛋糕页，此时屏幕仍是黑色
    switchScene('cake');

    // 黑屏 2s 后大声播放点火音效
    setTimeout(() => {
      sfxAudio.src = 'assets/audio/sfx/ignite.MP3';
      sfxAudio.volume = 1.0;
      sfxAudio.play().catch(() => {});

      // 再 4s 后播放生日歌并渐显画面
      setTimeout(() => {
        fadeAudio(wavesAudio, 0.05, 2000);
        birthdayAudio.volume = 0.7;
        birthdayAudio.play().catch(() => {});

        // 生日歌响起后慢慢亮起
        setTimeout(() => {
          screenOverlay.classList.remove('active');
        }, 500);
      }, 4000);
    }, 2000);
  }, 800);
}

// 点击许愿按钮
function startWish() {
  wishBtn.style.opacity = '0';
  wishBtn.style.pointerEvents = 'none';

  // 隐藏顶部彩蛋提示
  if (cakeHint) cakeHint.style.opacity = '0';

  // 触发闭眼动画
  eyeMask.classList.add('active');
  void eyeMask.offsetWidth;
  eyeMask.classList.add('closed');

  // 闭眼完成后在黑屏上停留 2s，再显示吹蜡烛按钮
  setTimeout(() => {
    blowBtn.classList.add('show');
  }, 3500);
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

  // 在用户手势内授权后续可能被延迟播放的音频
  authorizeAudio();

  // 立即播放吹蜡烛音效并切换到 cake_after
  sfxAudio.src = 'assets/audio/sfx/blow.m4a';
  sfxAudio.volume = 1.0;
  sfxAudio.play().catch(() => {});

  cakeImg.style.display = 'none';
  cakeAfterImg.style.display = 'block';
  birthdayText.style.display = 'none';
  cakeMask.classList.add('fade-out');

  // 睁眼：上下黑色蒙版分别向上/向下顺滑移开（闭眼动画的反向）
  eyeMask.classList.remove('closed');

  // 蒙版完全打开后进入蛋糕后流程
  setTimeout(() => {
    eyeMask.classList.remove('active');
    startPostCakeScene();
  }, 2600);
}

// 蛋糕后流程：恢复海浪、播放 ditto、显示文字、2s 后自动播放 broken 转场
function startPostCakeScene() {
  // 生日歌渐弱，恢复海浪声音
  fadeAudio(birthdayAudio, 0, 2000);
  setTimeout(() => {
    birthdayAudio.pause();
    birthdayAudio.currentTime = 0;
  }, 2000);
  fadeAudio(wavesAudio, 0.4, 1500);

  setTimeout(() => {
    // 播放 ditto，渐入
    bgmAudio.src = 'assets/audio/bgm/ditto.MP3';
    bgmAudio.loop = true;
    bgmAudio.volume = 0;
    bgmAudio.play().catch(() => {});
    fadeAudio(bgmAudio, 0.6, 2000);

    // 文字定位在 cake_after 下方
    storyText.style.top = '86%';

    // 第一次浮现："好了"
    storyText.textContent = '好了';
    storyText.classList.add('show');

    let secondLineTimer = null;
    const showSecondLine = () => {
      if (secondLineTimer) {
        clearTimeout(secondLineTimer);
        secondLineTimer = null;
      }
      cakeScene.removeEventListener('click', showSecondLine);
      storyText.removeEventListener('click', showSecondLine);
      if (currentScene !== 'cake') return;
      storyText.classList.remove('show');
      setTimeout(() => {
        storyText.textContent = '现在 海浪会把这些愿望带给大海。';
        storyText.classList.add('show');

        // 文字显示 4s 后消失，再过 2s 自动播放 broken
        setTimeout(() => {
          storyText.classList.remove('show');
          setTimeout(() => {
            onContinueToBroken();
          }, 2000);
        }, 4000);
      }, 800);
    };

    cakeScene.addEventListener('click', showSecondLine, { once: true });
    storyText.addEventListener('click', showSecondLine, { once: true });

    // 2.5s 后自动显示第二行
    secondLineTimer = setTimeout(showSecondLine, 2500);
  }, 1500);
}

function onContinueToBroken() {
  if (currentScene !== 'cake') return;

  // 隐藏当前文字
  storyText.style.transition = 'none';
  storyText.classList.remove('show');
  storyText.style.transition = '';

  // 播放 broken.mp3
  sfxAudio.src = 'assets/audio/sfx/broken.MP3';
  sfxAudio.volume = 1.0;

  const onBrokenEnded = () => {
    sfxAudio.removeEventListener('ended', onBrokenEnded);
    // broken 结束后以小音量播放海浪
    fadeAudio(wavesAudio, 0.2, 1000);
    if (wavesAudio.paused) {
      wavesAudio.play().catch(() => {});
    }
    // 黑屏转场到坏掉的随身听场景
    screenOverlay.classList.add('active');
    setTimeout(() => {
      switchScene('brokenCassette');
      startBrokenCassetteScene();
      screenOverlay.classList.remove('active');
    }, 1500);
  };
  sfxAudio.addEventListener('ended', onBrokenEnded);
  sfxAudio.play().catch(() => {});

  // 1s 后停止 ditto
  setTimeout(() => {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
  }, 1000);
}

// 开始坏掉的随身听场景
function startBrokenCassetteScene() {
  // 显示左右磁带图
  brokenAfterLeft.style.display = 'block';
  brokenAfterRight.style.display = 'block';
  brokenAfterLeft.style.opacity = '1';
  brokenAfterRight.style.opacity = '1';

  // 海浪保持较小音量
  wavesAudio.volume = 0.2;
  if (wavesAudio.paused) {
    wavesAudio.play().catch(() => {});
  }

  // 重置选项按钮状态：尝试修复正常，摘下耳机极小看不见
  repairClickCount = 0;
  repairBtn.style.transform = 'scale(1)';
  repairBtn.style.opacity = '1';
  repairBtn.style.display = '';
  removeBtn.style.transform = 'scale(0)';
  removeBtn.style.opacity = '0';
  removeBtn.style.display = '';

  // 文字居中显示
  storyText.style.top = '50%';

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
let endingAutoTimer = null;
let hintTimer = null;

function advanceStoryText() {
  if (currentScene !== 'brokenCassette') return;

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

  // 摘下耳机初始极小看不见，每次点击尝试修复都会慢慢无限制变大
  const removeScale = repairClickCount * 0.25;
  const removeOpacity = Math.min(1, repairClickCount * 0.08);

  repairBtn.style.transform = 'scale(1)';
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
      // 切换到项链场景，同时调大海浪到正常音量
      screenOverlay.classList.add('active');
      fadeAudio(wavesAudio, 0.4, 1500);

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
  endingBottle.style.display = 'none';
  endingBottle.style.opacity = '';
  giftGroup.style.display = 'none';
  giftGroup.classList.remove('show');
  endingNecklace.classList.remove('hint-glow');
  endingLetter.style.display = '';
  endingMessage.style.display = 'none';
  returnBtn.style.display = 'none';

  // 恢复海浪到正常音量
  wavesAudio.volume = 0.4;

  // 文字定位在项链下方
  storyText.style.top = '78%';

  // 显示项链场景的文字提示
  storyText.textContent = endingTexts[0];
  storyText.classList.add('show');
  endingTextIndex = 0;

  // 点击屏幕或文字进入下一段
  endingScene.addEventListener('click', advanceEndingText, { once: true });
  storyText.addEventListener('click', advanceEndingText, { once: true });

  // 3s 后自动进入下一段
  endingAutoTimer = setTimeout(() => {
    advanceEndingText();
  }, 3000);
}

function advanceEndingText() {
  if (currentScene !== 'ending') return;

  if (endingAutoTimer) {
    clearTimeout(endingAutoTimer);
    endingAutoTimer = null;
  }

  // 移除当前文字的所有监听，避免残留监听重复触发
  endingScene.removeEventListener('click', advanceEndingText);
  storyText.removeEventListener('click', advanceEndingText);

  storyText.classList.remove('show');
  endingTextIndex++;

  if (endingTextIndex < endingTexts.length) {
    setTimeout(() => {
      storyText.textContent = endingTexts[endingTextIndex];
      storyText.classList.add('show');
      endingScene.addEventListener('click', advanceEndingText, { once: true });
      storyText.addEventListener('click', advanceEndingText, { once: true });
      endingAutoTimer = setTimeout(() => {
        advanceEndingText();
      }, 4000);
    }, 800);
  } else {
    // 第二段文字结束后显示漂流瓶
    setTimeout(() => {
      storyText.classList.remove('show');
      setTimeout(() => {
        showBottle();
      }, 500);
    }, 800);
  }
}

function showBottle() {
  if (currentScene !== 'ending') return;

  endingBottle.style.display = 'block';
  endingBottle.style.opacity = '0';
  void endingBottle.offsetWidth;
  endingBottle.style.transition = 'opacity 1s ease';
  endingBottle.style.opacity = '1';

  endingBottle.addEventListener('click', showGifts, { once: true });
}

function showGifts() {
  if (currentScene !== 'ending') return;

  endingBottle.style.display = 'none';
  meowBtn.classList.remove('show');
  giftGroup.style.display = 'flex';
  void giftGroup.offsetWidth;
  giftGroup.classList.add('show');

  // 6s 后若未点击项链，添加发光提示
  hintTimer = setTimeout(() => {
    endingNecklace.classList.add('hint-glow');
  }, 6000);

  endingNecklace.addEventListener('click', enterGalleryScene);
  endingLetter.addEventListener('click', openLetterZoom);

  // 显示 CLOSE 按钮
  returnBtn.style.display = 'block';
  void returnBtn.offsetWidth;
  returnBtn.classList.add('show');
}

function openLetterZoom() {
  letterOverlay.classList.add('show');
}

function closeLetterZoom() {
  letterOverlay.classList.remove('show');
}

function closeGiftView() {
  if (currentScene !== 'ending') return;

  if (hintTimer) {
    clearTimeout(hintTimer);
    hintTimer = null;
  }
  endingNecklace.classList.remove('hint-glow');

  // 收起礼物，显示 bottle 和 Meow 按钮
  giftGroup.style.display = 'none';
  giftGroup.classList.remove('show');
  returnBtn.classList.remove('show');
  returnBtn.style.display = 'none';

  endingBottle.style.display = 'block';
  endingBottle.style.opacity = '0';
  void endingBottle.offsetWidth;
  endingBottle.style.transition = 'opacity 1s ease';
  endingBottle.style.opacity = '1';

  meowBtn.style.display = 'block';
  void meowBtn.offsetWidth;
  meowBtn.classList.add('show');

  // 重新给 bottle 绑定点击事件，可再次打开礼物
  endingBottle.addEventListener('click', showGifts, { once: true });
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

// 蛋糕页点击空白处的小彩蛋
const cakeEasterEggTexts = [
  'Meow > - <',
  '桃桃生日快乐',
  '喵',
  '喵～喵喵～喵～喵～～喵～～',
  'happy birthday',
  '祝你生日快乐',
  '许个愿吧',
];

function handleCakeEasterEgg(e) {
  if (currentScene !== 'cake') return;
  if (
    e.target === cakeImg ||
    e.target === wishBtn ||
    e.target === blowBtn ||
    e.target.closest('.birthday-text') ||
    e.target === storyText
  ) {
    return;
  }

  const text = cakeEasterEggTexts[Math.floor(Math.random() * cakeEasterEggTexts.length)];
  const el = document.createElement('div');
  el.className = 'cake-easter-egg';
  el.textContent = text;
  el.style.left = `${e.clientX}px`;
  el.style.top = `${e.clientY}px`;
  document.body.appendChild(el);

  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 1600);
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
  if (cakeHint) cakeHint.style.opacity = '';
  wishBtn.style.opacity = '1';
  wishBtn.style.pointerEvents = 'auto';
  wishHint.style.display = 'none';
  wishHint.classList.remove('show');
  blowBtn.classList.remove('show');
  birthdayText.style.display = 'block';
  birthdayAudio.pause();
  birthdayAudio.currentTime = 0;
  bgmAudio.pause();
  bgmAudio.currentTime = 0;
  sfxAudio.pause();
  sfxAudio.currentTime = 0;
  voiceAudio.pause();
  voiceAudio.currentTime = 0;
  closeGalleryDetail();

  // 移除可能残留的点击监听
  cakeScene.removeEventListener('click', onContinueToBroken);
  storyText.removeEventListener('click', onContinueToBroken);
  endingScene.removeEventListener('click', advanceEndingText);
  storyText.removeEventListener('click', advanceEndingText);

  // 重置火柴层
  matchImg.style.pointerEvents = 'auto';

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
  storyText.style.top = '';
  choiceButtons.style.display = 'none';
  choiceButtons.style.opacity = '0';
  repairBtn.style.transform = '';
  repairBtn.style.opacity = '';
  repairBtn.style.display = '';
  removeBtn.style.transform = 'scale(0)';
  removeBtn.style.opacity = '0';
  removeBtn.style.display = '';
  repairClickCount = 0;
  currentStoryIndex = 0;
  endingTextIndex = 0;
  if (storyAutoTimer) {
    clearTimeout(storyAutoTimer);
    storyAutoTimer = null;
  }
  if (endingAutoTimer) {
    clearTimeout(endingAutoTimer);
    endingAutoTimer = null;
  }
  if (hintTimer) {
    clearTimeout(hintTimer);
    hintTimer = null;
  }

  // 重置 ending 页
  endingBottle.style.display = 'none';
  endingBottle.style.opacity = '';
  giftGroup.style.display = 'none';
  giftGroup.classList.remove('show');
  endingNecklace.classList.remove('hint-glow');
  endingNecklace.style.display = 'block';
  endingNecklace.style.opacity = '';
  endingNecklace.style.transition = '';
  endingLetter.style.display = '';
  endingMessage.style.display = 'none';
  endingMessage.classList.remove('show');
  returnBtn.style.display = 'none';
  returnBtn.classList.remove('show');
  meowBtn.style.display = 'none';
  meowBtn.classList.remove('show');

  switchScene('home');
}

// 进入祝福总库
function enterGalleryScene() {
  if (currentScene === 'gallery') return;
  if (hintTimer) {
    clearTimeout(hintTimer);
    hintTimer = null;
  }
  endingNecklace.classList.remove('hint-glow');
  switchScene('gallery');
  renderGallery();
}

// 从画廊返回上一页
function backFromGallery() {
  const target = previousScene || 'home';
  switchScene(target);
}

// 打开/关闭全局菜单
function openMenu() {
  globalMenu.classList.add('show');
}

function closeMenu() {
  globalMenu.classList.remove('show');
}

function clickMenuItem(sceneName) {
  closeMenu();
  closeGalleryDetail();
  closeWindow();
  if (sceneName === 'gallery') {
    enterGalleryScene();
  } else if (sceneMap[sceneName]) {
    switchScene(sceneName);
  }
}

// 渲染祝福总库网格
function renderGallery() {
  galleryGrid.innerHTML = '';
  shellsData.forEach((shell, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
      <img src="${shell.shellImage}" alt="" class="gallery-card-shell">
      <span class="gallery-card-name">${shell.name}</span>
      <span class="gallery-card-index">NO.${shell.id}</span>
    `;
    card.addEventListener('click', () => openGalleryDetail(index));
    galleryGrid.appendChild(card);
  });
}

// 打开画廊详情
function openGalleryDetail(index) {
  galleryShellIndex = index;
  galleryPhotoIndex = 0;
  galleryVoicePlaying = false;
  galleryVoiceBtn.textContent = '▶ 播放祝福';
  galleryVoiceBtn.classList.remove('playing');
  galleryDetail.classList.add('show');
  updateGalleryDetail();
}

// 关闭画廊详情
function closeGalleryDetail() {
  galleryDetail.classList.remove('show');
  voiceAudio.pause();
  voiceAudio.currentTime = 0;
  galleryVoicePlaying = false;
  galleryVoiceBtn.textContent = '▶ 播放祝福';
  galleryVoiceBtn.classList.remove('playing');

  // 停止画廊详情中的视频
  const video = galleryDetailMedia.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
    video.load();
  }
}

// 画廊详情翻页
function changeGalleryPhoto(dir) {
  const shell = shellsData[galleryShellIndex];
  const newIndex = galleryPhotoIndex + dir;
  if (newIndex >= 0 && newIndex < shell.media.length) {
    galleryPhotoIndex = newIndex;
    updateGalleryDetail();
  }
}

// 更新画廊详情内容
function updateGalleryDetail() {
  const shell = shellsData[galleryShellIndex];
  const src = shell.media[galleryPhotoIndex];
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  galleryDetailShell.textContent = `SHELL ${shell.id}`;
  galleryDetailName.textContent = shell.name;
  galleryDetailCaption.textContent = `${galleryPhotoIndex + 1} / ${shell.media.length}`;

  galleryDetailMedia.innerHTML = '';
  if (isVideo) {
    const video = document.createElement('video');
    video.src = src;
    video.autoplay = true;
    video.loop = true;
    video.muted = false;
    video.volume = 0.75;
    video.playsInline = true;
    video.controls = true;
    galleryDetailMedia.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.onerror = () => { img.src = 'assets/images/placeholder.svg'; };
    galleryDetailMedia.appendChild(img);
  }

  galleryDetailPrev.disabled = galleryPhotoIndex === 0;
  galleryDetailNext.disabled = galleryPhotoIndex === shell.media.length - 1;

  loadGalleryDetailText();
}

// 加载画廊详情文字
function loadGalleryDetailText() {
  const shell = shellsData[galleryShellIndex];
  const num = String(shell.id).padStart(2, '0');
  const idx = String(galleryPhotoIndex + 1).padStart(2, '0');
  const textPath = `assets/texts/txt_${num}_${idx}.txt`;
  const defaultText = shell.texts[galleryPhotoIndex] || '';

  galleryDetailText.textContent = defaultText.trim();
  galleryDetailText.classList.toggle('placeholder-text', isPlaceholderText(defaultText));
  fetch(textPath)
    .then(res => res.ok ? res.text() : '')
    .then(text => {
      if (text.trim()) {
        galleryDetailText.textContent = text.trim();
        galleryDetailText.classList.toggle('placeholder-text', isPlaceholderText(text));
      }
    })
    .catch(() => {});
}

// 播放/暂停画廊祝福语音
function toggleGalleryVoice() {
  if (galleryShellIndex === null) return;

  if (galleryVoicePlaying) {
    voiceAudio.pause();
    galleryVoicePlaying = false;
    galleryVoiceBtn.textContent = '▶ 播放祝福';
    galleryVoiceBtn.classList.remove('playing');
  } else {
    const shell = shellsData[galleryShellIndex];
    voiceAudio.volume = 1.0;
    voiceAudio.onerror = () => {
      if (voiceAudio.src.includes('.mp3')) {
        voiceAudio.src = shell.voice.replace('.mp3', '.m4a');
        voiceAudio.play().catch(() => {});
      }
    };
    voiceAudio.src = shell.voice;
    voiceAudio.play().catch(() => {});
    galleryVoicePlaying = true;
    galleryVoiceBtn.textContent = '⏸ 暂停祝福';
    galleryVoiceBtn.classList.add('playing');
  }
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
