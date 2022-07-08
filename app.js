const listSongPlayList = document.querySelector(".list-song-playlist");
const listAlbumPlayList = document.querySelector(".new-album-playlist-song3");
const listALbumSong2 = document.querySelector(".new-album-playlist-song2");
const caroselLeft = document.querySelector(".carosel-left"); 
const caroselRight = document.querySelector(".carosel-right");
const btnPlay = document.querySelector(".btn-play");
const song = document.querySelector("#song");
const musicImage = document.querySelector(".music_play_left_image");
const onscreenImage = document.querySelector(".onscreen-cd-image");
const cdImageOnscreen = document.querySelector(".player-onscreen-listen-image");
const wave = document.querySelector("#wave");
const wave2 = document.querySelector("#wave2");
const repeat = document.querySelector(".repeat-track");
const repeatScreen = document.querySelector(".repeat");
const buttonPrev = document.querySelector(".prev");
const buttonNext = document.querySelector(".next");
const titleName = document.querySelector("#title-name");
const titleName2 = document.querySelector("#title-name-onscreen");
const artisSpan = document.querySelector("#artis");
const artisSpanOnscreen = document.querySelector("#artis-onscreen");
const cdImage = document.querySelector(".cd-image");
const current_Time = document.querySelector(".current-time");
const current_Time_New = document.querySelector(".current-time-new");
const totalTime = document.querySelector(".totalTime");
const totalTime_New = document.querySelector(".totalTime-new");
const progressBar = document.querySelector("#progress");
const progressBarNew = document.querySelector("#progress_new_onscreen");
const progressVolume = document.querySelector("#progress-volume");
const progressVolumenew = document.querySelector("#progress-volume-onscreen");
const listMVItem = document.querySelector(".tab-container-mv-body");
const playerOnscreen = document.querySelector(".player-onscreen");
const buttonPlay2 = document.querySelector(".button-play");
const play_Prev = document.querySelector(".play-prev");
const play_Next = document.querySelector(".play-next");
const nameSong = document.querySelector("#name-song");
const singleName = document.querySelector("#single-name");
const playAll = document.querySelector(".play-all");
const creatMobile = document.querySelector(".create-playlist-click");
const menuSongPlaylist = document.querySelector(".menu-song-playlist");
const navHeader = document.querySelector(".navbar-song-playlist");


