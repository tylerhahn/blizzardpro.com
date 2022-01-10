!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.storelocatorjs = e())
    : (t.storelocatorjs = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function o(s) {
      if (e[s]) return e[s].exports;
      var r = (e[s] = { i: s, l: !1, exports: {} });
      return t[s].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
    }
    return (
      (o.m = t),
      (o.c = e),
      (o.d = function (t, e, s) {
        o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (t, e) {
        if ((1 & e && (t = o(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (
          (o.r(s),
          Object.defineProperty(s, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            o.d(
              s,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return s;
      }),
      (o.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(e, "a", e), e;
      }),
      (o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (o.p = "/dist/"),
      o((o.s = "./src/storelocator/config.js"))
    );
  })({
    "./src/storelocator/config.js": function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var s,
        r =
          (s = o("./src/storelocator/js/storelocator.js")) && s.__esModule
            ? s
            : { default: s };
      o("./src/storelocator/css/vars.css"),
        o("./src/storelocator/css/loader.css"),
        o("./src/storelocator/css/detail-store.css"),
        o("./src/storelocator/css/form-search.css"),
        o("./src/storelocator/css/info-window.css"),
        o("./src/storelocator/css/nav.css"),
        o("./src/storelocator/css/sidebar.css"),
        o("./src/storelocator/css/map.css"),
        o("./src/storelocator/css/storelocator.css");
      var i = r.default;
      e.default = i;
    },
    "./src/storelocator/css/detail-store.css": function (t, e, o) {},
    "./src/storelocator/css/form-search.css": function (t, e, o) {},
    "./src/storelocator/css/info-window.css": function (t, e, o) {},
    "./src/storelocator/css/loader.css": function (t, e, o) {},
    "./src/storelocator/css/map.css": function (t, e, o) {},
    "./src/storelocator/css/nav.css": function (t, e, o) {},
    "./src/storelocator/css/sidebar.css": function (t, e, o) {},
    "./src/storelocator/css/storelocator.css": function (t, e, o) {},
    "./src/storelocator/css/vars.css": function (t, e, o) {},
    "./src/storelocator/js/default-options.js": function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      e.default = {
        apiKey: "",
        webServiceUrl: "",
        cluster: {
          options: {
            averageCenter: !0,
            gridSize: 50,
            imagePath:
              "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
            maxZoom: 13,
            minimumClusterSize: 2,
            styles: [],
            zoomOnClick: !0,
          },
          status: !1,
        },
        debug: !1,
        geolocation: { startOnLoad: !1, status: !0 },
        map: {
          markers: {
            width: 30,
            height: 40,
            styles: [
              {
                category: "userPosition",
                colorBackground: "#4285f4",
                colorText: "#fff",
              },
            ],
          },
          options: {
            center: [46.227638, 2.213749],
            disableDefaultUI: !1,
            fullscreenControl: !0,
            mapTypeControl: !1,
            mapTypeId: "roadmap",
            scaleControl: !1,
            scrollwheel: !0,
            streetViewControl: !1,
            styles: [],
            zoom: 6,
          },
        },
        requests: { searchRadius: 50, storesLimit: 20 },
        selectors: {
          container: ".storelocator",
          formSearch: ".storelocator-formSearch",
          geolocButton: ".storelocator-geolocButton",
          inputSearch: ".storelocator-inputSearch",
          loader: ".storelocator-loader",
          nav: ".storelocator-nav",
          searchFilters: "[data-filter]",
          sidebar: ".storelocator-sidebar",
          sidebarResults: ".storelocator-sidebarResults",
        },
        markersUpdate: {
          limitInViewport: 30,
          maxRadius: 150,
          status: !0,
          stepRadius: 50,
        },
      };
    },
    "./src/storelocator/js/storelocator.js": function (t, e, o) {
      "use strict";
      /**
       * @name Storelocatorjs
       * @version 2.1.0
       * @license GPLv3 for Open Source use or Storelocatorjs Commercial License for commercial use
       * @author: Joris DANIEL aka Yoriiis
       * @description: Storelocatorjs is a fast and lightweight Javascript library for build your own customizable store locator with a minimalist theme. The cloud function is included to handle store filter requests.
       * {@link https://yoriiis.github.io/storelocatorjs}
       * @copyright 2019 Joris DANIEL aka Yoriiis <https://yoriiis.github.io/storelocatorjs>
       */ Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var s = n(o("./src/storelocator/js/templates/sidebar-item-result.js")),
        r = n(o("./src/storelocator/js/templates/info-window.js")),
        i = n(o("./src/storelocator/svg/marker.svg")),
        a = n(o("./src/storelocator/js/default-options.js"));
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = class {
        constructor({ options: t, onReady: e }) {
          if (
            ((this.options = this.extend(!0, a.default, t)),
            (this.onReady = e),
            (this.isLoading = !1),
            (this.mapHasRequest = !1),
            "" === this.options.webServiceUrl)
          )
            throw new Error("storelocatorjs :: webServiceUrl is empty");
          if ("" === this.options.apiKey)
            throw new Error("storelocatorjs :: apiKey is empty");
          this.cacheSelectors(),
            this.buildLoader(),
            (this.markerStyles = this.getMarkerStylesByCategory()),
            (window.googleMapLoaded = () => {
              this.options.geolocation.status && this.initGeolocation(),
                this.initMap(),
                this.addGoogleMapsEvents(),
                this.initAutocomplete();
            }),
            this.loadAPI(this.options.apiKey),
            this.addEvents();
        }
        cacheSelectors() {
          (this.containerStorelocator = document.querySelector(
            this.options.selectors.container
          )),
            (this.formSearch = this.containerStorelocator.querySelector(
              this.options.selectors.formSearch
            )),
            (this.inputSearch = this.containerStorelocator.querySelector(
              this.options.selectors.inputSearch
            )),
            (this.searchFilters = [
              ...this.containerStorelocator.querySelectorAll(
                this.options.selectors.searchFilters
              ),
            ]),
            (this.nav = this.containerStorelocator.querySelector(
              this.options.selectors.nav
            )),
            (this.sidebar = this.containerStorelocator.querySelector(
              this.options.selectors.sidebar
            )),
            (this.sidebarResults = this.containerStorelocator.querySelector(
              this.options.selectors.sidebarResults
            )),
            (this.geolocButton = this.containerStorelocator.querySelector(
              this.options.selectors.geolocButton
            ));
        }
        buildLoader() {
          (this.loader = this.containerStorelocator.querySelector(
            this.options.selectors.loader
          )),
            (this.loader.innerHTML =
              '\n\t\t\t<div class="storelocator-loaderBar"></div>\n\t\t\t<div class="storelocator-loaderBar"></div>\n\t\t\t<div class="storelocator-loaderBar"></div>');
        }
        loadAPI(t) {
          let e = document.createElement("script");
          (e.async = !0),
            (e.type = "text/javascript"),
            (e.src = `https://maps.googleapis.com/maps/api/js?key=${t}&callback=window.googleMapLoaded&libraries=places`),
            document.getElementsByTagName("body")[0].appendChild(e);
        }
        addEvents() {
          this.sidebarResults.addEventListener(
            "click",
            this.onClickSidebarResultItem.bind(this)
          ),
            [...this.nav.querySelectorAll("[data-switch-view]")].forEach(
              (t) => {
                t.addEventListener("click", this.onClickSidebarNav.bind(this));
              }
            ),
            this.formSearch.addEventListener("submit", (t) => {
              t.preventDefault();
            }),
            this.searchFilters.forEach((t) => {
              t.addEventListener(
                "change",
                this.onChangeSearchFormFilter.bind(this)
              );
            }),
            this.geolocButton.addEventListener(
              "click",
              this.onClickGeolocationButton.bind(this)
            );
        }
        addGoogleMapsEvents() {
          window.google.maps.event.addDomListener(
            this.inputSearch,
            "keydown",
            function (t) {
              13 === t.keyCode && t.preventDefault();
            }
          );
        }
        loading(t) {
          t
            ? (this.loader.classList.add("active"), (this.isLoading = !0))
            : setTimeout(() => {
                this.loader.classList.remove("active"), (this.isLoading = !1);
              }, 1050);
        }
        initMap() {
          (this.overlayGlobal = null),
            (this.overlayLimit = null),
            (this.markers = []),
            (this.currentInfoWindow = null),
            (this.infoWindowOpened = !1),
            (this.boundsChangeTimer = null),
            (this.serviceDistanceMatrix =
              new window.google.maps.DistanceMatrixService()),
            (this.boundsGlobal = new window.google.maps.LatLngBounds()),
            (this.currentRadius = this.options.requests.searchRadius),
            this.options.markersUpdate.status &&
              (this.boundsWithLimit = new window.google.maps.LatLngBounds()),
            (this.infoWindow = new window.google.maps.InfoWindow()),
            (this.geocoder = new window.google.maps.Geocoder()),
            (this.searchData = { position: null }),
            (this.geolocationData = {
              userPositionChecked: !1,
              marker: null,
              position: null,
            });
          let t = this.extend(!0, {}, this.options.map.options);
          t.center = new window.google.maps.LatLng(t.center[0], t.center[1]);
          const e = this.containerStorelocator.querySelector(
            "#storelocator-googleMapsCanvas"
          );
          if (
            ((this.map = new window.google.maps.Map(e, t)),
            void 0 !== window.MarkerClusterer && this.options.cluster.status)
          ) {
            let t = this.extend(!0, this.options.cluster.options);
            this.markerCluster = new window.MarkerClusterer(
              this.map,
              this.markers,
              t
            );
          }
          this.options.markersUpdate.status &&
            this.map.addListener("bounds_changed", () => {
              this.isLoading || this.infoWindowOpened || this.boundsChanged();
            }),
            "function" == typeof this.onReady && this.onReady(this.map);
        }
        initGeolocation() {
          navigator.geolocation &&
            this.options.geolocation.startOnLoad &&
            "https:" === window.location.protocol &&
            this.checkUserPosition();
        }
        onClickGeolocationButton(t) {
          t.preventDefault(),
            navigator.geolocation &&
              (this.loading(!0), this.checkUserPosition());
        }
        onClickSidebarNav(t) {
          let e = this.containerStorelocator.querySelector(
            ".storelocator-googleMaps"
          );
          t.preventDefault(),
            this.nav.querySelector(".active").classList.remove("active"),
            t.target.parentNode.classList.add("active"),
            "map" === t.target.getAttribute("data-target")
              ? (e.classList.add("active"),
                this.sidebar.classList.remove("active"),
                window.google.maps.event.trigger(this.map, "resize"))
              : (this.sidebar.classList.add("active"),
                e.classList.remove("active"));
        }
        onChangeSearchFormFilter(t) {
          if (!this.mapHasRequest) return !1;
          this.triggerRequest({
            lat: this.searchData.lat,
            lng: this.searchData.lng,
            fitBounds: !0,
          });
        }
        onClickSidebarResultItem(t) {
          if (
            t.target &&
            t.target.parentNode.classList.contains("store-center-marker-js")
          ) {
            t.preventDefault();
            let e = t.target.parentNode,
              o = this.markers[e.getAttribute("data-marker-index")];
            this.map.panTo(o.getPosition()),
              this.map.setZoom(16),
              this.openInfoWindow(o),
              this.containerStorelocator
                .querySelector('[data-switch-view][data-target="map"]')
                .click(),
              window.google.maps.event.trigger(this.map, "resize");
          }
        }
        checkUserPosition() {
          navigator.geolocation.getCurrentPosition(
            (t) => {
              let e = t.coords.latitude,
                o = t.coords.longitude,
                s = null,
                r = new window.google.maps.LatLng(e, o),
                i = { position: r, map: this.map };
              this.isBrowserIE() ||
                (i.icon = this.options.map.markers.styles.length
                  ? this.getIconMarkerByCategory("userPosition").url
                  : ""),
                (s = new window.google.maps.Marker(i)),
                (this.geolocationData.userPositionChecked = !0),
                (this.geolocationData.position = r),
                (this.geolocationData.marker = s),
                "" !== this.inputSearch.value && (this.inputSearch.value = ""),
                this.triggerRequest({ lat: e, lng: o });
            },
            (t) => {
              this.loading(!1);
            }
          );
        }
        boundsChanged() {
          this.markers.length &&
            (clearTimeout(this.boundsChangeTimer),
            (this.boundsChangeTimer = setTimeout(() => {
              let t = [];
              this.markers.forEach((e, o) => {
                e.getVisible() &&
                  this.map.getBounds().contains(e.getPosition()) &&
                  t.push(o);
              }),
                0 === t.length
                  ? this.refreshMapOnBoundsChanged({ updatePosition: !0 })
                  : t.length === this.markers.length &&
                    this.currentRadius < this.options.markersUpdate.maxRadius &&
                    this.refreshMapOnBoundsChanged({ increaseRadius: !0 });
            }, 600)));
        }
        refreshMapOnBoundsChanged({ updatePosition: t, increaseRadius: e }) {
          let o = 0,
            s = 0;
          t
            ? ((o = this.map.getCenter().lat()),
              (s = this.map.getCenter().lng()))
            : e &&
              (({ lat: o, lng: s } = this.searchData),
              (this.currentRadius =
                this.currentRadius + this.options.markersUpdate.stepRadius)),
            this.triggerRequest({ lat: o, lng: s, fitBounds: !1 });
        }
        initAutocomplete() {
          let t = new window.google.maps.places.Autocomplete(
            this.inputSearch,
            {}
          );
          this.inputSearch.focus(),
            t.bindTo("bounds", this.map),
            t.addListener("place_changed", () => {
              this.loading(!0);
              let e = t.getPlace();
              e.geometry
                ? this.autocompleteRequest({
                    lat: e.geometry.location.lat(),
                    lng: e.geometry.location.lng(),
                  })
                : this.geocoder.geocode({ address: e.name }, (t, e) => {
                    e === window.google.maps.GeocoderStatus.OK &&
                      this.autocompleteRequest({
                        lat: t[0].geometry.location.lat(),
                        lng: t[0].geometry.location.lng(),
                      });
                  });
            });
        }
        autocompleteRequest({ lat: t, lng: e }) {
          (this.userPositionChecked = !1),
            (this.currentRadius = this.options.requests.searchRadius),
            this.triggerRequest({ lat: t, lng: e });
        }
        triggerRequest({ lat: t, lng: e, fitBounds: o = !0 }) {
          (this.mapHasRequest = !0), this.loading(!0);
          let s = this.serializeForm({ lat: t, lng: e });
          (this.searchData.lat = t),
            (this.searchData.lng = e),
            (this.searchData.position = new window.google.maps.LatLng(t, e));
          let r = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(s),
          };
          fetch(this.options.webServiceUrl, r)
            .then((t) => {
              if (!t.ok) throw new Error(t);
              return t;
            })
            .then((t) => t.json())
            .then((t) => {
              let e = t;
              null !== e && this.parseStores({ stores: e, fitBounds: o });
            })
            .catch((t) => {
              throw (this.loading(!1), new Error(t));
            });
        }
        serializeForm({ lat: t = !1, lng: e = !1 }) {
          let o = {},
            s = [];
          return (
            this.searchFilters.forEach((t, e) => {
              t.checked && s.push(t.value);
            }),
            (o.categories = s),
            t && e && ((o.lat = t), (o.lng = e)),
            (o.radius = this.currentRadius),
            (o.limit = this.options.requests.storesLimit),
            o
          );
        }
        parseStores(t) {
          let e = !0,
            { stores: o } = t,
            { fitBounds: r } = t,
            i = `\n\t\t\t<p class="storelocator-sidebarIntro">\n\t\t\t\t${o.length} results sorted by distance correspond to your research\n\t\t\t</p>\n\t\t\t<ul class="storelocator-sidebarResultsList">`;
          this.destroyMarkers(),
            (this.infoWindowOpened = !1),
            (this.boundsGlobal = new window.google.maps.LatLngBounds()),
            this.options.markersUpdate.status &&
              (this.boundsWithLimit = new window.google.maps.LatLngBounds()),
            this.geolocationData.userPositionChecked &&
              (this.markers.push(this.geolocationData.marker),
              this.boundsGlobal.extend(this.geolocationData.position));
          let a = this.searchData.position;
          o.forEach((t, o) => {
            (e = !1),
              (t.index = o),
              (t.position = new window.google.maps.LatLng(t.lat, t.lng)),
              this.boundsGlobal.extend(t.position),
              this.createMarkers(t),
              (i += s.default.call(this, { store: t, origin: a }));
          }),
            (i += "</ul>"),
            e
              ? ((this.sidebarResults.innerHTML =
                  '\n\t\t\t\t<p class="storelocator-sidebarNoResults">\n\t\t\t\t\tNo results for your request.<br />\n\t\t\t\t\tPlease try a new search with differents choices.\n\t\t\t\t</p>'),
                null !== this.overlayLimit && this.overlayLimit.setMap(null),
                null !== this.overlayGlobal && this.overlayGlobal.setMap(null))
              : ((this.sidebarResults.innerHTML = i),
                "undefined" != typeof MarkerClusterer &&
                  this.options.cluster.status &&
                  this.markerCluster.addMarkers(this.markers),
                this.options.markersUpdate.status
                  ? this.createViewportWithLimitMarker({
                      stores: o,
                      fitBounds: r,
                    })
                  : r && this.map.fitBounds(this.boundsGlobal)),
            this.loading(!1);
        }
        createViewportWithLimitMarker(t) {
          let { stores: e } = t,
            o = this.options.markersUpdate.limitInViewport,
            s = e.length < o ? e.length : o;
          this.geolocationData.userPositionChecked &&
            this.boundsWithLimit.extend(this.geolocationData.position);
          for (let t = 0; t < s; t++)
            this.boundsWithLimit.extend(e[t].position);
          t.fitBounds && this.map.fitBounds(this.boundsWithLimit),
            this.options.debug && this.createOverlays();
        }
        createOverlays() {
          null !== this.overlayGlobal && this.overlayGlobal.setMap(null),
            (this.overlayGlobal = new window.google.maps.Rectangle({
              bounds: this.boundsGlobal,
              strokeColor: null,
              strokeOpacity: 0,
              fillColor: "#ff0000",
              fillOpacity: 0.35,
              map: this.map,
            })),
            null !== this.overlayLimit && this.overlayLimit.setMap(null),
            (this.overlayLimit = new window.google.maps.Rectangle({
              bounds: this.boundsWithLimit,
              strokeColor: null,
              strokeOpacity: 0,
              fillColor: "#54ff00",
              fillOpacity: 0.35,
              map: this.map,
            }));
        }
        openInfoWindow(t) {
          let e = this.searchData.position,
            o = (0, r.default)({ store: t.store, origin: e });
          this.infoWindow.setContent(o),
            window.google.maps.event.addListener(
              this.infoWindow,
              "closeclick",
              () => {
                this.infoWindowOpened = !1;
              }
            ),
            null !== this.currentInfoWindow && this.currentInfoWindow.close(),
            (this.currentInfoWindow = this.infoWindow),
            this.infoWindow.open(this.map, t);
        }
        destroyMarkers() {
          "undefined" != typeof MarkerClusterer &&
            this.options.cluster.status &&
            this.markerCluster.clearMarkers();
          for (let t = this.markers.length - 1; t >= 0; t--) {
            let e = this.markers[t];
            window.google.maps.event.clearInstanceListeners(e), e.setMap(null);
          }
          this.markers = [];
        }
        createMarkers(t) {
          let e = this.markerStyles[t.category],
            o = {
              position: t.position,
              map: this.map,
              optimized: !0,
              label: {
                text: (t.index + 1).toString(),
                fontFamily: "inherit",
                fontSize: "13px",
                fontWeight: "500",
                color: e ? e.colorText : "#000",
              },
            };
          this.isBrowserIE() ||
            (o.icon = this.options.map.markers.styles.length
              ? this.getIconMarkerByCategory(t.category)
              : "");
          let s = new window.google.maps.Marker(o);
          (s.store = t),
            this.markers.push(s),
            window.google.maps.event.addListener(s, "click", () => {
              (this.infoWindowOpened = !0), this.openInfoWindow(s);
            });
        }
        getMarkerStylesByCategory() {
          let t = {};
          return (
            this.options.map.markers.styles.forEach((e) => {
              t[e.category] = {
                colorBackground: e.colorBackground,
                colorText: e.colorText,
              };
            }),
            t
          );
        }
        getIconMarkerByCategory(t) {
          let e = this.options.map.markers.width / 2 - 0.9,
            o = this.options.map.markers.height / 2 - 3,
            s = this.markerStyles[t]
              ? this.markerStyles[t].colorBackground
              : "#e5454c";
          return {
            url: this.generateMarkerSVG({
              colorBackground: s,
              width: this.options.map.markers.width,
              height: this.options.map.markers.height,
            }),
            labelOrigin: new window.google.maps.Point(e, o),
          };
        }
        generateMarkerSVG(t) {
          let e = new DOMParser()
            .parseFromString(i.default, "text/html")
            .querySelector("svg");
          e.setAttribute("width", `${t.width}px`),
            e.setAttribute("height", `${t.height}px`),
            e.querySelectorAll("path").forEach((e) => {
              e.setAttribute("fill", t.colorBackground);
            });
          var o = new XMLSerializer().serializeToString(e);
          let s = "data:image/svg+xml;base64,";
          new window.google.maps.Size(t.width, t.height);
          return s + btoa(o);
        }
        isBrowserIE() {
          return !!(document.documentMode && document.documentMode >= 9);
        }
        extend(t = !1, ...e) {
          let o = {},
            s = (e) => {
              for (let s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  (t &&
                  "[object Object]" === Object.prototype.toString.call(e[s])
                    ? (o[s] = this.extend(!0, o[s], e[s]))
                    : (o[s] = e[s]));
            };
          return (
            e.forEach((t) => {
              s(t);
            }),
            o
          );
        }
      };
    },
    "./src/storelocator/js/templates/info-window.js": function (t, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function ({ store: t, origin: e }) {
          return `\n\t\t<div class="storelocator-infoWindow">\n\t\t\t${
            t.picture
              ? `<span class="storelocator-pictureStore">\n\t\t\t\t\t<img src="${t.picture}" alt="${t.title}" />\n\t\t\t\t</span>`
              : ""
          }\n\t\t\t<div class="storelocator-detailStore">\n\t\t\t\t${
            t.title
              ? `<span class="storelocator-detailStoreTitle">${t.index + 1}. ${
                  t.title
                }</span>`
              : ""
          }\n\t\t\t\t<a href="http://www.google.fr/maps/dir/${e}/${t.lat},${
            t.lng
          }" title="See the itinerary on Google Maps" target="_blank" class="storelocator-detailStoreDistance">\n\t\t\t\t\t<span>${t.distance.toFixed(
            2
          )}km</span>\n\t\t\t\t\t${r.default}\n\t\t\t\t\t</a>\n\t\t\t\t${
            t.address
              ? `<span class="storelocator-detailStoreAddress">${t.address}</span>`
              : ""
          }\n\t\t\t\t${
            t.zipcode
              ? `<span class="storelocator-detailStoreZipcode">${t.zipcode}</span>`
              : ""
          }\n\t\t\t\t${
            t.city
              ? `<span class="storelocator-detailStoreCity">${t.city}</span>`
              : ""
          }\n\t\t\t\t${
            t.phone
              ? `<span class="storelocator-detailStorePhone"><a href="tel:${t.phone}" title="Call">${t.phone}</a></span>`
              : ""
          }\n\t\t\t\t${
            void 0 !== t.link
              ? `<a href="${t.link}" title="Visit website" target="_blank" class="storelocator-detailStoreUrl">${t.link}</a>`
              : ""
          }\n\t\t\t</div>\n\t\t</div>`;
        });
      var s,
        r =
          (s = o("./src/storelocator/svg/route.svg")) && s.__esModule
            ? s
            : { default: s };
    },
    "./src/storelocator/js/templates/sidebar-item-result.js": function (
      t,
      e,
      o
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function ({ store: t, origin: e }) {
          return `\n\t\t<li class="storelocator-sidebarResultsListItem" data-category="${
            t.category
          }">\n\t\t\t<div class="storelocator-detailStore">\n\t\t\t\t${
            t.title
              ? `<span class="storelocator-detailStoreTitle"><a href="" title="See on the map" class="store-center-marker-js" data-marker-index="${
                  t.index
                }">${t.index + 1}. <span>${t.title}</span></a></span>`
              : ""
          }\n\t\t\t\t<a href="http://www.google.fr/maps/dir/${e}/${t.lat},${
            t.lng
          }" title="See the itinerary on Google Maps" target="_blank" class="storelocator-detailStoreDistance">\n\t\t\t\t\t<span>${t.distance.toFixed(
            2
          )}km</span>\n\t\t\t\t\t${r.default}\n\t\t\t\t</a>\n\t\t\t\t${
            t.address
              ? `<span class="storelocator-detailStoreAddress">${t.address}</span>`
              : ""
          }\n\t\t\t\t${
            t.zipcode
              ? `<span class="storelocator-detailStoreZipcode">${t.zipcode}</span>`
              : ""
          }\n\t\t\t\t${
            t.city
              ? `<span class="storelocator-detailStoreCity">${t.city}</span>`
              : ""
          }\n\t\t\t\t${
            t.phone
              ? `<span class="storelocator-detailStorePhone"><a href="tel:${t.phone}" title="Call">${t.phone}</a></span>`
              : ""
          }\n\t\t\t</div>\n\t\t</li>`;
        });
      var s,
        r =
          (s = o("./src/storelocator/svg/route.svg")) && s.__esModule
            ? s
            : { default: s };
    },
    "./src/storelocator/svg/marker.svg": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="31.5 5.5 70.6 97.9"><path d="M64.7 102.2c.1.2.2.3.3.4.4.5 1 .8 1.6.8.7 0 1.3-.1 1.8-.8.1-.1.3-.3.3-.5C76 91.2 83.2 80.3 90.2 69.4c4.5-7 9.7-13.8 11.1-22.1 1.7-9.9-.7-20.1-6.7-28.1C82.7 3.3 59.2.9 44 13.7c-7.3 6.1-11.8 15-12.4 24.5-.8 10 3 17.6 8.2 25.8 8 12.8 16.4 25.5 24.9 38.2z"></path><path d="M97.1 47.2c-1.5 7.3-6.6 13.8-10.7 20-6.4 10.1-12.9 20-19.6 29.9-5.7-8.3-11.2-16.6-16.6-25-3.7-5.7-7.5-11.4-10.8-17.3-5.2-9.2-4.6-21.2.9-30.2 10.4-17.5 35.3-20 49.1-5.2 6.9 7.4 9.7 18 7.7 27.8z"></path></svg>';
    },
    "./src/storelocator/svg/route.svg": function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" class="storelocator-detailStoreIconRoute" viewBox="1772 1772 19.185 20"><path d="M1791.074 1775.318a.356.356 0 0 1 0 .514l-1.574 1.573c-.209.21-.464.313-.761.313h-15.009a.679.679 0 0 1-.502-.213.688.688 0 0 1-.211-.502v-2.859c0-.192.07-.36.211-.502a.688.688 0 0 1 .502-.211h6.434v-.716c0-.192.07-.36.211-.502a.682.682 0 0 1 .502-.213h1.431a.68.68 0 0 1 .502.213c.142.142.211.31.211.502v.716h5.719c.297 0 .552.102.761.312l1.573 1.575zm-10.91 10.262h2.856v5.716a.69.69 0 0 1-.211.505.686.686 0 0 1-.502.211h-1.431a.688.688 0 0 1-.502-.211.693.693 0 0 1-.211-.505v-5.716zm9.29-5.003c.193 0 .361.07.502.211.142.142.212.31.212.502v2.859c0 .192-.07.361-.212.504a.684.684 0 0 1-.502.212h-15.009c-.297 0-.551-.105-.76-.314l-1.574-1.572a.357.357 0 0 1 0-.515l1.574-1.576c.209-.209.463-.311.76-.311h5.719v-2.146h2.856v2.146h6.434z"></path></svg>';
    },
  }).default;
});
