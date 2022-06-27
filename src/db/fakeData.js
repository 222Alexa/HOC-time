const USID = require("usid");
const usid = new USID();

const videoList = [
  {
    id: usid.rand(7),
    name: "name1",
    url: "https://video-preview.s3.yandex.net/EaPOSAAAAAA.mp4",
    dateTime: "2021-05-01 11:45:20",
  },
  {
    id: usid.rand(7),
    name: "name2",
    url: "https://video-preview.s3.yandex.net/V6SA6QAAAAA.mp4",
    dateTime: "2022-06-06 08:45:20",
  },
  {
    id: usid.rand(7),
    name: "name3",
    url: "https://video-preview.s3.yandex.net/J68KXAAAAAA.mp4",
    dateTime: "2022-06-22 11:45:20",
  },
  {
    id: usid.rand(7),
    name: "name4",
    url: "https://video-preview.s3.yandex.net/b26xbQAAAAA.mp4",
    dateTime: "2021-11-11 23:00:08",
  },
  {
    id: usid.rand(7),
    name: "name5",
    url: "https://video-preview.s3.yandex.net/acqgGQAAAAA.mp4",
    dateTime: "2022-02-28 08:40:29",
  },
  {
    id: usid.rand(7),
    name: "name6",
    url: "https://video-preview.s3.yandex.net/W_0QMAEAAAA.mp4",
    dateTime: "2022-06-27 14:18:50",
  },
];

export default videoList;