let isPlaying = true;
let isrepeat = false;
let songIndex = 0;
let currentIndex = 0;
let repeatCount = 0;
//tạo mảng chứa danh sách nhạc và bài hát
const songs = [
  {
    id: "1",
    img: "https://i1.sndcdn.com/artworks-000644684335-tvswce-t500x500.jpg",
    name: "Thuận Theo ý trời",
    artist: "Bùi Anh Tuấn",
    music: "ttyt.mp3",
    time: "3:57",
  },
  {
    id: "2",
    img: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2016/10/20/e/7/1/3/1476945863040_600.jpg",
    name: "Đã biết sẽ có ngày hôm qua",
    artist: "Trịnh Thăng Bình",
    music: "dabietsecongayhomqua.mp3",
    time: "4:32",
  },
  {
    id: "3",
    img: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/11/10/photo-1-1636556633006187200028.jpg",
    name: "Hãy trao cho anh",
    artist: "Sơn Tùng MTP",
    music: "haytraochoanh.mp3",
    time: "4:05",
  },
  {
    id: "4",
    img: "https://yt3.ggpht.com/ytc/AKedOLTFdGsqBwrlCFNi2AX9DNcwq0xsfbbAu_L-z7a-zQ=s900-c-k-c0x00ffffff-no-rj",
    name: "Có Khi",
    artist: "Hoài Lâm",
    music: "cokhi.mp3",
    time: "4:19",
  },
  {
    id: "5",
    img: "https://event.mediacdn.vn/257767050295742464/image/hot14/2021/2/4/chau-dang-khoa-12-16123736695001712280846.png",
    name: "Giả vờ nhưng anh yêu em",
    artist: "Chi Dân",
    music: "giavoaye.mp3",
    time: "3:53",
  },
  {
    id: "6",
    img: "https://i1.sndcdn.com/artworks-yojC4Fyr0MoNyfNl-YkghHA-t500x500.jpg",
    name: "Cao ỐC 20",
    artist: "Đạt G",
    music: "caooc20.mp3",
    time: "3:27",
  },
  {
    id: "7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIFmHjEdy0YXUy7jsECWYo4v-kS0aERBtVcw&usqp=CAU",
    name: "hẹn một mai",
    artist: "bùi anh tuấn",
    music: "henmotmai.mp3",
    time: "4:43",
  },
  {
    id: "8",
    img: "https://znews-stc.zdn.vn/static/topic/person/soobin.jpg",
    name: "Anh đã quen với cô đơn",
    artist: "soobin hoàng sơn",
    music: "anhdaquenvoicodon.mp3",
    time: "3:56",
  },
  {
    id: "9",
    img: "https://doanhnhanonline.com.vn/wp-content/uploads/2021/11/dat-g-la-ai.jpeg",
    name: "buồn không em",
    artist: "Đạt g",
    music: "buonkhongem.mp3",
    time: "6:24",
  },
  {
    id: "10",
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/1/1/f/e11fe0da669959f8dbe4c4d305b8324f.jpg",
    name: "Chẳng ai yêu mãi một người",
    artist: "nb3 hoài bảo",
    music: "changaiyeumaimotnguoi.mp3",
    time: "5:28",
  },
  {
    id: "11",
    img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/9/4/4/2944b4a942090e6461c70272264ab863.jpg",
    name: "Em đã quên anh",
    artist: "trịnh thăng bình",
    music: "emdaquenanh.mp3",
    time: "3:46",
  },
  {
    id: "12",
    img: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/36/35/0b/36350b98-3f06-d716-5f76-2041156c4382/40517634995064835042815_2101_x_1400.jpg/400x400cc.jpg",
    name: "She Neva Knows",
    artist: "JustaTee",
    music: "shenevaknow.mp3",
    time: "4:49",
  },
  {
    id: "13",
    img: "https://lh3.googleusercontent.com/LBZbzy9NXoY_0vQQOkDQnVSzu27am8yxvcsxOk0CPhfnr7uraTv-9ONUje1b7zcK0bTqTbI1_pY2hVzXu4aGbSQ9",
    name: "Buông Đôi Tay Nhau Ra",
    artist: "Sơn Tùng MTP",
    music: "buongdoitaynhaura.mp3",
    time: "3:45",
  },
];
//tạo mảng chứa danh sách album
const albums = [
  {
    id: "1",
    img: "./img/album1.jpg",
    name: "Golden Hour",
    avatar: "./img/artist1.jpg",
    artist: 'Mr.Siro'
  },
  {
    id: "2",
    img: "./img/album2.jpg",
    name: "Boycold (Mini Album)",
    avatar: "./img/artist2.jpg",
    artist: "Obito"
  },
  {
    id: "3",
    img: "./img/album3.jpg",
    name: "Red",
    avatar: "./img/artist3.jpg",
    artist: "Sóc Nâu"
  },
  {
    id: "4",
    img: "./img/album4.jpg",
    name: "Người Yêu Cũ (Mini Album)",
    avatar: "./img/artist4.jpg",
    artist: "Lyly"
  },
  {
    id: "5",
    img: "./img/album5.jpg",
    name: "Querencia (Mini Album)",
    avatar: "./img/artist5.jpg",
    artist: "Dalab"
  },
  {
    id: "6",
    img: "./img/album6.jpg",
    name: "Justice (Mini Album)",
    avatar: "./img/artist6.jpg",
    artist: "Only C"
  },
  {
    id: "7",
    img: "./img/album7.jpg",
    name: "Teenage Dream",
    avatar: "./img/artist7.jpg",
    artist: "Kay Trần"
  },
  {
    id: "8",
    img: "./img/album8.jpg",
    name: "The Off Season",
    avatar: "./img/artist8.jpg",
    artist: "Bích Phương"
  },
  {
    id: "9",
    img: "./img/album9.jpg",
    name: "The Album",
    avatar: "./img/artist9.jpg",
    artist: "Sơn Tùng MTP"
  },
  {
    id: "10",
    img: "./img/slide5.jpg",
    name: "Random Access Memories",
    avatar: "./img/artist10.jpg",
    artist: "Đức Phúc"
  },
];

