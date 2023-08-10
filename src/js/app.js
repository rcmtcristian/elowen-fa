import FontFaceObserver from "fontfaceobserver";
import imagesLoaded from "imagesloaded";
import * as THREE from "three";

import "../css/index.scss";

import Scene from "./Scene";
import { gsap } from "gsap";

const fontGraphik = new Promise((resolve) => {
  new FontFaceObserver("Graphik").load().then(() => {
    resolve();
  });
});

const preloadImages = new Promise((resolve) => {
  imagesLoaded(document.querySelectorAll("img"), { background: true }, resolve);
});

const textureLoader = new THREE.TextureLoader();

const loadedTextures = {};

const textureUrls = [
  "/img/lyrissa.webp",
  "/img/zephyr.webp",
  "/img/auriel.webp",
  "/img/sylvaia.webp",
  "/img/elixia.webp",
  "/img/seraphine.webp",
  "/img/infinite.webp",
];

const loadTextures = Promise.all(
  textureUrls.map(
    (url) =>
      new Promise((resolve) => {
        textureLoader.load(url, (texture) => {
          loadedTextures[url] = texture;
          resolve(texture);
        });
      })
  )
);

Promise.all([fontGraphik, preloadImages, loadTextures]).then(() => {
  new Scene(
    document.getElementById("webgl"),
    document.getElementById("page__wrapper"),
    loadedTextures
  );
});
