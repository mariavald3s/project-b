<template>
  <div
    @click="showDescript"
    class="text-[#0B0C10] bg-[#C4C4C4] rounded-lg overflow-hidden hover:bg-[#a7a6a6] m-3"
  >
  <div >
    <img :src="image" alt="product image" class="h-full w-full"/>
    </div>
    <p class="p-2 flex justify-center font-bold">
      {{ name }}
    </p>
    <div v-if="clicked" class="px-5 pb-3 flex justify-center flex-col">
      <p class="flex justify-center">{{descript}}</p>
      <button class="snipcart-add-item m-3 p-2 bg-[#FC66A5] rounded-full hover:bg-[#e44c8b]"
  :data-item-id="name"
  :data-item-price="price"
  :data-item-url="image"
  :data-item-description="descript"
  :data-item-image="image"
  :data-item-name="name">
  Add to cart
</button>
      <!-- <button class="m-3 p-2 bg-[#FC66A5] rounded-full">Add to Cart</button> -->
    </div>
  </div>
</template>

<script>
window.SnipcartSettings = {
  publicApiKey:
    "ZGFlOTA5ZTAtMzk3YS00OWYyLTgxMDEtZjJkYjc4MDZjM2ViNjM3ODg1ODQ0NjYyOTEzOTY2",
  loadStrategy: "on-user-interaction",
};

(() => {
  var a, d;
  (d = (a = window.SnipcartSettings).version) != null || (a.version = "3.0");
  var s, S;
  (S = (s = window.SnipcartSettings).currency) != null || (s.currency = "usd");
  var l, p;
  (p = (l = window.SnipcartSettings).timeoutDuration) != null ||
    (l.timeoutDuration = 2750);
  var w, u;
  (u = (w = window.SnipcartSettings).domain) != null ||
    (w.domain = "cdn.snipcart.com");
  var m, g;
  (g = (m = window.SnipcartSettings).protocol) != null ||
    (m.protocol = "https");
  var y =
      window.SnipcartSettings.version.includes("v3.0.0-ci") ||
      (window.SnipcartSettings.version != "3.0" &&
        window.SnipcartSettings.version.localeCompare("3.4.0", void 0, {
          numeric: !0,
          sensitivity: "base",
        }) === -1),
    f = ["focus", "mouseover", "touchmove", "scroll", "keydown"];
  window.LoadSnipcart = o;
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", r)
    : r();
  function r() {
    window.SnipcartSettings.loadStrategy
      ? window.SnipcartSettings.loadStrategy === "on-user-interaction" &&
        (f.forEach((t) => document.addEventListener(t, o)),
        setTimeout(o, window.SnipcartSettings.timeoutDuration))
      : o();
  }
  var c = !1;
  function o() {
    if (c) return;
    c = !0;
    let t = document.getElementsByTagName("head")[0],
      e = document.querySelector("#snipcart"),
      i = document.querySelector(
        `src[src^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][src$="snipcart.js"]`
      ),
      n = document.querySelector(
        `link[href^="${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}"][href$="snipcart.css"]`
      );
    e ||
      ((e = document.createElement("div")),
      (e.id = "snipcart"),
      e.setAttribute("hidden", "true"),
      document.body.appendChild(e)),
      h(e),
      i ||
        ((i = document.createElement("script")),
        (i.src = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.js`),
        (i.async = !0),
        t.appendChild(i)),
      n ||
        ((n = document.createElement("link")),
        (n.rel = "stylesheet"),
        (n.type = "text/css"),
        (n.href = `${window.SnipcartSettings.protocol}://${window.SnipcartSettings.domain}/themes/v${window.SnipcartSettings.version}/default/snipcart.css`),
        t.prepend(n)),
      f.forEach((v) => document.removeEventListener(v, o));
  }
  function h(t) {
    !y ||
      ((t.dataset.apiKey = window.SnipcartSettings.publicApiKey),
      window.SnipcartSettings.addProductBehavior &&
        (t.dataset.configAddProductBehavior =
          window.SnipcartSettings.addProductBehavior),
      window.SnipcartSettings.modalStyle &&
        (t.dataset.configModalStyle = window.SnipcartSettings.modalStyle),
      window.SnipcartSettings.currency &&
        (t.dataset.currency = window.SnipcartSettings.currency),
      window.SnipcartSettings.templatesUrl &&
        (t.dataset.templatesUrl = window.SnipcartSettings.templatesUrl));
  }
})();

export default {
  props: ["name", "image", "price", "descript"],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    showDescript() {
      this.clicked = !this.clicked;
    },
  },
};
</script>