//tao mảng chứa danh sách MV
const mvs = [
  {
    id: "1",
    img: "./img/mv1.jpg",
    avatar: "./img/artist1.jpg",
    track: "Một Bước Yêu Vạn Dặm Đau",
    single: "Mr siro",
  },
  {
    id: "2",
    img: "./img/mv2.jpg",
    avatar: "./img/artist2.jpg",
    track: " Simple Love",
    single: "Mr siro",
  },
  {
    id: "3",
    img: "./img/mv3.jpg",
    avatar: "./img/artist3.jpg",
    track: "Lời Yêu Ngây Dại",
    single: "Mr siro",
  },
  {
    id: "4",
    img: "./img/mv4.jpg",
    avatar: "./img/artist4.jpg",
    track: " 24H",
    single: "Mr siro",
  },
  {
    id: "5",
    img: "./img/mv5.jpg",
    avatar: "./img/artist5.jpg",
    track: " Nước Mắt Em Lau Bằng Tình Yêu Mới",
    single: "Mr siro",
  },
  {
    id: "6",
    img: "./img/mv6.jpg",
    avatar: "./img/artist6.jpg",
    track: " Yêu Đơn Phương",
    single: "Mr siro",
  },
  {
    id: "7",
    img: "./img/mv7.jpg",
    avatar: "./img/artist7.jpg",
    track: "Phía Sau Em",
    single: "Mr siro",
  },
  {
    id: "8",
    img: "./img/mv8.jpg",
    avatar: "./img/artist8.jpg",
    track: "Mình Yêu nhau đi",
    single: "Mr siro",
  },
  {
    id: "9",
    img: "./img/mv9.jpg",
    avatar: "./img/artist9.jpg",
    track: " Đừng Về Trễ (Acoustic Version)",
    single: "Mr siro",
  },
  {
    id: "10",
    img: "./img/mv10.jpg",
    avatar: "./img/artist10.jpg",
    track: "Hơn Cả Yêu",
    single: "Mr siro",
  },
  {
    id: "11",
    img: "./img/mv11.jpg",
    avatar: "./img/artist11.jpg",
    track: "Vì Yêu Cứ Đâm Đầu",
    single: "Mr siro",
  },
  {
    id: "12",
    img: "./img/mv12.jpg",
    avatar: "./img/artist12.jpg",
    track: "Sao Anh Chưa Về Nhà",
    single: "Mr siro",
  },
  {
    id: "13",
    img: "./img/mv13.jpg",
    avatar: "./img/artist13.jpg",
    track: "Bigcityboi",
    single: "Mr siro",
  },
  {
    id: "14",
    img: "./img/mv14.jpg",
    avatar: "./img/artist14.jpg",
    track: "Em Không Sai Chúng Ta Sai",
    single: "Mr siro",
  },
];
//tạo danh sách chứa bài hát

function listSong() {
  const htmls = songs.map((item, index) => {
    return `<div class="list-song-playlist-item ${
      index === this.currenIndex ? "active" : ""
    } " data-index = "${index}">
    <div class="list-song-playlist-img">
         <img src="${item.img}"
             alt="">
     </div>
     <div class="list-song-playlist-info">
         <span>${item.name}</span>
         <span>${item.artist}</span>
     </div>
     <div class="list-song-timer-total">
         <span>${item.time}</span>
     </div>
     <div class="list-song-playlist-evalute">
         <i class="fa-solid fa-microphone"></i>
         <i class="fa-solid fa-heart"></i>
         <i class="fa-solid fa-ellipsis"></i>
     </div>
 </div>`;
  });
  listSongPlayList.innerHTML = htmls.join("");
}
listSong();

//tạo fucntion chứa album hot
function listAlbumHot() {
  const htmls = songs.map((item, index) => {
    return `  <div class="new-album-item-image3">
      <div class="new-album-item-image3-link">
          <img src="${item.img}"
              alt="">
      </div>
      <div class="new-album-item-icon">
          <i class="fa-solid fa-heart"></i>
          <div class="play">
              <i class="fa fa-play-circle"></i>
          </div>
          <i class="fa-solid fa-ellipsis"></i>
      </div>
      <span>${item.name}</span>
  </div>`;
  });
  listAlbumPlayList.innerHTML = htmls.join("");
}
listAlbumHot();

//tạo fuction chứa album mới

function listAlbumNew() {
  const htmls = albums.map((item, index) => {
    return `    <div class="new-album-item-image2">
      <div class="new-album-item-image2-link">
          <img src="${item.img}"
              alt="">
      </div>
      <div class="new-album-item-icon">
          <i class="fa-solid fa-heart"></i>
          <div class="play">
              <i class="fa fa-play-circle"></i>
          </div>
          <i class="fa-solid fa-ellipsis"></i>
      </div>
      <span>${item.name}</span>
  </div>`;
  });
  listALbumSong2.innerHTML = htmls.join("");
}
listAlbumNew();

//tạo fuction chứa bài hát ở tab page zing
function pageZingAlbum() {
  const htmls = albums.map((item, index) => {
    return ` <div class="page-container-album-item">
    <div class="page-container-album-item-image">
        <img src="${item.img}" alt="">
        <div class="page-container-album-item-icon">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
    </div>
    <div class="page-container-album-item-text">
        <h3>${item.name}</h3>
    </div>
</div>`;
  });
  document.querySelector(".page-container-album-body").innerHTML =
    htmls.join("");
}
pageZingAlbum();
//carosel slide show
caroselRight.addEventListener("click", function (e) {
  listAlbumPlayList.scrollLeft += 330;
});

caroselLeft.addEventListener("click", function (e) {
  listAlbumPlayList.scrollLeft -= 330;
});

//slider-tab-zing
const pageSlider = document.querySelector(".page-container-tab-slider");
const sliderLeft = document.querySelector(".slider-left");
const sliderRight = document.querySelector(".slider-right");
sliderRight.addEventListener("click", function (e) {
  pageSlider.scrollLeft += 330;
});
sliderLeft.addEventListener("click", function (e) {
  pageSlider.scrollLeft -= 330;
});

//xử lý khi click vào play
btnPlay.addEventListener("click", clickPlay);
buttonPlay2.addEventListener("click", clickPlay);
playAll.addEventListener("click", clickPlay);

//tạo fucntion click vào nút play
function clickPlay() {
  //nếu là true thì cho nhạc play
  if (isPlaying) {
    song.play();
    isPlaying = false;
    btnPlay.classList.add("fa-pause");
    buttonPlay2.classList.add("fa-pause");
    onscreenImage.classList.add("rotate");
    cdImageOnscreen.classList.add("rotate");
    musicImage.classList.add("rotate");
    cdImage.classList.add("rotate");
    wave.classList.add("loader");
    wave2.classList.add("loader");

    musicImage.classList.remove("pause");
    onscreenImage.classList.remove("pause");
    cdImageOnscreen.classList.remove("pause");
    cdImage.classList.remove("pause");
  } else {
    song.pause();
    isPlaying = true;
    btnPlay.classList.remove("fa-pause");
    buttonPlay2.classList.remove("fa-pause");
    // onscreenImage.classList.remove("rotate");
    // musicImage.classList.remove("rotate");
    // cdImageOnscreen.classList.remove("rotate");
    // cdImage.classList.remove("rotate");
    musicImage.classList.add("pause");
    onscreenImage.classList.add("pause");
    cdImageOnscreen.classList.add("pause");
    cdImage.classList.add("pause");
    wave.classList.remove("loader");
    wave2.classList.remove("loader");
  }
}

//click vào nút next và prev
buttonNext.addEventListener("click", function (e) {
  handleChangeMusic(1);
});
buttonPrev.addEventListener("click", function (e) {
  handleChangeMusic(-1);
});
play_Next.addEventListener("click", function (e) {
  handleChangeMusic(1);
  console.log(e.target);
});
play_Prev.addEventListener("click", function (e) {
  handleChangeMusic(-1);
});

//function xử lý khi click vào next và prev
function handleChangeMusic(dir) {
  if (dir === 1) {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    isPlaying = true;
    handleChangeSong(songIndex);
    clickPlay();
  } else if (dir === -1) {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    isPlaying = true;
    handleChangeSong(songIndex);
    clickPlay();
  }
}

//xử lý nhạc khi kết thúc tự động chạy tiếp
song.addEventListener("ended", isCountinueSong);
function isCountinueSong() {
  repeatCount++;
  if (isrepeat && repeatCount === 1) {
    isPlaying = true;
    song.play();
  } else {
    handleChangeMusic(1);
  }
}

// xử lý ảnh và tên bài hát khi thay đổi

function handleChangeSong(songIndex) {
  song.setAttribute("src", `./music/${songs[songIndex].music}`); // lấy nhạc trong mảng object
  musicImage.setAttribute("src", songs[songIndex].img); // lấy ảnh trong mảng object
  cdImage.setAttribute("src", songs[songIndex].img); // lấy ảnh trong mảng object
  onscreenImage.setAttribute("src", songs[songIndex].img); // lấy ảnh trong mảng object
  cdImageOnscreen.setAttribute("src", songs[songIndex].img); // lấy ảnh trong mảng object
  titleName.innerHTML = songs[songIndex].name; //lấy ra ten bài hát
  titleName2.innerHTML = songs[songIndex].name; //lấy ra ten bài hát
  nameSong.innerHTML = songs[songIndex].name; //lấy ra ten bài hát
  artisSpan.innerHTML = songs[songIndex].artist; //lấy ra tên ca sĩ
  artisSpanOnscreen.innerHTML = songs[songIndex].artist; //lấy ra tên ca sĩ
  singleName.innerHTML = songs[songIndex].artist; //lấy ra tên ca sĩ
}
handleChangeSong(songIndex);

//xử lý time bài hát

function displayTimer() {
  // const duration = song.duration;
  // const currentTime = song.currentTime;
  const { duration, currentTime } = song;
  progressBar.max = duration;
  progressBar.value = currentTime;
  progressBarNew.max = duration;
  progressBarNew.value = currentTime;
  totalTime.innerHTML = formatTimer(currentTime);
  totalTime_New.innerHTML = formatTimer(currentTime);
  if (!duration) {
    current_Time.innerHTML = "0:00";
    current_Time_New.innerHTML = "0:00";
  } else {
    current_Time.innerHTML = formatTimer(duration);
    current_Time_New.innerHTML = formatTimer(duration);
  }
}

function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);

  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`; //điều kiện thêm số 0 vào trc thời gian còn lại
}
displayTimer();
const timer = setInterval(displayTimer, 500);

//xử lý sự kiện tua nhạc
progressBar.addEventListener("change", handlProgressBar);
function handlProgressBar() {
  song.currentTime = progressBar.value;
}
progressBarNew.addEventListener("change", handlProgressBarNew);
function handlProgressBarNew() {
  song.currentTime = progressBarNew.value;
}

//xử lý sự kiện volume
progressVolumenew.addEventListener("change", function (e) {
  song.volume = progressVolumenew.value / 100;
});
progressVolume.addEventListener("change", handleVolume);
function handleVolume() {
  song.volume = progressVolume.value / 100;
  if(song.volume == 0){
    volume.classList.add("fa-volume-xmark")
  } else{
    volume.classList.remove("fa-volume-xmark")
  }
}

//tích vào trái tym vote
// sweet alert
const alertSweet1 = `<div class="sweet-alert">
  <i class="fa fa-check sweet-icon icon"></i>
  <span class="content">Bạn đã thêm vào danh sách yêu thích</span>
  </div>`
const alertSweet2 = `
  <div class="sweet-alert">
    <i class="fa fa-check sweet-icon icon"></i>
    <span class="content">Bạn đã hủy khỏi danh sách yêu thích</span>
  </div>
`
const voteHeart = document.querySelectorAll(".fa-heart");
voteHeart.forEach((item) => {
  item.addEventListener("click", function (e) {
    const sweet = document.querySelector(".sweet-alert")
    const trash = document.querySelector(".trash")
    item.classList.toggle("vote");
    sweet.style.transform = "translateX(0)"
    trash.style.transform = "translateX(0)"
    setTimeout(()=>{
      sweet.style.transform = "translateX(150%)"
    },4000)

  });
});

//repeat bài nhạc khi chạy lại
repeat.addEventListener("click", function (e) {
  isrepeat = !isrepeat;
  if (isrepeat) {
    repeat.classList.add("focus");
  } else {
    repeat.classList.remove("focus");
  }
});
repeatScreen.addEventListener("click", function (e) {
  isrepeat = !isrepeat;
  if (isrepeat) {
    repeatScreen.classList.add("active");
  } else {
    repeatScreen.classList.remove("active");
  }
});

//xử lý click vào bài hát trong list nhạc
const songLitsItem = document.querySelectorAll(".list-song-playlist-item");
[...songLitsItem].forEach((item) => {
  item.addEventListener("click", function (e) {
    const index = e.currentTarget.dataset.index;
    song.setAttribute("src", `./music/${songs[index].music}`); // lấy nhạc trong mảng object
    if ((isPlaying = true)) {
      handleChangeSong(index);
      clickPlay();
    }
    //click vào thì active cho background
    [...songLitsItem].forEach((item) => {
      item.classList.remove("playing");
      e.currentTarget.classList.add("playing");
    });
  });
});

//in ra list nhạc tab playlist thứ 2

function listSong2() {
  const htmls = songs.map((song, index) => {
    return `   <div class="tab-container-song-playlist-all-item" data-index = "${index}">
  <div class="tab-container-song-playlist-all-img">
      <img src="${song.img}"
          alt="">
  </div>
  <div class="tab-container-song-playlist-all-info">
      <span>${song.name}</span>
      <span>${song.artist}</span>
  </div>
  <div class="tab-container-song-playlist-all-timer">
      <span>${song.time}</span>
  </div>
  <div class="tab-container-song-playlist-all-evalute">
      <i class="fa-solid fa-microphone"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-ellipsis"></i>
  </div>
</div>`;
  });
  document.querySelector(".tab-container-song-playlist-all").innerHTML =
    htmls.join("");
}
listSong2();

//xử lý click vào bài hát

const songLitsItem2 = document.querySelectorAll(
  ".tab-container-song-playlist-all-item"
);
[...songLitsItem2].forEach((item) => {
  item.addEventListener("click", function (e) {
    const index = e.currentTarget.dataset.index;
    song.setAttribute("src", `./music/${songs[index].music}`); // lấy nhạc trong mảng object
    if ((isPlaying = true)) {
      handleChangeSong(index);
      clickPlay();
    }
    //click vào thì active cho background
    [...songLitsItem2].forEach((item) => {
      item.classList.remove("playing");
      e.currentTarget.classList.add("playing");
    });
  });
});

//click vào các tab
const tabItemLinks = document.querySelectorAll(".tab-item-link");
const newTabs = document.querySelectorAll(".tab");

[...tabItemLinks].forEach((item) => {
  item.addEventListener("click", function (e) {
    e.target.classList.add("active");
    // xóa hết tất cả class active ở các tab hiện tại
    [...tabItemLinks].forEach((item) => {
      if (item !== e.target) {
        item.classList.remove("active");
      }
    });
    //lấy ra data-tab của tab được click
    const tabNumber = e.target.dataset.tab;
    [...newTabs].forEach((item) => {
      //xóa hết active ở các tab
      item.classList.remove("active");
      if (item.getAttribute("data-tab") == tabNumber) {
        item.classList.add("active");
      }
    });
    // [...newTabs][tabNumber - 1].classList.add("active");
  });
});

//xử lý click vào các tab bên menu "page- all"
const tabItemPages = document.querySelectorAll(".click-item");
const page = document.querySelectorAll(".page");
[...tabItemPages].forEach((item) => {
  item.addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
    // xóa hết tất cả class active ở các tab hiện tại
    [...tabItemPages].forEach((item) => {
      if (item !== e.currentTarget) {
        item.classList.remove("active");
      }
    });
    //lấy ra data-index của tab được click
    const pageNumber = e.currentTarget.dataset.index;
    [...page].forEach((item) => {
      //xóa hết active ở các tab
      item.classList.remove("active");
      if (item.getAttribute("data-index") == pageNumber) {
        item.classList.add("active");
      }
    });
  });
});

//render danh sách mv
function listMV() {
  const htmls = mvs.map((item) => {
    return `<div class="tab-container-mv-body-item">
    <div class="tab-container-mv-body-image-item">
        <img src="${item.img}"/>
        <div class="tab-image-icon-play">
            <i class="fa-solid fa-play"></i>
        </div>
        <div class="tab-image-icon-close">
            <i class="fa-solid fa-x"></i>
        </div>
        <div class="tab-image-mv-time">
            <span>00:35</span>
        </div>
    </div>
    <div class="tab-container-mv-body-text">
        <div class="tab-container-mv-body-text-image">
            <img src="${item.avatar}" alt="">
        </div>
        <div class="tab-container-mv-body-text-name">
            <span>${item.track}</span>
            <a href="">${item.single}</a>
        </div>
    </div>
</div>`;
  });
  listMVItem.innerHTML = htmls.join("");
}
listMV();

//render danh sách mv album
function listMVAlbum() {
  const htmls = albums.map((item) => {
    return `  <div class="tab-container-album-body-item">
    <div class="tab-container-album-body-item-image">
        <img src="${item.img}" alt="">
        <div class="tab-container-album-body-item-icon">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-play"></i>
            <i class="fa-solid fa-ellipsis"></i>
        </div>
    </div>
    <div class="tab-container-album-body-item-text">
        <p>${item.name}</p>
    </div>
</div>`;
  });
  document.querySelector(".tab-container-album-body").innerHTML =
    htmls.join("");
}
listMVAlbum();

//remder danh sách nghệ sĩ
function listArtis() {
  const htmls = albums.map((item) => {
    return `  <div class="tab-container-artis-body-item">
    <div class="tab-container-artis-body-item-image">
        <img src="${item.avatar}" alt="">
    </div>
    <div class="tab-container-artis-body-info">
        <div class="tab-container-artis-body-info-name">
            <h3>${item.artist}</h3>
            <i class="fa-solid fa-star"></i>
        </div>
        <span>265k quan tâm</span>
        <button>
            <i class="fa-solid fa-check"></i>
            đã quan tâm
        </button>
    </div>
</div>`;
  });
  document.querySelector(".tab-container-artis-body").innerHTML =
    htmls.join("");
}
listArtis();
//render ra playlist onsreen
const onScreen = document.querySelector(".on-screen");
const closeScrenn = document.querySelector(".close-screen");
onScreen.addEventListener("click", function (e) {
  playerOnscreen.classList.toggle("show");
});
closeScrenn.addEventListener("click", function (e) {
  playerOnscreen.classList.remove("show");
});

//xử lý trình phát nhạc trên mobile{}
const menuTextMobileToggle = document.querySelectorAll(
  ".menu-playlist-item-text"
);
creatMobile.addEventListener("click", handleClickMobile);
function handleClickMobile(e) {
  menuSongPlaylist.classList.toggle("expand");
  menuTextMobileToggle.forEach((item) => {
    item.classList.toggle("expand");
  });
  document.querySelector(".menu-logo").classList.toggle("expand");
  document.querySelector(".logo-image").classList.toggle("expand");
  document.querySelector(".logo-image-mobile").classList.toggle("expand");
  document
    .querySelector(".menu-song-create-playlist-mobile ")
    .classList.toggle("expand");
}

//xử lý phần giao diện
const template = `       <div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
    <div class="modal-main">
        <h3>Giao diện</h3>
        <div class="themes-modal">
            <p>chủ đề</p>
        </div>
        <div class="themes-image">
            <div class="themes-item">
                <img src="./img/effen.jpg" alt="">
                <button class = "change-color">Áp Dụng</button>
                <span>Chủ đề 1</span>
            </div>
            <div class="themes-item">
                <img src="./img/dark.jpg" alt="">
                <button class = "change-color">Áp Dụng</button>
                <span>Chủ đề 1</span>
            </div>
            <div class="themes-item">
                <img src="./img/green.jpg" alt="">
                <button class = "change-color">Áp Dụng</button>
                <span>Chủ đề 1</span>
            </div>
            <div class="themes-item">
                <img src="./img/red.jpg" alt="">
                <button class = "change-color">Áp Dụng</button>
                <span>Chủ đề 1</span>
            </div>
            <div class="themes-item">
                <img src="./img/purple.jpg" alt="">
                <button class = "change-color">Áp Dụng</button>
                <span>Chủ đề 1</span>
            </div>
        </div>
    </div>
</div>
</div>`;
const myUser = document.querySelector(".my-user");
myUser.addEventListener("click", function (e) {
  document.body.insertAdjacentHTML("beforeend", template);
});
document.body.addEventListener("click", function (e) {
  if (e.target.matches(".modal-close")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }

  const colors = document.querySelectorAll(".change-color");
  colors.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      if (index === 0) {
        document.querySelector(".App").classList.remove("dark_color");
        document.querySelector(".App").classList.remove("green_color");
        document.querySelector(".App").classList.remove("red_color");
        document.querySelector(".App").classList.remove("purple_color");
      }
      if (index === 1) {
        document.querySelector(".App").classList.remove("green_color");
        document.querySelector(".App").classList.remove("red_color");
        document.querySelector(".App").classList.remove("purple_color");
        document.querySelector(".App").classList.add("dark_color");
      }
      if (index === 2) {
        document.querySelector(".App").classList.remove("dark_color");
        document.querySelector(".App").classList.remove("red_color");
        document.querySelector(".App").classList.remove("purple_color");
        document.querySelector(".App").classList.add("green_color");
      }
      if (index === 3) {
        document.querySelector(".App").classList.remove("dark_color");
        document.querySelector(".App").classList.remove("green_color");
        document.querySelector(".App").classList.remove("purple_color");
        document.querySelector(".App").classList.add("red_color");
      }
      if (index === 4) {0
        document.querySelector(".App").classList.remove("dark_color");
        document.querySelector(".App").classList.remove("green_color");
        document.querySelector(".App").classList.remove("red_color");
        document.querySelector(".App").classList.add("purple_color");
      }
    });
  });
});

//  fix
const volume = document.querySelector(".volume")
console.log(volume)
document.body.addEventListener("keypress", (e)=>{
  if(e.keyCode == 32){
    e.preventDefault()
    clickPlay()
  }
})
volume.addEventListener("click", (e)=>{
  song.volume = 0
  progressVolume.value = 0
  volume.classList.toggle("fa-volume-xmark")
  if(volume.classList.contains("fa-volume-xmark")){
    progressVolume.value = 0.5
  }
})